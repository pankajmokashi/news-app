import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import SelectCategory from "./SelectCategory";
import SearchQuery from "./SearchQuery";
import countries from "./countries.json";
import languages from "./languages.json";
import SelectOptions from "./SelectOptions";
import { setCountry, setLanguage } from "../redux/filterSlice";
import { useSelector } from "react-redux";

const MenuDrawer = () => {
  const [open, setOpen] = useState(false);
  const { country, lang } = useSelector((state) => state.filter);

  const countryIndex = (data, code) => {
    return data.findIndex((country) => country.code === code);
  };

  const languageIndex = (data, code) => {
    return data.findIndex((country) => country.code === code);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex p-1.5 rounded hover:bg-slate-200"
      >
        <Bars3Icon className="w-5 h-5" />
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                  </div>
                </TransitionChild>
                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                      Panel title
                    </DialogTitle>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    {/* Your content */}
                    <div className="flex flex-col gap-1 mb-8 sm:hidden">
                      <label className="text-sm sm:text-base mb-1">
                        Search News
                      </label>
                      <SearchQuery />
                    </div>

                    <div className="mx-auto mb-8 flex flex-col justify-center sm:hidden">
                      <div className="text-sm sm:text-base mb-1">
                        Select Category
                      </div>
                      <SelectCategory />
                    </div>

                    <div className="m-2 text-xs">
                      Select countries and their associated languages.
                    </div>

                    <div className="mb-8">
                      <label className="text-sm sm:text-base mb-1">
                        Search Country
                      </label>
                      <SelectOptions
                        data={countries}
                        selectedValue={countryIndex(countries, country)}
                        setValue={setCountry}
                        className="text-sm sm:text-base"
                      />
                    </div>
                    <div className="mb-8">
                      <label className="text-sm sm:text-base mb-1">
                        Search language
                      </label>
                      <SelectOptions
                        data={languages}
                        selectedValue={languageIndex(languages, lang)}
                        setValue={setLanguage}
                        className="text-sm sm:text-base"
                      />
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default MenuDrawer;
