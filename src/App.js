import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Body, Header, MainContainer, SearchPage, Watch } from "./components";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
