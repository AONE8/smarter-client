import { useState } from "react";
import {
  Navigate,
  Outlet,
  useFetcher,
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

import { type UserLoaderData } from "@/types/loaderTypes/UserLoaderData.type";

import Header from "@/components/UserComponents/Header/Header";
import Aside from "@/components/UserComponents/Aside/Aside";
import DialogModule from "@/components/UserComponents/DIalog/DialogModule";
import Loader from "@/components/UI/Loader/Loader";
import UserNav from "@/components/UI/UserNav/UserNav";

import styles from "./UserPageLayout.module.scss";

const UserPageLayout = () => {
  const [isEditingForm, setIsEditingForm] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [asideVisible, setAsideVisible] = useState(false);

  const [deviceQuery] = useSearchParams();
  const updateFetcher = useFetcher({ key: "update-user" });

  const loaderData = useLoaderData() as UserLoaderData;
  const navigator = useNavigation();

  const device = deviceQuery.get("device");

  const isLoading = navigator.state === "loading";
  const isSubmitting = navigator.state === "submitting";
  const IsUpdating = updateFetcher.state === "submitting";

  if (!loaderData) {
    return <Navigate to="/login" />;
  }

  if (isLoading && isSubmitting) {
    return <Loader />;
  }

  return (
    <div className={styles.body}>
      {IsUpdating && <Loader />}
      <Header
        username={loaderData.username}
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
        setAsideVisble={setAsideVisible}
      />
      <AnimatePresence>
        {menuVisible && (
          <motion.div
            className={styles["nav-menu"]}
            initial={{ y: "-10%" }}
            animate={{ y: 0 }}
            exit={{ y: "-10%", transitionDuration: 0.1 }}
            transition={{ duration: 0.3 }}
          >
            <UserNav />
          </motion.div>
        )}
      </AnimatePresence>
      {isLoading && isSubmitting && <Loader />}
      {device && <DialogModule deviceForm={loaderData.deviceFormData!} />}

      <Outlet />
      <Aside
        username={loaderData.username}
        email={loaderData.email}
        {...{ isEditingForm, setIsEditingForm }}
        updateFetcher={updateFetcher}
        active={asideVisible}
        onDisactive={() => setAsideVisible((prev) => !prev)}
      />
    </div>
  );
};

export default UserPageLayout;
