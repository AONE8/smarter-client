import { AxiosError } from "axios";
import toast from "react-hot-toast";

export function renderErrors(error: unknown) {
  if (error instanceof AxiosError && error.response) {
    const { errors } = error.response.data;

    if (Array.isArray(errors)) {
      for (const err of errors) {
        toast.error(err.message);
      }
    } else {
      toast.error("An unexpected error occurred.");
    }
  } else {
    toast.error("An unexpected error occurred.");
  }
}
