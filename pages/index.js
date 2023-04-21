import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ScatterPlot from "/components/ScatterPlot";
import TimePlot from "/components/TimePlot";
import Options from "/components/Options";
import ImpactDonut from "/components/ImpactDonut";
import CategoryDonut from "/components/CategoryDonut";
import resolveConfig from "tailwindcss/resolveConfig";
import {
  ThemeProvider,
  TooltipProvider,
  lightTheme,
  darkTheme,
  DataProvider,
  buildChartTheme,
} from "@visx/xychart";
import tailwindConfig from "../tailwind.config.js";
import SnapshotInfo from "@/components/SnapshotInfo.js";

const twConfig = resolveConfig(tailwindConfig);

const customTheme = buildChartTheme({
  // colors
  // backgroundColor:, // used by Tooltip, Annotation
  colors: Object.values(twConfig.theme.colors)
    .filter((color, i) => color[500] !== undefined && i > 9)
    .map((color) => color[500]),

  // labels
  svgLabelBig: {
    fontFamily: "system-ui",
    fontWeight: 600,
    fill: "black",
    style: {
      fontSize: twConfig.theme.fontSize.sm[0],
    },
  },
  svgLabelSmall: {
    fontFamily: "system-ui",
    fontWeight: 400,
    fill: "black",
    style: {
      fontSize: "11px",
    },
  },

  // // lines
  xAxisLineStyles: {
    fill: "black",
    strokeWidth: 2,
  },
  yAxisLineStyles: {
    fill: "black",
    strokeWidth: 2,
  },
  xTickLineStyles: {
    fill: "black",
  },
  yTickLineStyles: {
    fill: "black",
  },
  // tickLength: number;

  // // grid
  // gridColor: string;
  // gridColorDark: string; // used for axis baseline if x/yxAxisLineStyles not set
  // gridStyles?: CSSProperties;
});

export default function Home() {
  const [data, setData] = useState([]);

  const [selectedDomains, setSelectedDomains] = useState([
    "amazon.com",
    "google.com",
    "netflix.com",
    "yahoo.com",
    "twitter.com",
    "youtube.com"
  ]);

  const [activeSnapshot, setActiveSnapshot] = useState();

  const [availableDomains, setAvailableDomains] = useState([]);

  useEffect(() => {
    if (activeSnapshot !== undefined && !selectedDomains.includes(activeSnapshot.domain)) {
      setActiveSnapshot();
    }
  }, [selectedDomains])

  useEffect(() => {
    const uniqueDomains = new Set();
    for (let snapshot of data) {
      uniqueDomains.add(snapshot.domain);
    }
    // availableDomains.current = Array.from(uniqueDomains);
    setAvailableDomains(Array.from(uniqueDomains));
    // const topDomains = [];
    // for (let snapshot of data) {
    //   if (snapshot.rank <= 40) topDomains.push(snapshot.domain);
    // }
    // setDomains(topDomains);
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/reports_wcag2a_category.json");
      const json = await res.json();
      // const filtered = json.filter(
      //   (snapshot) => new Date(snapshot.snapshot_timestamp).getFullYear() < 2020
      // );
      setData(json);
    };
    fetchData().catch(console.error);
  }, []);

  // useEffect(() => {
  //   const domainGroups = data.reduce((groups, snapshot) => {
  //     const group = groups[snapshot.domain] || [];
  //     group.push(snapshot);
  //     groups[snapshot.domain] = group;
  //     return groups;
  //   }, {});
  //   console.log(domainGroups);
  // }, [domains]);

  return (
    <div className="min-h-screen bg-white">
      <header>
        <nav className="py-4 flex flex-col w-full items-center">
          <Link href="/" className="flex items-center">
            <h1 className="p-2 text-2xl font-semibold whitespace-nowrap dark:text-white">
              a11ystudy.
            </h1>
          </Link>
        </nav>
      </header>

      <main className="flex items-center justify-between flex-col px-8 py-4 ">
        <div className="w-full max-w-6xl">
          <DataProvider
            xScale={{ type: "time" }}
            yScale={{ type: "linear" }}
            theme={customTheme}
          >
            <Options domains={availableDomains} selectedDomains={selectedDomains} setSelectedDomains={setSelectedDomains} />
            {/* <div
            className="w-full"
            style={{
              height: "600px",
            }}
          >
            <ScatterPlot data={data} />
          </div> */}
            <div className="w-full flex justify-between items-stretch mb-2 bg-zinc-100 rounded-lg p-8"
              style={{
                height: "500px",
              }}
            >
              <div className="w-4/5">
                <TimePlot
                  data={data}
                  domains={selectedDomains}
                  activeSnapshot={activeSnapshot}
                  onSelectPoint={({ datum }) => {
                    setActiveSnapshot(datum);
                  }}
                />
              </div>
              <div className="flex-grow flex flex-col">
                <div className="w-full h-full mb-4">
                  <ImpactDonut
                    activeSnapshot={activeSnapshot}
                    label="Violation Impact"
                  />
                </div>
                <div className="w-full h-full">
                  <CategoryDonut
                    activeSnapshot={activeSnapshot}
                    label="Rule Category"
                  />
                </div>
              </div>
            </div>
            <SnapshotInfo activeSnapshot={activeSnapshot} />
          </DataProvider>

          {/* <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="snapshot_timestamp" />
            <YAxis />
            <CartesianGrid stroke="#ccc" />
            <Line type="monotone" data={data.filter(snapshot => snapshot.rank === 1)} dataKey="violations" stroke="#00FF00" />
            <Tooltip />
            <Legend />
          </LineChart> */}
        </div>
      </main>
    </div>
  );
}
