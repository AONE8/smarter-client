import { ActionFunctionArgs, redirect } from "react-router-dom";
import toast from "react-hot-toast";

import axiosInstance from "@/api/axios";
import { renderErrors } from "../../libs/renderErrors";

export async function deleteUserAction({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.json();
    const { data } = await axiosInstance.post("/user/delete-account", formData);

    toast.success(data.message);

    return redirect("/");
  } catch (error) {
    renderErrors(error);
  }
  return null;
}
