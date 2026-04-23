import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../pages/friendDetails/homepage/HomePage";
import Friends from "../pages/friendDetails/homepage/timeline/Timeline";
import FriendDetails from "../pages/friendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/friends",
        element: <Friends />,
      },
      {
        path: "/friendDetails/:id",
        element: <FriendDetails />,
        loader: () => fetch("/friendsData.json"),
      },
    ],
  },
]);