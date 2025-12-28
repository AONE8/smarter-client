import { useActionData, useRouteError } from "react-router-dom";

import { type ResultActionData } from "@/types/actionTypes/ResultActionData.type";

import GoLink from "@/components/UI/GoLink/GoLink";
import { useLanguageContext } from "@/store/langContext";

import { title } from "@/contens/result";
import { goBtnLabel } from "@/contens/history";

import styles from "./Result.module.scss";

const Result = () => {
  const actionData = useActionData() as ResultActionData;
  const error = useRouteError() as {
    message: string;
  };
  const lang = useLanguageContext().language;

  if (error) return <p>{error.message}</p>;

  return (
    <main className={styles["main"]}>
      <h1 className={styles["title"]}> {title[lang]} </h1>
      <section className={styles["products-section"]}>
        <article className={styles["product-card"]}>
          <div className={styles["img-container"]}>
            <a href={actionData.productURL} target="_blank">
              <img src={actionData.imgURL} alt={actionData.name} />
            </a>
          </div>
          <div className={styles["info-container"]}>
            <h2>{actionData.name}</h2>
            <p>
              {actionData.price.toLocaleString(lang === "en" ? "en-US" : "uk")}{" "}
              ₴
            </p>
            <p>{actionData.vendor}</p>
            <p className={styles["btn-container"]}>
              <GoLink url={actionData.productURL}> {goBtnLabel[lang]}</GoLink>
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Result;
