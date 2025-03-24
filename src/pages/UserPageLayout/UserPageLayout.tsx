import { useState } from "react";
import { Navigate, Outlet, useLoaderData, useLocation } from "react-router-dom";
import userPageLayoutClasses from "./UserPageLayout.module.scss";

import Header from "../../components/UserComponents/Header/Header";
import Aside from "../../components/UserComponents/Aside/Aside";

import DialogModule from "../../components/UserComponents/DIalog/DialogModule";
import { DEVICE_FORMS } from "../../utils/questions/deviceForm.model";
import axiosInstance from "../../utils/config/axios";
import { Token } from "../../utils/token";
import { Toaster } from "react-hot-toast";

type LoaderDataType = { username: string; email: string } | null;

const UserPageLayout = () => {
  const [isEditingForm, setIsEditingForm] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const device = searchParams.get("device");
  const loaderData = useLoaderData() as LoaderDataType;

  if (!loaderData) {
    return <Navigate to="/login" />;
  }

  // const handleChange = (event: FormEvent<HTMLFormElement>) => {
  //   const childInput = event.target as HTMLInputElement;
  //   const { form } = childInput;

  //   const formData = new FormData(form!);
  //   const device = formData.get("device");

  //   navigator(`?device=${device}`, { replace: true });
  //   form!.reset();

  //   console.dir(form);
  // };

  return (
    <div className={userPageLayoutClasses.body}>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          removeDelay: 500,
        }}
      />
      <Header />
      {device && (
        <DialogModule
          deviceForm={DEVICE_FORMS.find((form) => form.deviceType === device)!}
        />
      )}
      <Outlet />
      <Aside
        username={loaderData.username}
        email={loaderData.email}
        {...{ isEditingForm, setIsEditingForm }}
      />
    </div>
  );
};

export default UserPageLayout;

export async function userLoader() {
  try {
    const token = Token.getToken();

    console.log(token);

    const { data } = await axiosInstance.get("/user", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
  return null;
}
