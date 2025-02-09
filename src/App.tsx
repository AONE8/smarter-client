import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <Main />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
