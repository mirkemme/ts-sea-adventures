import Image from "next/image";
import styles from "./Hero.module.scss";
import heroImage from "../../../public/assets/images/hero.jpeg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__image}>
        <Image src={heroImage} width={1920} height={1279} alt="hero" />
      </div>
      <h2 className={styles.hero__text}>Lorem ipsum dolor sit amet consectetur.</h2>
    </section>
  );
};

export default Hero;
