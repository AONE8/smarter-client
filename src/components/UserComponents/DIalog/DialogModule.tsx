import { useNavigation, useSubmit } from "react-router-dom";

import { type DeviceForm } from "@/types/DeviceForm.type";

import AppForm from "@/components/AppForm/AppForm";

import Dialog from "@/components/UI/Dialog/Dialog";
import CheckboxInput from "@/components/UI/CheckboxInput/CheckboxInput";
import RadioInput from "@/components/UI/RadioInput/RadioInput";
import SelectInput from "@/components/UI/SelectInput/SelectInput";
import Loader from "@/components/UI/Loader/Loader";
import { useLanguageContext } from "@/store/langContext";

interface DialogModuleProps extends React.HTMLAttributes<HTMLElement> {
  deviceForm: DeviceForm;
}

const DialogModule: React.FC<DialogModuleProps> = ({ deviceForm }) => {
  const lang = useLanguageContext().language;
  const submit = useSubmit();
  const navigation = useNavigation();

  if (navigation.state === "submitting") return <Loader />;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formEl = event.currentTarget;
    const formData = new FormData(formEl);

    const newFormData = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: [...formData.keys()].reduce((acc: any, key) => {
        const value = formData.getAll(key);
        acc[key] = value.length > 1 ? value : value[0];
        return acc;
      }, {}),
      lang,
    };

    console.log(newFormData);

    submit(newFormData, {
      method: "POST",
      action: `/user/device-search/${deviceForm.deviceType}`,
      encType: "application/json",
    });
  };
  return (
    <Dialog>
      <AppForm title={deviceForm.title[lang]} onSubmit={handleSubmit}>
        {deviceForm.questions.map((question) => {
          switch (question.type) {
            case "checkbox":
              return (
                <CheckboxInput
                  key={question.name}
                  title={question.question[lang]}
                  name={question.name}
                  options={
                    Array.isArray(question.answers)
                      ? question.answers
                      : question.answers[lang]
                  }
                />
              );
            case "radio":
              return (
                <RadioInput
                  key={question.name}
                  title={question.question[lang]}
                  name={question.name}
                  options={
                    Array.isArray(question.answers)
                      ? question.answers
                      : question.answers[lang]
                  }
                />
              );
            case "select":
              return (
                <SelectInput
                  key={question.name}
                  title={question.question[lang]}
                  name={question.name}
                  options={
                    Array.isArray(question.answers)
                      ? question.answers
                      : question.answers[lang]
                  }
                />
              );
            default:
              return null;
          }
        })}
      </AppForm>
    </Dialog>
  );
};

export default DialogModule;
