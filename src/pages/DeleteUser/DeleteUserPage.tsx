import { useState } from "react";
import { useSubmit } from "react-router-dom";

import { type DeleteUserFormErrors } from "@/types/errors/formErrors";
import { type SubmitTarget } from "react-router-dom/dist/dom";

import AppForm from "@/components/AppForm/AppForm";
import Dialog from "@/components/UI/Dialog/Dialog";
import Input from "@/components/UI/Input/Input";
import { deleteUserSchema } from "@/schemas/userSchema";
import { validateFormData } from "@/libs/validateFormData";

const DeleteUserPage = () => {
  const submit = useSubmit();
  const [errors, setErrors] = useState<DeleteUserFormErrors>({});

  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formEl = event.currentTarget;

    const data = validateFormData({
      formElement: formEl,
      schema: deleteUserSchema,
      setErrors,
    });

    if (data) {
      submit(data as SubmitTarget, {
        method: "post",
        encType: "application/json",
      });
    }
  };

  return (
    <Dialog>
      <AppForm title="Видалити обліковий запис" onSubmit={handleSumbit}>
        <div>
          <p>Ви впевнені, що хочете видалити свій обліковий запис?</p>
          <p>Ця операція не може бути скасована</p>
          <p>Щоб продовжити введіть пароль</p>
        </div>
        <Input
          type="password"
          name="password"
          label="Пароль"
          error={errors.password}
        />
      </AppForm>
    </Dialog>
  );
};

export default DeleteUserPage;
