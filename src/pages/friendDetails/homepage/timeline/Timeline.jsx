import { ChevronDown } from "lucide-react";
import React from "react";

const Timeline = () => {
  return (
    <div className="bg-base-200">
      <div className="mx-auto container">
        <h2 className="text-4xl font-bold py-8">Timeline</h2>
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter timeline <ChevronDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default Timeline;
