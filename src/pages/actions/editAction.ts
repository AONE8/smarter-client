import { ActionFunctionArgs, json } from "react-router-dom";
import toast from "react-hot-toast";

import axiosInstance from "@/api/axios";
import { renderErrors } from "@/libs/renderErrors";

export async function editAction({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.formData();

    console.log(Object.fromEntries(formData.entries()));

    const { data } = await axiosInstance.put("/user/update-user", formData);

    toast.success(data.message);

    return json(data.data);
  } catch (error) {
    renderErrors(error);
  }

  return null;
}
