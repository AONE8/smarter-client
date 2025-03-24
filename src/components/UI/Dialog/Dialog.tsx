import { FormEvent, useEffect, useRef } from "react";

import dialogClasses from "./Dialog.module.scss";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

interface DialogProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  temp?: string;
}

const Dialog: React.FC<DialogProps> = ({ children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  const handleCloseDialog = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (dialogRef.current) {
      dialogRef.current.close();
      navigate(-1);
    }
  };

  return (
    <div>
      <dialog ref={dialogRef} className={dialogClasses.dialog}>
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
          className={dialogClasses["dialog-form"]}
        >
          <button className={dialogClasses["button"]}></button>
        </form>
      </dialog>
    </div>
  );
};

export default Dialog;
