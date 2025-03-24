import Button from "../../UI/Button/Button";

import Pen from "../../../icons/Pen";
import Xmark from "../../../icons/Xmark";
import Trash from "../../../icons/Trash";

import classes from "./Aside.module.scss";

interface AsideProps extends React.HTMLAttributes<HTMLElement> {
  username: string;
  email: string;
  isEditingForm: boolean;
  setIsEditingForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const Aside: React.FC<AsideProps> = ({
  username,
  email,
  isEditingForm,
  setIsEditingForm,
}) => {
  return (
    <aside className={classes.aside}>
      <div>
        <span className={classes.avatar}>
          {username.charAt(0).toUpperCase()}
        </span>
      </div>
      {!isEditingForm && (
        <div className={classes["info-box"]}>
          <h4>Загальна інформація</h4>
          <p>{username.toLocaleUpperCase()}</p>
          <p>{email}</p>
        </div>
      )}
      {isEditingForm && (
        <form className={classes["form"]}>
          <h4>Загальна інформація</h4>
          <p>
            <input
              type="text"
              placeholder="Ім'я"
              defaultValue={username.toLocaleUpperCase()}
              autoFocus
            />
          </p>
          <p>
            <input
              type="email"
              placeholder="Електронна пошта"
              defaultValue={email}
            />
          </p>
          <p className={classes["form-actions"]}>
            <button className={classes["form-edit-btn"]} type="submit">
              <Pen /> Підтвердити
            </button>
            <button
              className={classes["form-cancel-btn"]}
              onClick={() => setIsEditingForm(false)}
            >
              <Xmark /> Скасувати
            </button>
            <button className={classes["form-clear-btn"]} type="reset">
              <Trash /> Очистити
            </button>
          </p>
        </form>
      )}
      <div className={classes["actions-box"]}>
        <h4>Дії</h4>
        <p>
          <Button
            className={classes["edit-btn"]}
            onClick={() => setIsEditingForm(true)}
          >
            Редагувати інформацію
          </Button>
        </p>
        <p>
          <Button className={classes["change-pswd-btn"]}>Змінити пароль</Button>
        </p>
        <p>
          <Button className={classes["history-btn"]}>
            Переглянути історію
          </Button>
        </p>
        <p>
          <Button className={classes["delete-btn"]}>
            Видалити обліковий запис
          </Button>
        </p>
      </div>
    </aside>
  );
};

export default Aside;
