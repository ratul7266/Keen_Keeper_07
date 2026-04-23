import React from "react";
import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  const getStatusColor = () => {
    if (friend.status === "overdue") return "bg-red-500";
    if (friend.status === "almost due") return "bg-yellow-500";
    if (friend.status === "on-track") return "bg-green-600";
  };

  return (
    <Link to={`/friendDetails/${friend.id}`}>
      <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-lg transition">
        
        <div className="flex justify-center mb-3">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>

        <h2 className="font-semibold text-lg">{friend.name}</h2>

        <p className="text-gray-400 text-sm mb-2">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex justify-center gap-2 flex-wrap mb-2">
          {friend.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full font-medium"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        <div className="flex justify-center">
          <span
            className={`text-white text-xs px-3 py-1 rounded-full ${getStatusColor()}`}
          >
            {friend.status}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;