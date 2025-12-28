import { useId, useState } from "react";
import { useSubmit } from "react-router-dom";

import { type LoginFormErrors } from "@/types/errors/formErrors";

import AppForm from "@/components/AppForm/AppForm";
import Dialog from "@/components/UI/Dialog/Dialog";
import Input from "@/components/UI/Input/Input";
import { useLanguageContext } from "@/store/langContext";

import { authLabels, loginTitle } from "@/contens/auth";
import { loginSchema } from "@/schemas/authSchema";
import { validateFormData } from "@/libs/validateFormData";
import { SubmitTarget } from "react-router-dom/dist/dom";

export default function Login() {
  const submit = useSubmit();
  const formId = useId();
  const [errors, setErrors] = useState<LoginFormErrors>({});

  const lang = useLanguageContext().language;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = event.currentTarget;

    const data = validateFormData({
      formElement,
      schema: loginSchema,
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
      <AppForm title={loginTitle[lang]} linkTo="signup" onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          label={authLabels.email[lang]}
          error={errors.email}
          formId={formId}
        />
        <Input
          type="password"
          name="password"
          label={authLabels.password[lang]}
          error={errors.password}
          formId={formId}
        />
      </AppForm>
    </Dialog>
  );
}
