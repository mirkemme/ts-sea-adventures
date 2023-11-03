import { useRouter } from "next/router";
import Image from "next/image";
import { formatTime } from "../../utils/fn/formatTime";
import { formatDate } from "../../utils/fn/formatDate";
import styles from "./Card.module.scss";
import arrowIcon from "../../../public/assets/icons/right-arrow-alt.svg";
import Button from "../button";
import { ICardProps } from "../../interfaces/IComponentsProps";

const Card = ({ data }: ICardProps) => {
  const router = useRouter();
  const onHandleClick = (id: number) => router.push(`/${id}`);

  return (
    <div className={styles.Card}>
      <p className={styles.Card__price}>
        <span>
          {data.budget.value}
          {data.budget.currencyCode}
        </span>{" "}
        {data.budget.costType}
      </p>
      <h2 className={styles.Card__locality}>{data.title}</h2>
      <div className={styles.Card__container}>
        <div className={styles.Card__wrapper}>
          <h4 className={styles.Card__departure}>partenza da</h4>
          <h3 className={styles.Card__departureLocality}>{data.departure.Port}</h3>
        </div>
        <div className={styles.Card__wrapperRight}>
          <p className={styles.Card__boat}>{data.boatType}</p>
          <p className={styles.Card__duration}>{data.numberOfDays} giorni</p>
        </div>
      </div>
      <div className={styles.Card__container}>
        <div className={styles.Card__wrapper}>
          <p className={styles.Card__date}>{formatDate(data.departureDate)}</p>
          <p className={styles.Card__time}>{formatTime(data.departureDate)}</p>
        </div>
        <div className={styles.Card__arrowIcon}>
          <Image src={arrowIcon} width={30} height={30} alt="arrow" />
        </div>
        <div className={styles.Card__wrapperRight}>
          <p className={styles.Card__date}>{formatDate(data.arrivalDate)}</p>
          <p className={styles.Card__time}>{formatTime(data.arrivalDate)}</p>
        </div>
      </div>
      <div className={styles.Card__wrapper}>
        <p className={styles.Card__cabins}>
          {data.reservations} {data.reservationsType}
        </p>
        <p className={styles.Card__availability}>
          Disponibilità <span>{data.reservationsAvailable}</span>
        </p>
      </div>
      <Button handleClick={() => onHandleClick(data.id)} label={"prenota"} />
    </div>
  );
};

export default Card;
