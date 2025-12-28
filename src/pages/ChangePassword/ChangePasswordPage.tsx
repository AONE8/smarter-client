import { useState } from "react";
import { useSubmit } from "react-router-dom";

import { type SubmitTarget } from "react-router-dom/dist/dom";
import { type ChangePasswordFormErrors } from "@/types/errors/formErrors";

import AppForm from "@/components/AppForm/AppForm";
import Dialog from "@/components/UI/Dialog/Dialog";
import Input from "@/components/UI/Input/Input";

import { changePasswordSchema } from "@/schemas/userSchema";
import { validateFormData } from "@/libs/validateFormData";

const ChangePasswordPage = () => {
  const submit = useSubmit();
  const [errors, setErrors] = useState<ChangePasswordFormErrors>({});

  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formEl = event.currentTarget;

    const data = validateFormData({
      formElement: formEl,
      schema: changePasswordSchema,
      setErrors,
    });

    if (data) {
      submit(data as SubmitTarget, {
        method: "put",
        encType: "application/json",
      });
    }
  };

  return (
    <Dialog>
      <AppForm title="Змінити пароль" onSubmit={handleSumbit}>
        <Input
          type="password"
          name="password"
          label="Пароль"
          error={errors.password}
        />
        <Input
          type="password"
          name="confirmPassword"
          label="Підтвердження пароля"
          error={errors.confirmPassword}
        />
      </AppForm>
    </Dialog>
  );
};

export default ChangePasswordPage;
