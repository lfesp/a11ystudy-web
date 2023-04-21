import { useContext, Fragment } from "react";
import RuleInfo from "./wcag20_rules";
import { DataContext } from "@visx/xychart";
import { timeFormat } from "d3";
import {
  ArrowTopRightOnSquareIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import { Tab, Popover, Transition } from "@headlessui/react";

const capitalizeFirstLetter = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ruleClasses = ["passes", "violations", "incomplete", "inapplicable"];

const formatDate = timeFormat("%m/%d/%Y");
const formatDateAsText = timeFormat("%B %d, %Y");

export default function SnapshotInfo({ activeSnapshot }) {
  const { colorScale } = useContext(DataContext);

  if (!activeSnapshot)
    return <h3 className="text-3xl py-4 font-bold">No snapshot selected</h3>;
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div className="flex justify-start items-center">
          <div
            className="w-6 h-6 mr-3 rounded-full"
            style={{ backgroundColor: colorScale(activeSnapshot.domain) }}
          ></div>
          <h3 className="text-3xl font-bold mr-3 py-4">
            {capitalizeFirstLetter(activeSnapshot.domain)} -{" "}
            {formatDateAsText(new Date(activeSnapshot.snapshot_timestamp))}
          </h3>
          {/* <p className="font-semibold text-zinc-600">
            ({formatDate(new Date(activeSnapshot.snapshot_timestamp))})
          </p> */}
        </div>

        <div>
          <a
            href={activeSnapshot.url}
            className="block pl-4 pr-3 py-2 text-center text-base rounded-md font-medium bg-amber-100 text-amber-800 hover:bg-amber-200"
            target="_blank"
            // style={{backgroundColor:colorScale(activeSnapshot.domain)}}
          >
            Visit Snapshot
            <ArrowTopRightOnSquareIcon className="inline ml-1 mb-1 h-4 w-4" />
          </a>
        </div>
      </div>

      <div
        className="w-full bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex"
        style={{ maxHeight: 240 }}
      >
        <Tab.Group>
          <Tab.List
            className="flex flex-col space-y-2 rounded-xl bg-amber-900/20 p-1"
            style={{ minWidth: "16.666667%" }}
          >
            {ruleClasses.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-4 px-8 text-sm font-medium text-white-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-amber-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-amber-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {`${capitalizeFirstLetter(category)} (${
                  activeSnapshot[category].length
                })`}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="flex-grow m-2 overflow-scroll">
            {ruleClasses.map((category) => (
              <Tab.Panel className="h-full" key={category}>
                {activeSnapshot[category] &&
                activeSnapshot[category].length > 0 ? (
                  activeSnapshot[category].map((rule) => (
                    <div
                      key={rule}
                      className="bg-white block hover:bg-zinc-100 px-4 py-4 mb-2 rounded-lg "
                    >
                      <div className="mb-1 flex justify-between">
                        <a
                          a
                          href={RuleInfo[rule].helpUrl}
                          target="_blank"
                          className="block text-sm font-medium mr-3 underline hover:text-amber-600"
                        >
                          <span>{rule}</span>
                        </a>
                        <div>
                          {RuleInfo[rule].tags.map((tag) => (
                            <span key={tag} className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-zinc-600">
                        {RuleInfo[rule].description}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="font-medium text-white text-lg h-full flex items-center justify-center">
                    No rules categorized as {category}
                  </div>
                )}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
