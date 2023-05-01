import { Transition, Combobox, Popover } from "@headlessui/react";
import {
  ChevronRightIcon,
  CheckIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/20/solid";
import { useState, Fragment, useRef } from "react";

export default function Options({
  handleFile,
  domains = [],
  selectedDomains,
  setSelectedDomains,
}) {
  const [domainQuery, setDomainQuery] = useState("");

  const lastQueryDomain = domainQuery.split(",").pop().trim();
  const filteredDomains =
    lastQueryDomain === ""
      ? domains
      : domains.filter((domain) =>
          domain.toLowerCase().includes(lastQueryDomain.toLowerCase())
        );

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };

  const domainCombobox = (
    <Combobox value={selectedDomains} onChange={setSelectedDomains} multiple>
      <div className="relative flex-grow">
        <div className="relative cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-300 sm:text-sm">
          <Combobox.Input
            autoComplete="off"
            className="w-full border-none py-2 pl-3 pr-8 text-sm leading-5 text-gray-900 focus:outline-none focus:ring-0 truncate"
            displayValue={(domainList) => domainList.join(", ")}
            onChange={(event) => setDomainQuery(event.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setDomainQuery("")}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredDomains.length === 0 && domainQuery !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredDomains.map((domain) => (
                <Combobox.Option
                  key={domain}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-600 text-white" : "text-gray-900"
                    }`
                  }
                  value={domain}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {domain}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-amber-600"
                          }`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );

  return (
    <div className="w-full mb-4">
      <Popover>
        {({ open }) => (
          <>
            <div className="w-full flex justify-between">
              <div className="flex">
                <h2 className="text-3xl font-bold mr-6">
                  Accessibility Visualization
                </h2>
                <Popover.Button
                  className={`${
                    open ? "bg-amber-100" : "bg-amber-100"
                  } flex justify-between items-center rounded-md text-amber-800 pl-4 pr-3 py-2 text-left text-base font-medium hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500`}
                >
                  Options
                  <ChevronRightIcon
                    className={`${
                      open ? "rotate-90 transform" : ""
                    } h-5 w-5 text-amber-800`}
                  />
                </Popover.Button>
              </div>
              <>
                <button
                  onClick={handleClick}
                  className="bg-amber-100 flex justify-between  cursor-pointer items-center rounded-md text-amber-800 pl-4 pr-3 py-2 text-left text-base font-medium hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500"
                >
                  Upload Custom Data
                </button>
                <input
                  type="file"
                  ref={hiddenFileInput}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
              </>
            </div>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 -translate-y-4 opacity-0"
              enterTo="transform scale-100 translate-y-0 opacity-100"
              leave="transition duration-100 ease-out"
              leaveFrom="transform scale-100 translate-y-0 opacity-100"
              leaveTo="transform scale-95 -translate-y-4 opacity-0"
            >
              <Popover.Panel className="absolute mt-2 w-full py-6 px-8 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500">
                {/* <div className="flex items-center mb-3">
                  <div className="text-lg font-semibold mr-4 h-full text-white">
                    Dataset
                  </div>
                  {datasetCombobox}
                </div> */}
                <div className="flex items-center">
                  <div className="text-lg font-semibold mr-4 h-full text-white">
                    Domains
                  </div>
                  {domainCombobox}
                </div>
                {/* <div className="flex justify-end items-center mt-2">
                  <button
                    onClick={() => onApplyOptions(selectedDomains)}
                    className="flex justify-between shadow-md items-center rounded-md text-black px-4 py-2 text-sm font-medium bg-white hover:bg-zinc-100 focus:outline-none focus-visible:ring focus-visible:ring-amber-500"
                  >
                    Apply
                  </button>
                </div> */}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
