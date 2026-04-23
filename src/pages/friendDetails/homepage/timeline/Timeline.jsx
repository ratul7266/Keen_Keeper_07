import { ChevronDown, Clock } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import call from "../../../../assets/call.png";
import text from "../../../../assets/text.png";
import vdo from "../../../../assets/video.png";

const Timeline = () => {
  const location = useLocation();
  const { type, friend } = location.state || {};
  const hasAdded = useRef(false);

  const [filter, setFilter] = useState("All");

  const [timeline, setTimeline] = useState(() => {
    const saved = localStorage.getItem("timeline");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (!friend || !type || hasAdded.current) return;

    hasAdded.current = true;

    setTimeline((prev) => {
      const updated = [
        {
          ...friend,
          action: type,
          date: new Date().toLocaleString(),
          entryId: `${friend.id}-${type}-${Date.now()}`,
        },
        ...prev,
      ];

      localStorage.setItem("timeline", JSON.stringify(updated));
      return updated;
    });
  }, [friend, type]);

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.action === filter);

  const getActionText = (action, name) => (
    <p>
      <span className="font-semibold">{action}</span>{" "}
      <span className="text-gray-600">with {name}</span>
    </p>
  );

  return (
    <div className="bg-base-200 pb-96">
      <div className="mx-auto container">
        {/* Header */}
        <div className="flex items-center justify-between py-4">
          <h2 className="text-4xl font-bold">Timeline</h2>

          <button
            onClick={() => {
              localStorage.removeItem("timeline");
              setTimeline([]);
            }}
            className="btn btn-sm bg-green-950 text-white"
          >
            Refresh
          </button>
        </div>

        {/* Filter Dropdown */}
        <div className="dropdown dropdown-start mb-2">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter Timeline <ChevronDown />
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => setFilter("All")}>All</a>
            </li>
            <li>
              <a onClick={() => setFilter("Call")}>Call</a>
            </li>
            <li>
              <a onClick={() => setFilter("Text")}>Text</a>
            </li>
            <li>
              <a onClick={() => setFilter("Video")}>Video</a>
            </li>
          </ul>
        </div>

        {/* Timeline List */}
        <div className="mt-6 space-y-3">
          {filteredTimeline.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
              <Clock size={40} className="mb-3 opacity-40" />
              <p className="text-sm">No activity yet</p>
            </div>
          )}

          {filteredTimeline.map((item) => (
            <div
              key={item.entryId}
              className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4"
            >
              <img
                src={
                  item.action === "Call"
                    ? call
                    : item.action === "Text"
                    ? text
                    : vdo
                }
                className="w-10 h-10 object-contain"
              />

              <div>
                {getActionText(item.action, item.name)}
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;