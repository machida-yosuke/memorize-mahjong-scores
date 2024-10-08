import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { TopRoute } from "./routes/app/top";

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <TopRoute />,
    },
    {
      path: "*",
      lazy: async () => {
        const { NotFoundRoute } = await import("./routes/not-found");
        return { Component: NotFoundRoute };
      },
    },
  ]);

export const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);

  return <RouterProvider router={router} />;
};
