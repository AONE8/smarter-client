import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AboutSection from "../../components/Section/AboutSection/AboutSection";
import CtaSection from "../../components/Section/CtaSection/CtaSection";
import StepsSection from "../../components/Section/StepsSection/StepsSection";
import StoresSection from "../../components/Section/StoresSection/StoresSection";

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <AboutSection />
        <StepsSection />
        <StoresSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
