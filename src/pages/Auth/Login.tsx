import { ActionFunctionArgs, redirect, useSubmit } from "react-router-dom";
import AppForm from "../../components/AppForm/AppForm";
import Dialog from "../../components/UI/Dialog/Dialog";
import Input from "../../components/UI/Input/Input";
import axiosInstance from "../../utils/config/axios";
import { Token } from "../../utils/token";
import toast from "react-hot-toast";
import { renderErrors } from "../../utils/renderErrors";

export default function Login() {
  const submit = useSubmit();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    submit(event.currentTarget, { method: "post" });
  };

  return (
    <Dialog>
      <AppForm title="Вхід" linkTo="signup" onSubmit={handleSubmit}>
        <Input type="email" name="email" label="Електронна пошта" />
        <Input type="password" name="password" label="Пароль" />
      </AppForm>
    </Dialog>
  );
}

export async function loginAction({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.formData();

    const result = await axiosInstance.post("/auth/login", formData);
    Token.setToken(result.data.token);

    toast.success(result.data.message);

    return redirect("/user");
  } catch (error) {
    renderErrors(error);
  }

  return null;
}
