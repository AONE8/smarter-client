import { renderErrors } from "@/libs/renderErrors";
import axiosInstance from "@/api/axios";

export async function historyLoader() {
  try {
    const { data } = await axiosInstance.get("/device");

    return data.devices;
  } catch (error) {
    renderErrors(error);
    return null;
  }
}
