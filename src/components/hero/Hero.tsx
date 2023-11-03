import Image from "next/image";
import styles from "./Hero.module.scss";
import heroImage from "../../../public/assets/images/hero.jpeg";
import { IHeroProps } from "../../interfaces/IComponentsProps";

const Hero = ({title, subtitle}: IHeroProps) => {
  return (
    <section className={styles.Hero}>
      <div className={styles.Hero__image}>
        <Image src={heroImage} width={1920} height={1279} alt="hero" />
      </div>
      <div className={styles.Hero__text}>
      <h1 className={styles.Hero__title}>{title} <hr /> </h1>
      <h3 className={styles.Hero__subtitle}>{subtitle}</h3>
      </div>
    </section>
  );
};

export default Hero;
