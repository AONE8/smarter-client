import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import formSectionClasses from "./FormSection.module.scss";

export default function FormSection() {
  return (
    <section className={formSectionClasses["form-section"]}>
      <p>Маєш вже обліковий запис?</p>
      <form action="/signup" method="POST">
        <div className={formSectionClasses["inputs-container"]}>
          <Input name="email" type="email" label="Електронна пошта" />
          <Input name="password" type="password" label="Пароль" />
        </div>

        <div className={formSectionClasses["action-box"]}>
          <Button type="reset" className={formSectionClasses.btn}>
            Очистити
          </Button>
          <Button type="submit" className={formSectionClasses.btn}>
            Увійти
          </Button>
        </div>
      </form>
    </section>
  );
}
