import { Link } from "react-router-dom";

import AppFormClasses from "./AppForm.module.scss";
import Button from "../UI/Button/Button";

interface AppFormProps {
  title: string;
  linkTo?: "login" | "signup";
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AppForm: React.FC<AppFormProps> = ({
  title,
  linkTo,
  children,
  onSubmit,
}) => {
  return (
    <form className={AppFormClasses.form} onSubmit={onSubmit}>
      <h2 className={AppFormClasses.title}>{title}</h2>
      <div className={AppFormClasses["inputs-container"]}>{children}</div>

      <p className={AppFormClasses.actions}>
        <Button type="reset">Очистити</Button>
        <Button type="submit">Підтвердити</Button>
      </p>

      {linkTo && (
        <p>
          <Link to={`/${linkTo}`} className={AppFormClasses.link}>
            {linkTo === "login"
              ? "Маєш вже обліковий запис?"
              : "Ще не маєш обліковий запис?"}
          </Link>
        </p>
      )}
    </form>
  );
};

export default AppForm;
