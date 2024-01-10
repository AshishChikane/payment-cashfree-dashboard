import React from "react";
import { CiWallet } from "react-icons/ci";

export default function Footer() {
  return (
    <div className="flex">
      <div className="bg-[#1e2640] w-52">
        <div className="m-2 bg-[#353c53] rounded-md w-48">
          <div className="flex gap-x-2.5 text-white p-2">
            <div className="m-0.5 bg-[#495064] rounded-md">
              <CiWallet className="w-8 h-8" />
            </div>
            <div>
              <div className="font-normal text-xs">Available Credits</div>
              <div className="font-medium text-sm">222.10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
