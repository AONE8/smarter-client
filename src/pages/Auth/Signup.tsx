import { ActionFunctionArgs, redirect, useSubmit } from "react-router-dom";
import AppForm from "../../components/AppForm/AppForm";
import Dialog from "../../components/UI/Dialog/Dialog";
import Input from "../../components/UI/Input/Input";
import axiosInstance from "../../utils/config/axios";
import { renderErrors } from "../../utils/renderErrors";

export default function Signup() {
  const submit = useSubmit();

  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formEl = event.currentTarget;

    submit(formEl, { method: "post" });
  };

  return (
    <Dialog>
      <AppForm title="Реєстрація" linkTo="login" onSubmit={handleSumbit}>
        <Input type="text" name="username" label="Ім'я" />
        <Input type="email" name="email" label="Електронна пошта" />
        <Input type="password" name="password" label="Пароль" />
        <Input
          type="password"
          name="confirmPassword"
          label="Підтвердження пароля"
        />
      </AppForm>
    </Dialog>
  );
}

export async function signupAction({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.formData();

    const { data } = await axiosInstance.post("/auth/signup", formData);

    localStorage.setItem("token", data.token);
    return redirect("/user");
  } catch (error) {
    renderErrors(error);
  }

  return null;
}
