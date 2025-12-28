import { useFetcher, useLoaderData } from "react-router-dom";

import { type SubmitTarget } from "react-router-dom/dist/dom";
import { type DeviceType } from "@/types/DeviceType.type";

import GoLink from "@/components/UI/GoLink/GoLink";
import Cross from "@/icons/Cross";
import Loader from "@/components/UI/Loader/Loader";

import { useLanguageContext } from "@/store/langContext";
import { emptyHistoryFallback, goBtnLabel, title } from "@/contens/history";

import styles from "./UserHistoryPage.module.scss";

const dateToLocaleString = (date: string, locale: string = "en-US") =>
  new Date(date).toLocaleString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
  });

const priceToLocaleString = (price: number, locale: string = "en-US") =>
  new Intl.NumberFormat(locale, {
    style: "decimal",
  }).format(price);

const UserHistoryPage = () => {
  const deleteFetcher = useFetcher();

  const devices = useLoaderData() as DeviceType[];
  const lang = useLanguageContext().language;

  if (deleteFetcher.state === "submitting") {
    return <Loader />;
  }

  function handleDeleteHistoryItem(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const formDataObj = Object.fromEntries(formData.entries());

    deleteFetcher.submit(formDataObj as SubmitTarget, {
      method: "post",
      action: "/user/history/delete",
      encType: "application/json",
    });
  }

  return (
    <main className={styles["history-section"]}>
      <h1 className={styles["title"]}> {title[lang]} </h1>
      {!devices.length && <p>{emptyHistoryFallback[lang]}</p>}

      {!!devices.length && (
        <ol className={styles["history-list"]}>
          {devices.map((device) => (
            <li className={styles["history-item"]} key={device.id}>
              <div className={styles["img-container"]}>
                <img src={device.image} alt={device.name} />
              </div>
              <h5 className={styles["item-title"]}>{device.name}</h5>
              <p className={styles["item-price"]}>
                {priceToLocaleString(
                  device.price,
                  lang === "uk" ? "uk-UA" : "en-US"
                )}{" "}
                ₴
              </p>
              <time className={styles["item-date"]}>
                {dateToLocaleString(
                  device.createdAt,
                  lang === "uk" ? "uk-UA" : "en-US"
                )}
              </time>
              <div className={`${styles["item-tag"]} ${styles[device.type]}`}>
                {device.type}
              </div>
              <GoLink url={device.url} className={styles["item-link"]}>
                {" "}
                {goBtnLabel[lang]}{" "}
              </GoLink>
              <form
                className={styles["delete-form"]}
                onSubmit={handleDeleteHistoryItem}
              >
                <input type="hidden" name="deviceId" value={device.id} />
                <button>
                  <Cross />
                </button>
              </form>
            </li>
          ))}
        </ol>
      )}
    </main>
  );
};

export default UserHistoryPage;
