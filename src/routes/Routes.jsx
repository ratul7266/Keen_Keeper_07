import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/friendDetails/homepage/HomePage";
import Friends from "../pages/friendDetails/homepage/friends/Friends";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import ErrorPage from "../ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path:"/friends",
        element: <Friends></Friends>
      },
      {
        path: "/friendDetails/:id",
        Component: FriendDetails,
        loader: ()=> fetch('/friendsData.json')
      }
    ],
    errorElement: <ErrorPage></ErrorPage>,
  }
]);