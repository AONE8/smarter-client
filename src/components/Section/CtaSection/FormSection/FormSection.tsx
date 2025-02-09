import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import formSectionClasses from "./FormSection.module.scss";

export default function FormSection() {
  return (
    <section className={formSectionClasses["form-section"]}>
      <p>Маєш вже обліковий запис?</p>
      <form action="/signup" method="POST">
        <div className={formSectionClasses["inputs-container"]}>
          <Input name="email" type="text" label="Електронна пошта" />
          <Input name="password" type="password" label="Пароль" />
        </div>

        <div className={formSectionClasses["action-box"]}>
          <Button type="reset">Очистити</Button>
          <Button type="submit">Увійти</Button>
        </div>
      </form>
    </section>
  );
}
