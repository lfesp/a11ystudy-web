import {
  Axis, // any of these can be non-animated equivalents
  Grid,
  LineSeries,
  GlyphSeries,
  XYChart,
  Tooltip,
} from '@visx/xychart';
import { extent, format, timeFormat, timeParse } from "d3";

const formatTime = timeFormat("%Y-%m-%d");


const ScatterPlot2 = ({
  data = [],
  width = 800,
  height = 200,
  margin = { top: 30, left: 60, right: 40, bottom: 50 }
}) => {

  const accessors = {
    xAccessor: (d) => formatTime(new Date(d.snapshot_timestamp)),
    yAccessor: (d) => d.violations,
  };


  //const parseTime = timeParse("%Y-%m-%dT%H:%M:%S.%LZ");

  return (
    <XYChart height={300} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
    <Axis orientation="bottom" />
    <Grid columns={false} numTicks={4} />
    <GlyphSeries dataKey="Line 1" data={data} {...accessors} />
    <Tooltip
      snapTooltipToDatumX
      snapTooltipToDatumY
      showVerticalCrosshair
      showSeriesGlyphs
      renderTooltip={({ tooltipData, colorScale }) => (
        <div>
          <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
            {tooltipData.nearestDatum.key}
          </div>
          {accessors.xAccessor(tooltipData.nearestDatum.datum)}
          {', '}
          {accessors.yAccessor(tooltipData.nearestDatum.datum)}
        </div>
      )}
    />
  </XYChart>
  )
}

export default ScatterPlot2