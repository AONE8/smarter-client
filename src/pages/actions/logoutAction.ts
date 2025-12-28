import { redirect } from "react-router-dom";
import toast from "react-hot-toast";

import { Token } from "../../libs/token";

export async function logoutAction() {
  try {
    Token.removeToken();

    toast.success("You have been logged out.");

    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error("An unexpected error occurred.");
  }
  return null;
}
