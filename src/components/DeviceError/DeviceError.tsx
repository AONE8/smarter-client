import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import styles from "./DeviceError.module.scss";

const DeviceError = () => {
  const error = useRouteError();

  let errorContent: React.ReactNode = "An unknown error occurred.";

  if (isRouteErrorResponse(error)) {
    const errorData = error.data as { message: string };
    const status = error.status;

    errorContent = (
      <>
        <h2>Error caught!</h2>
        <p>{status}</p>
        <p>Message: {errorData.message}</p>
      </>
    );
  }
  if (error instanceof Error) {
    errorContent = (
      <>
        <h2>Unexpected Error</h2>
        <p>{error.message}</p>
      </>
    );
  }

  return <div className={styles["error-section"]}>{errorContent}</div>;
};

export default DeviceError;
