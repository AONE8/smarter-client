import { ActionFunctionArgs, json } from "react-router-dom";
import axiosInstance from "../../utils/config/axios";
import { Token } from "../../utils/token";
import toast from "react-hot-toast";
import { renderErrors } from "../../utils/renderErrors";

export async function editAction({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.formData();

    const token = Token.getToken();

    const { data } = await axiosInstance.put("/update-user", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success(data.message);

    return json(data.data);
  } catch (error) {
    renderErrors(error);
  }
}
