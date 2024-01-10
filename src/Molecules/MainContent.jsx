import React from "react";

function MainContent({ children }) {
  return (
    <div className="flex-1 px-4 overflow-y-auto bg-[#ffff]">{children}</div>
  );
}

export default MainContent;
