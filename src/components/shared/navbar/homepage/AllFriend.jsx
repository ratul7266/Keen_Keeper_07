import React, { Suspense } from "react";
import FriendCard from "../../../ui/FriendCard";
import { use } from "react";

const friendPromise = new Promise((resolve) => {
  setTimeout(() => {
    fetch("/friendsData.json")
      .then((res) => res.json())
      .then(resolve);
  }, 2000);
});

const AllFriendContent = () => {
  const friends = use(friendPromise);

  return (
    <div className="my-12 container mx-auto">
      <h2 className="font-bold text-3xl text-left mb-6">Your Friends</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {friends?.map((friend, ind) => (
          <FriendCard key={ind} friend={friend} />
        ))}
      </div>
    </div>
  );
};

const AllFriend = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-40">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      }
    >
      <AllFriendContent />
    </Suspense>
  );
};

export default AllFriend;
