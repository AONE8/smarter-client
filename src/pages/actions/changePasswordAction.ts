import { ActionFunctionArgs, redirect } from "react-router-dom";
import toast from "react-hot-toast";

import axiosInstance from "@/api/axios";
import { renderErrors } from "../../libs/renderErrors";

export async function changePasswordAction({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.json();

    const { data } = await axiosInstance.put("/user/change-password", formData);

    toast.success(data.message);

    return redirect("/user");
  } catch (error) {
    renderErrors(error);
  }
  return null;
}
