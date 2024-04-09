import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";
import PageNotFound from "./PageNotFound";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Suggestion from "./Suggestion";
import Search from "./Search";
import MovieDetail from "./MovieDetail";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Login login={false} />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/suggestion",
      element: <Suggestion />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/movie/:id",
      element: <MovieDetail />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
    {
      errorElement: <Error />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
