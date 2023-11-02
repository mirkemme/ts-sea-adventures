import Image from "next/image";
import styles from "./Banner.module.scss";
import bannerImage from "../../../public/assets/images/banner.jpeg";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.banner__image}>
        <Image src={bannerImage} width={1920} height={1279} alt="banner" />
      </div>
      <div className={styles.banner__text}>
        <div className={styles.banner__text__wrapper}>
          <h2 className={styles.banner__firstText}>+20</h2>
          <h2 className={styles.banner__firstText}>Destinazioni</h2>
        </div>
        <div className={styles.banner__text__wrapper}>
          <h2 className={styles.banner__secondText}>+15</h2>
          <h2 className={styles.banner__secondText}>Imbarcazioni</h2>
        </div>
        <div className={styles.banner__text__wrapper}>
          <h2 className={styles.banner__thirdText}>+40</h2>
          <h2 className={styles.banner__thirdText}>Itinerari</h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
