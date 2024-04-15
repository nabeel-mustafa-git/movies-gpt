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
      errorElement: <Error />,
    },
    {
      path: "/signup",
      element: <Login login={false} />,
      errorElement: <Error />,
    },
    {
      path: "/browse",
      element: <Browse />,
      errorElement: <Error />,
    },
    {
      path: "/suggestion",
      element: <Suggestion />,
      errorElement: <Error />,
    },
    {
      path: "/search",
      element: <Search />,
      errorElement: <Error />,
    },
    {
      path: "/movie/:id",
      element: <MovieDetail />,
      errorElement: <Error />,
    },
    {
      path: "*",
      element: <PageNotFound />,
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
