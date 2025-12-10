import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutPage from "./Pages/LayoutPage";
import HomePage from "./Pages/HomePage";
import TousLesPersos from "./Pages/TousLesPersos";
import FetchPersos from "./Pages/fetchPersos";
import ErrorPage from "./Pages/ErrorPage";
import CreationPerso from "./Pages/CreationPersos";
function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/tous-les-persos",
          element: <TousLesPersos />,
        },
        {
          path: "/fetchPersos",
          element: <FetchPersos />,
        },
        {
          path: "/creer-un-personnage",
          element: <CreationPerso />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />, // Capture toutes les URLs non définies
    },
  ]);
  return <RouterProvider router={myRouter} />;
}
export default App;
