import { ActionFunctionArgs, redirect } from "react-router-dom";
import toast from "react-hot-toast";

import { Token } from "../../libs/token";
import axiosInstance from "@/api/axios";
import { renderErrors } from "../../libs/renderErrors";

export async function loginAction({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.json();

    const result = await axiosInstance.post("/auth/login", formData);

    Token.setToken(result.data.token);

    toast.success(result.data.message);

    return redirect("/user");
  } catch (error) {
    renderErrors(error);
    return null;
  }
}
