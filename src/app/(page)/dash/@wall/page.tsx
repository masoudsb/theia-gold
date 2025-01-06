"use client";

import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import "../../../../style/wallStyle.css";
import ButtonReg from "@/components/buttonReg";
import ButtonPre from "@/components/buttonPre";
import Image from "next/image";

export default function WallPage() {
  const [active, setActive] = useState<string | null>(null);
  const handleWith = (e: React.MouseEvent) => {
    e.preventDefault();
    setActive("with");
  };
  const handleCash = (e: React.MouseEvent) => {
    e.preventDefault();
    setActive("cash");
  };

  return (
    <div className="w-3/5 mx-auto wall">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto max-w-2xl lg:max-w-none ${
            active ? "hidden" : ""
          }`}
        >
          <h2 className={`text-2xl font-bold text-gray-100 py-12`}>Wallet Action</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-44 lg:space-y-0">
            <div
              onClick={handleWith}
              className="group relative cursor-pointer w-3/5 mx-auto"
            >
              <Image
                alt="withdraw"
                src="/pic/withdraw.png"
                width={160} 
                height={160}
                className="w-full rounded-lg object-cover group-hover:opacity-75 max-sm:h-80  lg:aspect-square "
              />
              <h3 className="mt-6 text-sm text-gray-500">
                <a>
                  <span className="absolute inset-0" />
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-200">Withdraw</p>
            </div>
            <div
              onClick={handleCash}
              className="group relative cursor-pointer w-3/5 mx-auto"
            >
              <Image
                alt="cash"
                src="/pic/cash1.png"
                width={160} 
                height={160}
                className="w-full rounded-lg object-cover group-hover:opacity-75 max-sm:h-80  lg:aspect-square"
              />
              <h3 className="mt-6 text-sm text-gray-500">
                <a>
                  <span className="absolute inset-0" />
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-200">Cashing</p>
            </div>
          </div>
        </div>
        <div id="with" className={`${active === "with" ? "" : "hidden"}`}>
          <h1 className="text-3xl mb-8 text-gray-100 pt-8 pb-16">Withdraw Other User</h1>

          <div className="pb-12">
            <label
              htmlFor="price"
              className="block text-lg font-medium text-gray-200"
            >
              Scale
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-transparent pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6 px-2">
                  g
                </div>
                <input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="0.00"
                  className="block min-w-0 bg-transparent grow py-1.5 pl-1 pr-3 text-base text-gray-100 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 "
                />
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="currency"
                    name="currency"
                    aria-label="Currency"
                    className="col-start-1 row-start-1 w-full bg-transparent appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option >Gold</option>
                    <option>Silver</option>
                    <option>Platin</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="price"
              className="lab-wall text-lg font-medium text-gray-200"
            >
              Account ID Number Destination
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-transparent pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                

                <input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  className="appearance-none bg-transparent block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-100 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 "
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6 wall-end">
            <ButtonReg
              type="button"
              classN="text-gray-200 btn-wall"
              onClick={() => setActive(null)}
            >
              Cancel
            </ButtonReg>
            <ButtonPre type="submit" classn="" href="#">
              Withdraw
            </ButtonPre>
          </div>
        </div>
        <div id="cash" className={`${active === "cash" ? "" : "hidden"}`}>
          <h1 className="text-3xl mb-8 text-gray-100 pt-8 pb-16">Swapping Your Source</h1>

          <div className="pb-12">
            <label
              htmlFor="price"
              className="block text-sm/6 font-medium text-gray-200"
            >
              Scale
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-transparent pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6 px-2">
                  g
                </div>
                <input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="0.00"
                  className="block min-w-0 grow bg-transparent py-1.5 pl-1 pr-3 text-base text-gray-100 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 "
                />
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="currency"
                    name="currency"
                    aria-label="Currency"
                    className="col-start-1 row-start-1 w-full bg-transparent appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>Gold</option>
                    <option>Silver</option>
                    <option>Platin</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="price"
              className=" text-sm/6 font-medium text-gray-200"
            >
              Bank Account Number
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-transparent pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <input
                  id="price"
                  name="price"
                  type="number"
                  placeholder=""
                  className="appearance-none block min-w-0 bg-transparent grow py-1.5 pl-1 pr-3 text-base text-gray-100 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 "
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6 wall-end">
          <ButtonReg
              type="button"
              classN="text-gray-200 btn-wall"
              onClick={() => setActive(null)}
            >
              Cancel
            </ButtonReg>
            <ButtonPre type="submit" classn="" href="#">
            Swapp
            </ButtonPre>
          
          </div>
        </div>
      </div>
    </div>
  );
}
