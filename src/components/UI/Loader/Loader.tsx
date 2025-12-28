import ReactDOM from "react-dom";

import loaderSrc from "@/assets/smarter_load.svg";

import styles from "./Loader.module.scss";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.loader}>
      <img src={loaderSrc} alt={"Smarter's meditation"} />
    </div>,
    document.getElementById("loader")!
  );
};

export default Loader;
