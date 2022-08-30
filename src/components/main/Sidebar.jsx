import { Link } from "react-router-dom";
import React from "react";
const Sidebar = ({ data }) => {
  return (
    // sidebar container
    <div className="w-2/12 relative">
      <div className="fixed w-[15%]  min-h-screen bg-blue-500">
        <div className="w-full h-1/4 p-4">
          <ul className="flex flex-col h-full justify-evenly items-center gap-2">
            <li>
              <Link to="/">Overview</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
