import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../pages/friendDetails/homepage/HomePage";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import Timeline from "../pages/friendDetails/homepage/timeline/Timeline";

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
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/friendDetails/:id",
        element: <FriendDetails />,
        loader: () => fetch("/friendsData.json"),
      },
    ],
  },
]);
