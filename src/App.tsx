import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import UserPageLayout from "./layouts/UserPageLayout/UserPageLayout";

import Main from "./pages/Main/Main";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import UserIndexPage from "./pages/UserIndex/UserIndexPage";
import UserHistoryPage from "./pages/UserHistory/UserHistoryPage";
import ChangePasswordPage from "./pages/ChangePassword/ChangePasswordPage";
import DeleteUserPage from "./pages/DeleteUser/DeleteUserPage";
import Result from "./pages/Result/Result";

import Loader from "./components/UI/Loader/Loader";
import DeviceError from "./components/DeviceError/DeviceError";

import { userLoader } from "./pages/loaders/userLoader";
import { historyLoader } from "./pages/loaders/historyLoader";

import { signupAction } from "./pages/actions/signupAction";
import { loginAction } from "./pages/actions/loginAction";
import { editAction } from "./pages/actions/editAction.ts";
import { searchDeviceAction } from "./pages/actions/searchDeviceAction";
import { deleteUserAction } from "./pages/actions/deleteUserAction";
import { deleteHistoryAction } from "./pages/actions/deleteHistoryAction";
import { changePasswordAction } from "./pages/actions/changePasswordAction";
import { logoutAction } from "./pages/actions/logoutAction";
import { LanguageProvider } from "./store/langContext";
import Error from "./pages/Error/Error";

const router = createBrowserRouter(
  [
    {
      path: "/",
      id: "root",
      hydrateFallbackElement: <Loader />,
      errorElement: <Error />,
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
              loader: historyLoader,
              element: <UserHistoryPage />,
            },
            {
              path: "history/delete",
              action: deleteHistoryAction,
            },
            {
              path: "edit",
              action: editAction,
            },
            {
              path: "change-password",
              element: <ChangePasswordPage />,
              action: changePasswordAction,
            },
            {
              path: "delete",
              element: <DeleteUserPage />,
              action: deleteUserAction,
            },
            {
              path: "logout",
              action: logoutAction,
            },
            {
              path: "device-search/:deviceType",
              action: searchDeviceAction,
              errorElement: <DeviceError />,
              element: <Result />,
            },
          ],
        },
      ],
    },
  ],
  { future: { v7_partialHydration: true, v7_relativeSplatPath: true } },
);

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          removeDelay: 500,
        }}
      />
    </LanguageProvider>
  );
}

export default App;
