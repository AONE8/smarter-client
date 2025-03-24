import { DeviceForm } from "../../../utils/questions/deviceForm.model";
import AppForm from "../../AppForm/AppForm";
import Dialog from "../../UI/Dialog/Dialog";
import CheckboxInput from "../../UI/Input/CheckboxInput/CheckboxInput";
import RadioInput from "../../UI/Input/RadioInput/RadioInput";
import SelectInput from "../../UI/Input/SelectInput/SelectInput";

interface DialogModuleProps extends React.HTMLAttributes<HTMLElement> {
  deviceForm: DeviceForm;
}

const DialogModule: React.FC<DialogModuleProps> = ({ deviceForm }) => {
  return (
    <Dialog>
      <AppForm title={deviceForm.ukranianTitle}>
        {deviceForm.questions.map((question) => {
          switch (question.type) {
            case "checkbox":
              return (
                <CheckboxInput
                  key={question.name}
                  title={question.question}
                  name={question.name}
                  options={question.answers}
                />
              );
            case "radio":
              return (
                <RadioInput
                  key={question.name}
                  title={question.question}
                  name={question.name}
                  options={question.answers}
                />
              );
            case "select":
              return (
                <SelectInput
                  key={question.name}
                  title={question.question}
                  name={question.name}
                  options={question.answers}
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
