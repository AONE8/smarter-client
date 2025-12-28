import { useId, useState } from "react";
import { useSubmit } from "react-router-dom";

import { type SubmitTarget } from "react-router-dom/dist/dom";

import AppForm from "@/components/AppForm/AppForm";
import Dialog from "@/components/UI/Dialog/Dialog";
import Input from "@/components/UI/Input/Input";

import { useLanguageContext } from "@/store/langContext";
import { authLabels, signupTitle } from "@/contens/auth";
import { signupSchema } from "@/schemas/authSchema";
import { validateFormData } from "@/libs/validateFormData";
import { SignupFormErrors } from "@/types/errors/formErrors";

export default function Signup() {
  const submit = useSubmit();
  const formId = useId();
  const [errors, setErrors] = useState<SignupFormErrors>({});

  const lang = useLanguageContext().language;

  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = event.currentTarget;

    const data = validateFormData({
      formElement,
      schema: signupSchema,
      setErrors,
    });

    if (data) {
      submit(data as SubmitTarget, {
        method: "post",
        encType: "application/json",
      });
    }
  };

  const handleReset = () => {
    setErrors({});
  };

  return (
    <Dialog>
      <AppForm
        title={signupTitle[lang]}
        linkTo="login"
        onSubmit={handleSumbit}
        onReset={handleReset}
      >
        <Input
          type="text"
          name="username"
          label={authLabels.name[lang]}
          error={errors.username}
          formId={formId}
        />
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
        <Input
          type="password"
          name="confirmPassword"
          label={authLabels.confirmPassword[lang]}
          error={errors.confirmPassword}
          formId={formId}
        />
      </AppForm>
    </Dialog>
  );
}
