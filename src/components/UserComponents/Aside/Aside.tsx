import { FetcherWithComponents } from "react-router-dom";
import * as motion from "motion/react-client";

import Button from "@/components/UI/Button/Button";
import Anchor from "@/components/UI/Anchor/Anchor";

import Pen from "@/icons/Pen";
import Xmark from "@/icons/Xmark";
import Trash from "@/icons/Trash";
import Wrench from "@/icons/Wrench";
import Info from "@/icons/Info";

import { useLanguageContext } from "@/store/langContext";
import { aside, asideForm } from "@/contens/userLayout";

import { validateFormData } from "@/libs/validateFormData";
import { updateUserSchema } from "@/schemas/userSchema";

import styles from "./Aside.module.scss";

interface AsideProps extends React.HTMLAttributes<HTMLElement> {
  username: string;
  email: string;
  isEditingForm: boolean;
  setIsEditingForm: React.Dispatch<React.SetStateAction<boolean>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateFetcher: FetcherWithComponents<any>;
  active?: boolean;
  onDisactive: () => void;
}

const Aside: React.FC<AsideProps> = ({
  username,
  email,
  isEditingForm,
  setIsEditingForm,
  updateFetcher,
  active,
  onDisactive,
}) => {
  const lang = useLanguageContext().language;

  function handleAnchorDelegatedClick(e: React.MouseEvent<HTMLDivElement>) {
    const isAnchorElement = e.target instanceof HTMLAnchorElement;

    if (isAnchorElement) onDisactive();
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const formElement = e.currentTarget;

    const data = validateFormData({
      formElement,
      schema: updateUserSchema,
    });

    console.log(data);

    if (data) setIsEditingForm(false);
  }

  return (
    <>
      <motion.aside
        className={`${styles.aside} ${active ? styles.active : ""}`}
        initial={{ x: "-10%" }}
        animate={{ x: 0 }}
        exit={{ x: "-10%" }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <span className={styles.avatar}>
            {username.charAt(0).toUpperCase()}
          </span>
        </div>
        {!isEditingForm && (
          <div className={styles["info-box"]}>
            <h4>
              <Info /> <span>{aside.generalInfo[lang]}</span>
            </h4>
            <p>{username.toLocaleUpperCase()}</p>
            <p>{email}</p>
          </div>
        )}
        {isEditingForm && (
          <updateFetcher.Form
            className={styles["form"]}
            method="PUT"
            action="/user/edit"
            onSubmit={handleSubmit}
          >
            <h4>
              <Info /> <span>{aside.generalInfo[lang]}</span>
            </h4>
            <p>
              <input
                type="text"
                placeholder={asideForm.nameLable[lang]}
                name="username"
                defaultValue={username}
                autoFocus
              />
            </p>
            <p>
              <input
                type="email"
                name="email"
                placeholder={asideForm.emailLable[lang]}
                defaultValue={email}
              />
            </p>
            <p className={styles["form-actions"]}>
              <button className={styles["form-edit-btn"]} type="submit">
                <Pen /> {asideForm.submitBtn[lang]}
              </button>
              <button
                className={styles["form-cancel-btn"]}
                onClick={() => setIsEditingForm(false)}
              >
                <Xmark /> {asideForm.cancelBtn[lang]}
              </button>
              <button className={styles["form-clear-btn"]} type="reset">
                <Trash /> {asideForm.clearBtn[lang]}
              </button>
            </p>
          </updateFetcher.Form>
        )}
        <div
          className={styles["actions-box"]}
          onClick={handleAnchorDelegatedClick}
        >
          <h4>
            <Wrench />
            <span> {aside.actions[lang]}</span>
          </h4>
          <p>
            <Button
              className={styles["edit-btn"]}
              onClick={() => setIsEditingForm(true)}
            >
              {aside.editInfo[lang]}
            </Button>
          </p>
          <p>
            <Anchor
              to="/user/change-password"
              className={styles["change-pswd-btn"]}
            >
              {aside.changePswd[lang]}
            </Anchor>
          </p>
          <p>
            <Anchor to="/user/history" className={styles["history-btn"]}>
              {aside.viewHistory[lang]}
            </Anchor>
          </p>
          <p>
            <Anchor to="/user/delete" className={styles["delete-btn"]}>
              {aside.deleteAccount[lang]}
            </Anchor>
          </p>
        </div>
      </motion.aside>

      {active && (
        <motion.div
          className={styles["aside-backdrop"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onDisactive}
        ></motion.div>
      )}
    </>
  );
};

export default Aside;
