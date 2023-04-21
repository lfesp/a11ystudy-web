import { scaleLinear, scaleLog, scaleSqrt, scaleOrdinal, scaleTime } from "@visx/scale";
import { extent, format, timeFormat } from "d3";
import { Circle } from "@visx/shape";
import { Group } from "@visx/group";
import { Axis, AxisLeft } from "@visx/axis";
import { GridColumns } from "@visx/grid";
import { LegendOrdinal } from "@visx/legend";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import { useTooltip, TooltipWithBounds, defaultStyles } from "@visx/tooltip";
import { useRef, useMemo, useCallback } from "react";
import { localPoint } from "@visx/event";
import { voronoi } from "@visx/voronoi";

const formatTime = timeFormat("%m/%d/%Y");


const ScatterPlot = ({
  data = [],
  width = 800,
  height = 200,
  margin = { top: 30, left: 60, right: 40, bottom: 50 }
}) => {
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  //const parseTime = timeParse("%Y-%m-%dT%H:%M:%S.%LZ");
  const x = (d) => new Date(d.snapshot_timestamp).getFullYear();
  const y = (d) => d.violations.length;
  const radius = (d) => d.organic_traffic;
  const color = (d) => 1;

  // const xScale = scaleLog({
  //   range: [margin.left, innerWidth + margin.left],
  //   domain: extent(data, x)
  // });

  const xScale = scaleLinear({
    range: [margin.left, innerWidth + margin.left],
    domain: extent(data, x)
  });

  const yScale = scaleLinear({
    range: [innerHeight + margin.top, margin.top],
    domain: extent(data, y),
    nice: true
  });

  const colorScale = scaleOrdinal({
    range: ["#FF0000"],
    domain: [0]
  });

  const rScale = scaleSqrt({
    range: [3, 30],
    domain: extent(data, radius)
  });

  // Tooltip handlers
  const {
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipOpen,
    tooltipTop = 0,
    tooltipLeft = 0
  } = useTooltip();

  const voronoiLayout = useMemo(
    () =>
      voronoi({
        x: (d) => xScale(x(d)) ?? 0,
        y: (d) => yScale(y(d)) ?? 0,
        width,
        height
      })(data),
    [data, width, height, xScale, yScale]
  );

  let tooltipTimeout;
  const svgRef = useRef(null);

  const handleMouseMove = useCallback(
    (event) => {
      if (tooltipTimeout) clearTimeout(tooltipTimeout);
      if (!svgRef.current) return;

      // find the nearest polygon to the current mouse position
      const point = localPoint(svgRef.current, event);
      if (!point) return;
      const neighborRadius = 100;
      const closest = voronoiLayout.find(point.x, point.y, neighborRadius);
      if (closest) {
        showTooltip({
          tooltipLeft: xScale(x(closest.data)),
          tooltipTop: yScale(y(closest.data)),
          tooltipData: closest.data
        });
      }
    },
    [xScale, yScale, showTooltip, voronoiLayout, tooltipTimeout]
  );

  const handleMouseLeave = useCallback(() => {
    tooltipTimeout = window.setTimeout(() => {
      hideTooltip();
    }, 1500);
  }, [hideTooltip]);

  // Sort the data
  data = data.sort((a, b) => a.organic_traffic - b.organic_traffic);

  return (
    <>
      {/* <LegendOrdinal
        scale={colorScale}
        direction="row"
        shape="circle"
        style={{
          display: "flex",
          justifyContent: "space-around"
        }}
      /> */}
      <svg width={width} height={height} ref={svgRef}>
        <rect
          x={margin.left}
          y={margin.top}
          width={innerWidth}
          height={innerHeight}
          fill="transparent"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseLeave}
        />
        <AxisLeft scale={yScale} left={margin.left} label="Violation Count" />
        <Axis
          orientation="top"
          scale={xScale}
          top={margin.top}
          // tickFormat={format("~d")}
          numTicks={2}
          tickStroke="transparent"
          stroke="transparent"
        />
        <Axis
          orientation="bottom"
          scale={xScale}
          top={innerHeight + margin.top}
          numTicks={10}
          // tickFormat={format("d")}
          label="Snapshot Date"
        />
        <GridColumns
          top={margin.top}
          scale={xScale}
          height={innerHeight}
          strokeOpacity={0.8}
          pointerEvents="none"
          numTicks={2}
        />
        <Group pointerEvents="none">
          {data.map((point, i) => (
            <Circle
              key={i}
              cx={xScale(x(point))}
              cy={yScale(y(point))}
              r={rScale(radius(point))}
             //  fill={colorScale(color(point))}
              fillOpacity={0.8}
              fill={
                tooltipData === point ? "#0000ff" : colorScale(color(point))
              }
            />
          ))}
        </Group>
      </svg>
      {tooltipOpen && tooltipData && tooltipLeft != null && tooltipTop != null && (
        <TooltipWithBounds
          left={tooltipLeft + 10}
          top={tooltipTop + 10}
          style={defaultStyles}
          className={"w-1/6"}
        >
          <h3
            style={{
              color: colorScale(color(tooltipData)),
              paddding: 0,
              margin: 0
            }}
          >
            {tooltipData.domain}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr"
            }}
          >
            <div>Year</div>
            <div style={{ textAlign: "right" }}>{`${x(tooltipData)}`}</div>
            <div>Violations</div>
            <div style={{ textAlign: "right" }}>
              {Math.round(y(tooltipData))}
            </div>
            <div>Organic Traffic</div>
            <div style={{ textAlign: "right" }}>{`${format("~d")(
              radius(tooltipData)
            )} visits`}</div>
          </div>
        </TooltipWithBounds>
      )}
    </>
  );
};

const ScatterPlotWrapper = ({data}) => {
  return (
    <ParentSize>
      {({ width, height }) => <ScatterPlot width={width} height={height} data={data} />}
    </ParentSize>
  )
};

export default ScatterPlotWrapper;