import React from 'react';
import { use } from 'react';
import FriendCard from '../../../ui/FriendCard';


const friendPromise = fetch("/friendsData.json").then((res) => res.json());
const AllFriend = () => {
    const friends = use(friendPromise)
    return (
        <div>
            <div className="my-12 container mx-auto">
      <h2 className="font-bold text-3xl text-left mb-6">Your Friends</h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {friends?.map((friend , ind) => {
        return (
         <FriendCard key={ind} friend={friend}></FriendCard>
        );
      })}
      </div>
    </div>
        </div>
    );
};

export default AllFriend;