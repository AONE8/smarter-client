import { ActionFunctionArgs, json } from "react-router-dom";
import { AxiosError } from "axios";
import { renderErrors } from "../../libs/renderErrors";
import axiosInstance from "@/api/axios";

export async function searchDeviceAction({
  request,
  params,
}: ActionFunctionArgs) {
  try {
    const body = await request.json();
    const { deviceType } = params;

    const { data } = await axiosInstance.post(`/device/${deviceType}`, body);

    return data;
  } catch (error) {
    renderErrors(error);

    if (error instanceof AxiosError && error.response) {
      const status = error.response.status;

      if (status === 404) {
        throw json({ message: "No device found." }, { status: 404 });
      }
    }
    throw json({ message: "An unexpected error occurred." }, { status: 500 });
  }
}
