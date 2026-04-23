import { useParams } from "react-router";

const FriendDetails = () => {
  const { id } = useParams();

  return <div>Friend ID: {id}</div>;
};

export default FriendDetails;