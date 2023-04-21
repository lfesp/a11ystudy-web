import {
  Axis, // any of these can be non-animated equivalents
  Grid,
  LineSeries,
  AnimatedLineSeries,
  AnimatedAreaSeries,
  AreaSeries,
  XYChart,
  Tooltip,
  DataProvider,
  DataContext,
} from "@visx/xychart";
import { curveNatural } from "@visx/curve";
import { extent, format, timeFormat, timeParse, max, min } from "d3";
import { useContext } from "react";

const formatDate = timeFormat("%m/%d/%Y");
const formatYear = timeFormat("%Y");

const TimePlot = ({
  data = [],
  domains = [],
  onSelectPoint,
  activeSnapshot,
}) => {
  const accessors = {
    xAccessor: (d) => (d ? new Date(d.snapshot_timestamp) : new Date(0)),
    yAccessor: (d) => d.violations.length,
  };

  data.sort((a, b) => accessors.xAccessor(a) - accessors.xAccessor(b));

  return (
    <XYChart onPointerDown={onSelectPoint}>
      <Axis
        orientation="bottom"
        tickFormat={formatYear}
        label={"Snapshot Date"}
      />
      <Axis
        orientation="left"
        tickFormat={format("d")}
        label={"# of Violations"}
      />
      <Grid columns={false} />
      {domains.map((domain) => (
        <AnimatedLineSeries
          dataKey={domain}
          key={domain}
          data={data.filter((snapshot) => snapshot.domain === domain)}
          strokeWidth={2}
          // curve={curveNatural}
          {...accessors}
        />
      ))}
      {activeSnapshot  && (
        <AreaSeries
          dataKey={activeSnapshot.domain}
          data={data.filter(
            (snapshot) => snapshot.domain === activeSnapshot.domain
          )}
          lineProps={{ strokeWidth: 5 }}
          // curve={curveNatural}
          {...accessors}
          fillOpacity={0.2}
        />
      )}
      <Tooltip
        snapTooltipToDatumX
        snapTooltipToDatumY
        showVerticalCrosshair
        showSeriesGlyphs
        // glyphStyle={{fill: "white", stroke: "20px"}}
        renderTooltip={({ tooltipData, colorScale }) => (
          <div className="p-2">
            <p
              className="text-sm font-bold"
              style={{ color: colorScale(tooltipData.nearestDatum.key) }}
            >
              {tooltipData.nearestDatum.key}
            </p>
            <p className="text-xs font-medium">
              {formatDate(accessors.xAccessor(tooltipData.nearestDatum.datum))}
            </p>
            <p className="text-xs font-medium">
              Violations: {accessors.yAccessor(tooltipData.nearestDatum.datum)}
            </p>
          </div>
        )}
      />
    </XYChart>
  );
};

export default TimePlot;
