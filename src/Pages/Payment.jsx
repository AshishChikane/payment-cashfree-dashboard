import React from "react";
import Layout from "../Molecules/Layout";
import Box from "../Atoms/Box";
import InputSearchBox from "../Atoms/InputSearchBox";
import { IoIosInformationCircleOutline } from "react-icons/io";

const TableRow = () => {
  return (
    <tr className="group cursor-pointer hover:bg-gray-100">
      <td className="text-sm p-3 font-medium text-[#146EB4] border-t border-grey-light whitespace-no-wrap">
        #281209
      </td>
      <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
        7 July, 2023
      </td>
      <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
        ₹1,278.23
      </td>
      <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
        ₹22
      </td>
    </tr>
  );
};

export default function Payment() {
  const rows = Array.from({ length: 10 }, (_, index) => (
    <TableRow key={index} />
  ));

  return (
    <Layout>
      <div className="mt-4 mx-3 font-medium text-base">Overview</div>
      <div className="mx-3">
        <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:grid-cols-2 my-4">
          <Box>
            <div className="my-4 px-4">
              <p className="text-[#4D4D4D] text-sm my-2">Online Order</p>
              <span className="font-medium text-2xl">231</span>
            </div>
          </Box>
          <Box>
            <div className="my-4 px-4">
              <p className="text-[#4D4D4D] text-sm my-2">Amount Received</p>
              <span className="font-medium text-2xl">₹23,92,312.19</span>
            </div>
          </Box>
        </div>
      </div>
      <span className="mx-3 font-medium text-lg">Transaction | This Month</span>
      <Box>
        <div className="flex mx-2 my-2 justify-between">
          <div className="items-center rounded border border-[color:var(--Black-85,#D9D9D9)] bg-white flex gap-2 px-4 py-2 border-solid">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6e1dc3c8b1109e63b79acfebf351d18320d5e9d95aa017d3e1d064c658d3553?"
              className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <input
              type="text"
              className="text-neutral-400 text-sm leading-5 self-stretch grow whitespace-nowrap border-none focus:outline-none"
              placeholder="Search by order ID..."
            />
          </div>

          <div className="flex gap-x-2.5">
            <button
              type="button"
              className="inline-flex items-center gap-x-1 rounded-md p-1.5 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-total"
            >
              Sort
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Outlined / Sort">
                  <g id="Vector">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.62301 9.93375C1.83129 9.72547 2.16897 9.72547 2.37725 9.93375L4.641 12.1975L6.90474 9.93375C7.11302 9.72547 7.45071 9.72547 7.65899 9.93375C7.86727 10.142 7.86727 10.4797 7.65899 10.688L5.01812 13.3289C4.80984 13.5371 4.47215 13.5371 4.26387 13.3289L1.62301 10.688C1.41473 10.4797 1.41473 10.142 1.62301 9.93375Z"
                      fill="#4D4D4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.64095 2.51515C4.9355 2.51515 5.17428 2.75393 5.17428 3.04849L5.17428 12.9517C5.17428 13.2463 4.9355 13.4851 4.64095 13.4851C4.3464 13.4851 4.10762 13.2463 4.10762 12.9517L4.10762 3.04849C4.10762 2.75393 4.3464 2.51515 4.64095 2.51515Z"
                      fill="#4D4D4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.3772 6.06646C14.169 6.27474 13.8313 6.27474 13.623 6.06646L11.3592 3.80272L9.0955 6.06646C8.88722 6.27474 8.54953 6.27474 8.34126 6.06646C8.13298 5.85818 8.13298 5.52049 8.34126 5.31221L10.9821 2.67135C11.1904 2.46307 11.5281 2.46307 11.7364 2.67135L14.3772 5.31221C14.5855 5.52049 14.5855 5.85818 14.3772 6.06646Z"
                      fill="#4D4D4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.3593 13.4851C11.0647 13.4851 10.826 13.2463 10.826 12.9517L10.826 3.04847C10.826 2.75392 11.0647 2.51514 11.3593 2.51514C11.6538 2.51514 11.8926 2.75392 11.8926 3.04847L11.8926 12.9517C11.8926 13.2463 11.6538 13.4851 11.3593 13.4851Z"
                      fill="#4D4D4D"
                    />
                  </g>
                </g>
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-x-1 rounded-md p-1.5 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-total hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-total"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icons/download">
                  <path
                    id="Combined Shape"
                    d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z"
                    fill="#4D4D4D"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="mx-2 m-auto mt-6">
          <table className="w-full table-collapse">
            <thead className="font-medium text-sm">
              <tr className="text-sm font-medium text-left uppercase text-grey-darker bg-gray-200">
                <th className="p-3 text-sm font-medium text-[#5d5d5d]">
                  Order ID
                </th>
                <th className="p-3 text-sm font-medium text-[#5d5d5d]">
                  Order date
                </th>
                <th className="p-3 text-sm font-medium text-[#5d5d5d]">
                  Order amount
                </th>
                <th className="p-3 text-[#5d5d5d] text-sm font-medium">
                  <div className="flex justify-end items-center gap-x-1">
                    <span>Transaction fee</span>
                    <IoIosInformationCircleOutline className="mt-1" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="align-baseline">
              {rows.map((rowData, index) => (
                <tr
                  key={index}
                  className="group cursor-pointer hover:bg-gray-100"
                >
                  <td className="text-sm p-3 font-medium text-[#146EB4] border-t border-grey-light whitespace-no-wrap">
                    #281209
                  </td>
                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                    7 July, 2023
                  </td>
                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                    ₹1,278.23
                  </td>
                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap flex justify-end items-center gap-x-1">
                    <span>₹22</span>
                    <IoIosInformationCircleOutline className="mt-1" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mx-60 my-10">
          <div className="items-center flex justify-between gap-5 max-md:flex-wrap">
            <span className="justify-between rounded border border-[color:var(--Black-85,#D9D9D9)] bg-white self-stretch flex gap-1.5 p-1.5 border-solid items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cf1d4ee6692cb5a173aa36f921bca0dc6b7cdb56296972665f8f16abf418fb4?"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-neutral-600 text-center text-sm font-medium leading-5 self-stretch grow whitespace-nowrap">
                Previous
              </div>
            </span>
            <span className="items-start flex gap-2 my-auto px-5">
              <div className="self-center text-neutral-600 text-center text-sm leading-5 grow whitespace-nowrap my-auto">
                1
              </div>
              <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                ...
              </div>
              <span className="text-white text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-center rounded bg-sky-700 self-stretch aspect-square h-7 px-1.5">
                10
              </span>
              <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                11
              </div>
              <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                12
              </div>
              <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                13
              </div>
              <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                14
              </div>
              <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                15
              </div>
              <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                16
              </div>
              <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                17
              </div>
              <div className="self-center text-neutral-600 text-center text-sm leading-5 grow whitespace-nowrap my-auto">
                18
              </div>
            </span>
            <span className="justify-between items-stretch rounded border border-[color:var(--Black-85,#D9D9D9)] bg-white self-stretch flex gap-1.5 pl-3 pr-1.5 py-1.5 border-solid">
              <div className="text-neutral-600 text-center text-sm font-medium leading-5">
                Next
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d46cc7bbcab3183a98a9a4cb2d57e6270b75b052c48f571e526ff4b3305327d?"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full self-start"
              />
            </span>
          </div>
        </div>
      </Box>
    </Layout>
  );
}
