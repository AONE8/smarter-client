import { ActionFunctionArgs, json } from "react-router-dom";
import toast from "react-hot-toast";

import axiosInstance from "@/api/axios";
import { renderErrors } from "../../libs/renderErrors";

export async function deleteHistoryAction({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.json();

    await axiosInstance.delete(`/device/${formData.deviceId}`);

    toast.success("History deleted successfully.");

    return json({ message: "History deleted successfully." }, { status: 200 });
  } catch (error) {
    renderErrors(error);
  }

  return null;
}
