import React from "react";

export default function MenuItem({ menuIcon, menuName }) {
  return (
    <>
      <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
        <span className="text-lg">{menuIcon}</span>
        <span className="text-md hidden sm:block">{menuName}</span>
      </a>
    </>
  );
}
