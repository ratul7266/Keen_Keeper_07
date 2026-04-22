import { Plus } from "lucide-react";
import React from "react";
import { use } from "react";

const friendPromise = fetch("/friendsData.json").then((res) => res.json());
const Banner = () => {
  const friends = use(friendPromise);
  const onTrackCount = friends.filter((f) => f.status === "on-track").length;
  const overdueCount = friends.filter((f) => f.status === "overdue").length;
  const almostDueCount = friends.filter(
    (f) => f.status === "almost due",
  ).length;
  return (
    <div>
      <div className="text-center bg-base-200 mx-auto rounded-2xl my-8 py-8">
        <h1 className="text-6xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-600 font-semibold text-xl mt-4">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br />
          relationships that matter most.
        </p>

        <button className="btn bg-green-900 text-white mt-6">
          <Plus /> Add a Friend
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto container mt-8">
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="font-semibold text-3xl">{friends.length}</h2>
              <p className="text-gray-600 font-medium text-xl">Total Friends</p>
            </div>
          </div>
          <div className="card bg-base-100  shadow-sm">
            <div className="card-body">
              <h2 className="font-semibold text-3xl">{onTrackCount}</h2>
              <p className="text-gray-600 font-medium text-xl">On Track</p>
            </div>
          </div>
          <div className="card bg-base-100  shadow-sm">
            <div className="card-body">
              <h2 className="font-semibold text-3xl">{almostDueCount}</h2>
              <p className="text-gray-600 font-medium text-xl">
                Need Attention
              </p>
            </div>
          </div>
          <div className="card bg-base-100  shadow-sm">
            <div className="card-body">
              <h2 className="font-semibold text-3xl">{overdueCount}</h2>
              <p className="text-gray-600 font-medium text-xl">
                Interactions This Month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;