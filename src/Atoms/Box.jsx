import React from "react";

export default function Box({ children, overflow = "" }) {
  return (
    <div
      className={`bg-white ${overflow} rounded-lg shadow-md border border-gray-100 mb-4 shadow-bottom`}
    >
      {children}
    </div>
  );
}
