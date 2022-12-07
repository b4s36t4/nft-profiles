import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../Screens/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export const router = createBrowserRouter(routes);
