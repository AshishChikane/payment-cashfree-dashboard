import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuItem from "../Atoms/MenuItem";
import { CiWallet } from "react-icons/ci";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("");
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.split("/")[1];
    if (!pathname) {
      setActiveMenu("");
    } else {
      setActiveMenu(pathname);
    }
  }, [location]);

  return (
    <div className="flex flex-col h-screen p-3 bg-[#1e2640] shadow w-52 md:w-50 overflow-y-auto">
      <div className="flex-1">
        <ul className="pt-2 pb-4 space-y-1">
          <li
            className={`rounded-xl hover:text-white py-0.5 px-1 ${
              activeMenu === "/"
                ? "bg-[#343c53] text-white font-semibold"
                : "text-[#ffff]"
            }`}
            // onClick={() => setActiveMenu("/")}
          >
            <Link to="/">
              <MenuItem
                menuIcon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Navbar Icon" opacity="0.8">
                      <path
                        id="Vector"
                        d="M16.9398 18.75H13.0675C12.7165 18.75 12.3797 18.6111 12.1307 18.3636C11.8816 18.1162 11.7407 17.7802 11.7385 17.4292V12.1622H8.22722V17.4292C8.22505 17.7802 8.08407 18.1162 7.83507 18.3636C7.58606 18.6111 7.24925 18.75 6.89818 18.75H3.02593C2.62123 18.75 2.2331 18.5892 1.94693 18.3031C1.66077 18.0169 1.5 17.6288 1.5 17.2241V7.99465C1.50032 7.75707 1.55611 7.52284 1.66293 7.31062C1.76975 7.0984 1.92465 6.91405 2.11529 6.77227L9.15426 1.55457C9.41825 1.35686 9.73919 1.25 10.069 1.25C10.3988 1.25 10.7198 1.35686 10.9837 1.55457L17.8832 6.76406C18.0665 6.91176 18.2136 7.09945 18.3131 7.31275C18.4126 7.52605 18.462 7.75931 18.4575 7.99465V17.2241C18.4586 17.4241 18.4201 17.6223 18.3443 17.8074C18.2686 17.9925 18.1569 18.1608 18.0159 18.3026C17.8749 18.4444 17.7072 18.5569 17.5225 18.6337C17.3378 18.7105 17.1398 18.75 16.9398 18.75ZM13.1496 17.3553H16.9562C16.9896 17.3532 17.0209 17.3385 17.0438 17.3141C17.0666 17.2897 17.0793 17.2575 17.0793 17.2241V7.99465C17.08 7.97543 17.0758 7.95635 17.0672 7.93915C17.0586 7.92195 17.0458 7.90718 17.03 7.89621L10.1141 2.68671C10.0911 2.67119 10.064 2.6629 10.0362 2.6629C10.0084 2.6629 9.98128 2.67119 9.95825 2.68671L2.92748 7.90441C2.91051 7.91673 2.89653 7.93271 2.88659 7.95117C2.87664 7.96964 2.87099 7.99011 2.87006 8.01106V17.2241C2.87006 17.2589 2.88389 17.2923 2.9085 17.3169C2.93312 17.3415 2.96651 17.3553 3.00132 17.3553H6.80794V12.0228C6.81009 11.6905 6.94303 11.3725 7.17796 11.1376C7.41289 10.9027 7.73091 10.7697 8.06314 10.7676H11.878C12.0439 10.7665 12.2084 10.7981 12.3621 10.8606C12.5158 10.9231 12.6557 11.0153 12.7737 11.1318C12.8918 11.2484 12.9858 11.387 13.0503 11.5399C13.1148 11.6928 13.1485 11.8569 13.1496 12.0228V17.3553Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                }
                menuName={"Home"}
              />
            </Link>
          </li>
          <li
            className={`rounded-xl hover:text-white py-0.5 px-1 ${
              activeMenu === ""
                ? "bg-[#343c53] text-white font-semibold"
                : "text-[#ffff]"
            }`}
            // onClick={() => setActiveMenu("")}
          >
            <Link to="/">
              <MenuItem
                menuIcon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Navbar Icon">
                      <path
                        id="Vector"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.75 13.75H1.47727C0.661397 13.75 0 13.1904 0 12.5V3.75C0 3.05964 0.661397 2.5 1.47727 2.5H14.7727C15.5886 2.5 16.25 3.05964 16.25 3.75L16.25 6.25H18.5227C19.3386 6.25 20 6.8796 20 7.65625V16.0938C20 16.8704 19.3386 17.5 18.5227 17.5H5.22727C4.4114 17.5 3.75 16.8704 3.75 16.0938V13.75ZM5 6C4.17157 6 3.5 6.67157 3.5 7.5V12.25H1.5V4H14.75L14.75 6H5ZM11.875 14.375C13.2557 14.375 14.375 13.2557 14.375 11.875C14.375 10.4943 13.2557 9.375 11.875 9.375C10.4943 9.375 9.375 10.4943 9.375 11.875C9.375 13.2557 10.4943 14.375 11.875 14.375Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                }
                menuName={"Payment"}
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-12 bg-[#353c53] rounded-md mt-auto">
        <div className="m-2 text-white">
          <div className="flex items-center gap-x-2.5 px-2">
            <div className="bg-[#495064] rounded-md p-1">
              <CiWallet className="w-8 h-8" />
            </div>
            <div>
              <div className="text-xs font-normal">Available Credits</div>
              <div className="text-sm font-medium">222.10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
