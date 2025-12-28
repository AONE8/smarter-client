import { LoaderFunctionArgs } from "react-router-dom";

import axiosInstance from "@/api/axios";
import { renderErrors } from "@/libs/renderErrors";

export async function userLoader({ request }: LoaderFunctionArgs) {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const device = searchParams.get("device");

    const { data } = await axiosInstance.get("/user");

    if (device) {
      const { data: deviceFormData } = await axiosInstance.get(
        `/search?device=${device}`
      );

      return { ...data, deviceFormData };
    }

    return data;
  } catch (error) {
    renderErrors(error);
    return null;
  }
}
