import Section from "../Section";
import rozetkaLogo from "../../../assets/rozetka.png";
import comfyLogo from "../../../assets/comfy.png";
import foxtrotLogo from "../../../assets/foxtrot.png";
import stylusLogo from "../../../assets/stylus.png";
import moyoLogo from "../../../assets/moyo.png";

import classes from "./StoresSection.module.scss";

const logosOfStores = [
  {
    src: rozetkaLogo,
    alt: "Rozetka logo",
  },
  {
    src: comfyLogo,
    alt: "Comfy logo",
  },
  {
    src: foxtrotLogo,
    alt: "Foxtrot logo",
  },
  {
    src: stylusLogo,
    alt: "Stylus logo",
  },
  {
    src: moyoLogo,
    alt: "MOYO logo",
  },
];

export default function StoresSection() {
  return (
    <Section id="stores" headling="МАГАЗИНИ" className={classes["stores"]}>
      {logosOfStores.map((logo) => (
        <img className={classes.logo} key={logo.src} {...logo} />
      ))}
    </Section>
  );
}
