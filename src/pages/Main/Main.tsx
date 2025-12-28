import { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AboutSection from "@/components/Section/AboutSection/AboutSection";
import CtaSection from "@/components/Section/CtaSection/CtaSection";
import StepsSection from "@/components/Section/StepsSection/StepsSection";
import StoresSection from "@/components/Section/ManufacturesSection/ManufacturesSection";
import AsideMenu from "@/components/AsideMenu/AsideMenu";
import Loader from "@/components/UI/Loader/Loader";

export default function Main() {
  const [isAsideMenu, setIsAsideMenu] = useState(false);
  const { state } = useNavigation();
  const isLoading = state === "loading" || state === "submitting";

  return (
    <>
      <Header setIsAsideMenu={setIsAsideMenu} />

      {isAsideMenu && <AsideMenu setVisible={setIsAsideMenu} />}

      <main>
        {isLoading && <Loader />}
        {!isLoading && <Outlet />}
        <AboutSection />
        <StepsSection />
        <StoresSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
