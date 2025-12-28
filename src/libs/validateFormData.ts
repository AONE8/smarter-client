import toast from "react-hot-toast";
import * as z from "zod/mini";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ValidateFormDataArgs<TSchema extends z.ZodMiniObject<any>> {
  formElement: HTMLFormElement;
  schema: TSchema;
  setErrors?: React.Dispatch<
    React.SetStateAction<Record<string, string | undefined>>
  >;
}

export const validateFormData = ({
  formElement,
  schema,
  setErrors,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
ValidateFormDataArgs<z.ZodMiniObject<any>>) => {
  const formData = new FormData(formElement);

  const data = Object.fromEntries(formData.entries());

  const validation = schema.safeParse(data);

  if (!validation.success) {
    const errors = validation.error.issues;
    for (const err of errors) {
      if (setErrors)
        setErrors((prev) => ({ ...prev, [err.path[0]]: err.message }));
      toast.error(err.message);
    }
  }

  return validation.data;
};
