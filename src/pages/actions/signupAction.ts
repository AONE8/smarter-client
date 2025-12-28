import { ActionFunctionArgs, redirect } from "react-router-dom";
import toast from "react-hot-toast";

import axiosInstance from "@/api/axios";
import { Token } from "../../libs/token";
import { renderErrors } from "../../libs/renderErrors";

export async function signupAction({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.json();

    const { data } = await axiosInstance.post("/auth/signup", formData);

    Token.setToken(data.token);

    toast.success(data.message);
    return redirect("/user");
  } catch (error) {
    renderErrors(error);
  }

  return null;
}
