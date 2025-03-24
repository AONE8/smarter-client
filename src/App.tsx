import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/Main";
import Signup, { signupAction } from "./pages/Auth/Signup";
import Login, { loginAction } from "./pages/Auth/Login";
import UserIndexPage from "./pages/UserIndex/UserIndexPage";
import UserPageLayout, {
  userLoader,
} from "./pages/UserPageLayout/UserPageLayout";
import UserHistoryPage from "./pages/UserHistory/UserHistoryPage";
import { editAction } from "./pages/actions/EditAction";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    children: [
      {
        path: "",
        element: <Main />,
        children: [
          {
            path: "signup",
            element: <Signup />,
            action: signupAction,
          },
          {
            path: "login",
            element: <Login />,
            action: loginAction,
          },
          {
            path: "search",
            element: <h1>SEARCH PAGE</h1>,
          },
        ],
      },
      {
        path: "user",
        element: <UserPageLayout />,
        id: "user",
        loader: userLoader,

        children: [
          {
            index: true,
            element: <UserIndexPage />,
          },
          {
            path: "history",
            element: <UserHistoryPage />,
          },
          {
            path: "edit",
            element: <p>No content</p>,
            action: editAction,
          },
          {
            path: "change-password",
          },
          {
            path: "delete",
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
