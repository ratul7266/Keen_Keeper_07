import { useParams } from "react-router";
import friendsData from "../../data/friendsData.json";
import {
  Phone,
  MessageCircle,
  Video,
  Users,
  Clock,
  Archive,
  Trash2,
} from "lucide-react";
import ErrorPage from "../../ErrorPage/ErrorPage";
import { useNavigate } from "react-router";

const iconMap = {
  Call: <Phone size={18} />,
  Text: <MessageCircle size={18} />,
  Video: <Video size={18} />,
  Meetup: <Users size={18} />,
};

const statusColor = {
  overdue: "bg-red-100 text-red-700",
  "almost due": "bg-yellow-100 text-yellow-700",
  "on-track": "bg-green-100 text-green-700",
};

const FriendDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const friend = friendsData.find((f) => f.id === Number(id));
  const handleAction = (type) => {
    navigate("/timeline", {
      state: { type, friend },
    });
  };
  if (!friend) return <ErrorPage></ErrorPage>;

  return (
    <div className="bg-base-200 pb-42 pt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-3 sm:p-4 lg:p-2 mx-auto max-w-7xl items-stretch ">
        <div className="flex flex-col h-full justify-between">
          <div className="bg-white rounded-2xl p-4 sm:p-5 text-center space-y-3 shadow-sm">
            <img
              src={friend.picture}
              className="w-20 h-20 rounded-full mx-auto object-cover"
            />
            <h2 className="font-semibold text-base sm:text-lg">
              {friend.name}
            </h2>

            <span
              className={`text-xs px-3 py-1 rounded-full ${
                statusColor[friend.status]
              }`}
            >
              {friend.status}
            </span>

            <div className="flex flex-wrap justify-center gap-1.5">
              {friend.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              {friend.bio}
            </p>
          </div>
          <div className="space-y-2 mt-8">
            <button className="btn w-full gap-2 text-sm">
              <Clock size={16} /> Snooze
            </button>
            <button className="btn w-full gap-2 text-sm">
              <Archive size={16} /> Archive
            </button>
            <button className="btn w-full text-red-600 gap-2 text-sm">
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </div>
        <div className="flex flex-col h-full space-y-4">
          <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
            <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm flex flex-col justify-center">
              <p className="text-lg sm:text-xl font-semibold text-green-800">
                {friend.days_since_contact}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm flex flex-col justify-center">
              <p className="text-lg sm:text-xl font-semibold text-green-800">
                {friend.goal}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">Goal (Days)</p>
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm flex flex-col justify-center">
              <p className="text-sm sm:text-lg font-semibold text-green-800">
                {new Date(friend.next_due_date).toLocaleDateString()}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm flex-1">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-green-800 text-sm sm:text-base">
                Relationship Goal
              </p>
              <button className="text-black font-semibold border px-3 py-1 rounded-md text-xs sm:text-sm">
                Edit
              </button>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Connect Every{" "}
              <span className="font-bold text-black">{friend.goal} days</span>
            </p>
          </div>

          {/* Quick Actions now beside Delete */}
          <div className="bg-white rounded-2xl p-3 shadow-sm flex flex-col justify-center">
            <p className="font-semibold mb-2 text-green-800 text-sm text-center">
              Quick Check-In
            </p>

            <div className="grid grid-cols-3 gap-3">
              {["Call", "Text", "Video"].map((type) => (
                <button
                  key={type}
                  onClick={() => handleAction(type)}
                  className="flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md text-lg font-medium text-gray-700"
                >
                  <span>{iconMap[type]}</span>
                  <span>{type}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
