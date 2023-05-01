import Pie, { ProvidedProps, PieArcDatum } from "@visx/shape/lib/shapes/Pie";
import { useState } from "react";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import { scaleOrdinal } from "@visx/scale";
import { format } from "d3";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";

const replaceUnderscores = (word) => word.replaceAll("_", "-");

const twConfig = resolveConfig(tailwindConfig);

const categories = [
  "aria",
  "color",
  "forms",
  "keyboard",
  "language",
  "name_role_value",
  "parsing",
  "semantics",
  "sensory_and_visual_cues",
  "structure",
  "tables",
  "text_alternatives",
  "time_and_media",
];

const getImpactColor = scaleOrdinal({
  domain: categories,
  range: [
    twConfig.theme.colors.red[600],
    twConfig.theme.colors.orange[600],
    twConfig.theme.colors.yellow[500],
    twConfig.theme.colors.lime[600],
    twConfig.theme.colors.emerald[600],
    twConfig.theme.colors.teal[600],
    twConfig.theme.colors.cyan[600],
    twConfig.theme.colors.sky[600],
    twConfig.theme.colors.blue[600],
    twConfig.theme.colors.indigo[600],
    twConfig.theme.colors.fuchsia[600],
    twConfig.theme.colors.purple[600],
    twConfig.theme.colors.pink[600],
  ],
});

const margin = { top: 0, right: 0, bottom: 0, left: 0 };

function Donut({ width, height, activeSnapshot, label = "" }) {
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
            data={Object.entries(activeSnapshot.category)}
            pieValue={([category, count]) => count}
            innerRadius={(3 * radius) / 5}
            outerRadius={radius}
          >
            {(pie) => {
              return pie.arcs.map((arc, index) => {
                const [category, count] = arc.data;
                const [centroidX, centroidY] = pie.path.centroid(arc);
                const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;
                return (
                  <g
                    key={`arc-${category}-${index}`}
                    onPointerEnter={() => {
                      if (hoverArc != category) setHoverArc([category, count]);
                    }}
                    onPointerLeave={() => {
                      setHoverArc();
                    }}
                  >
                    <path d={pie.path(arc)} fill={getImpactColor(category)} />
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
                        {replaceUnderscores(category)}
                      </Text>
                    )}
                  </g>
                );
              });
            }}
          </Pie>
        ) : (
          <Text
            verticalAnchor="middle"
            textAnchor="middle"
            fontSize={twConfig.theme.fontSize.sm[0]}
            fontFamily="system-ui"
          >
            No snapshot data provided
          </Text>
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
          {`${replaceUnderscores(hoverArc[0])}: ${format(".0%")(
            hoverArc[1] / activeSnapshot.violations.length
          )} (${hoverArc[1]}/${activeSnapshot.violations.length})`}
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
