import { FormEvent, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import styles from "./Dialog.module.scss";

interface DialogProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  temp?: string;
}

const Dialog: React.FC<DialogProps> = ({ children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  const handleCloseDialog = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isSearchStringEmpty = location.search.length > 0;

    if (dialogRef.current) {
      dialogRef.current.close();

      navigate(isSearchStringEmpty ? location.pathname : "../");
    }
  };

  return (
    <div>
      <dialog ref={dialogRef} className={styles.dialog}>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 5000,
            removeDelay: 500,
          }}
        />
        {children}
        <form
          method="dialog"
          onSubmit={handleCloseDialog}
          className={styles["dialog-form"]}
        >
          <button className={styles["button"]}></button>
        </form>
      </dialog>
    </div>
  );
};

export default Dialog;
