import Pie, { ProvidedProps, PieArcDatum } from "@visx/shape/lib/shapes/Pie";
import { useState } from "react";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import { scaleOrdinal } from "@visx/scale";
import { format } from "d3";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";

const capitalizeFirstLetter = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);

const twConfig = resolveConfig(tailwindConfig);

const impactLevels = ["critical", "serious", "moderate", "minor"];

const getImpactColor = scaleOrdinal({
  domain: impactLevels,
  range: [
    twConfig.theme.colors.red[600],
    twConfig.theme.colors.orange[600],
    twConfig.theme.colors.amber[500],
    twConfig.theme.colors.green[600],
  ],
});

const margin = { top: 0, right: 0, bottom: 0, left: 0 };

function Donut({ width, height, activeSnapshot, label = ""}) {
  const [hoverArc, setHoverArc] = useState();
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom - (label ? 30 : 0);
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;
  const top = centerY + margin.top;
  const left = centerX + margin.left;

  if (!activeSnapshot) {
    return (
      <svg width={width} height={height} className="block">
        <Group top={top} left={left}>
          <Text
            verticalAnchor="middle"
            textAnchor="middle"
            fontSize={twConfig.theme.fontSize.sm[0]}
            fontFamily="system-ui"
          >
            No datapoint selected
          </Text>
        </Group>
        <Text
          x={width / 2}
          y={height - 8}
          verticalAnchor="end"
          textAnchor="middle"
          fontWeight={600}
          fontSize={twConfig.theme.fontSize.sm[0]}
          fontFamily="system-ui"
        >
          {label}
        </Text>
      </svg>
    );
  }

  if (!activeSnapshot.violations || activeSnapshot.violations.length === 0 ) {
    return (
      <svg width={width} height={height} className="block">
        <Group top={top} left={left}>
          <Text
            verticalAnchor="middle"
            textAnchor="middle"
            fontSize={twConfig.theme.fontSize.sm[0]}
            fontFamily="system-ui"
          >
            No violations
          </Text>
        </Group>
        <Text
          x={width / 2}
          y={height - 8}
          verticalAnchor="end"
          textAnchor="middle"
          fontWeight={600}
          fontSize={twConfig.theme.fontSize.sm[0]}
          fontFamily="system-ui"
        >
          {label}
        </Text>
      </svg>
    );
  }

  return (
    <svg width={width} height={height} className="block">
      <Group top={top} left={left}>
        {activeSnapshot ? (
          <Pie
            data={Object.entries(activeSnapshot.impact)}
            pieValue={([impact, rules]) => rules.length}
            innerRadius={(3 * radius) / 5}
            outerRadius={radius}
          >
            {(pie) => {
              return pie.arcs.map((arc, index) => {
                const [impact, rules] = arc.data;
                const [centroidX, centroidY] = pie.path.centroid(arc);
                const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;
                return (
                  <g
                    key={`arc-${impact}-${index}`}
                    onPointerEnter={() => {
                      if (hoverArc != impact) setHoverArc([impact, rules]);
                    }}
                    onPointerLeave={() => {
                      setHoverArc();
                    }}
                  >
                    <path d={pie.path(arc)} fill={getImpactColor(impact)} />
                    {hasSpaceForLabel && (
                      <Text
                        x={centroidX}
                        y={centroidY}
                        dy=".33em"
                        fontSize={twConfig.theme.fontSize.xs[0]}
                        fontFamily="system-ui"
                        textAnchor="middle"
                        pointerEvents="none"
                      >
                        {capitalizeFirstLetter(impact)}
                      </Text>
                    )}
                  </g>
                );
              });
            }}
          </Pie>
        ) : (
          <Pie
            data={[]}
            pieValue={() => 5}
            innerRadius={(2 * radius) / 3}
            outerRadius={radius}
            fill="#000000"
          ></Pie>
        )}
      </Group>
      <Text
        x={width / 2}
        y={height - 8}
        verticalAnchor="end"
        textAnchor="middle"
        fontWeight={600}
        fontSize={twConfig.theme.fontSize.sm[0]}
        fontFamily="system-ui"
      >
        {label}
      </Text>
      {hoverArc && (
        <Text
          x={centerX}
          y={centerY}
          verticalAnchor="middle"
          textAnchor="middle"
          fontSize={twConfig.theme.fontSize.sm[0]}
          fontFamily="system-ui"
          width={100}
        >
          {`${capitalizeFirstLetter(hoverArc[0])}: ${format(".0%")(
            hoverArc[1].length / activeSnapshot.violations.length
          )} (${hoverArc[1].length}/${activeSnapshot.violations.length})`}
        </Text>
      )}
    </svg>
  );
}

const DonutWrapper = (props) => {
  return (
    <ParentSize>
      {({ width, height }) => (
        <Donut width={width} height={height} {...props} />
      )}
    </ParentSize>
  );
};

export default DonutWrapper;
