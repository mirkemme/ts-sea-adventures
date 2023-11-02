import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// icons
import { LuSailboat } from "react-icons/lu";
import {
  BsArrowLeftSquareFill,
  BsArrowDown,
  BsBookmark,
  BsBookmarkFill,
} from "react-icons/bs";
// style
import styles from "./index.module.scss";
// components
import IconButton from "../../components/iconButton";
import Dialog from "../../components/dialog";
// interfaces
import { ICardProps } from "../../interfaces/IProps";
// functions
import { formatTime } from "../../utils/fn/formatTime";
import { formatDate } from "../../utils/fn/formatDate";
import { fade } from "../../utils/fn/fade";
// constants
import { API_BASE_URL } from "..";
const COUNT_FADE_TIMEOUT_MS = 100;
const DIALOG_MODAL_FADE_TIMEOUT_MS = 2000;

export default function Tour({ data }: ICardProps) {
  const router = useRouter();
  const [count, setCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(data.budget.value);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isReservationAvailable, setIsReservationAvailable] = useState<boolean>(true);
  const [isFade, setIsFade] = useState<boolean>(true);

  function openModalDialog() {
    setIsDialogOpen((prev) => !prev);
    fade({timeout_ms: DIALOG_MODAL_FADE_TIMEOUT_MS, callback: setIsDialogOpen});
  }

  function fadeEffect() {
    setIsFade((prev) => !prev);
    fade({timeout_ms: COUNT_FADE_TIMEOUT_MS, callback: setIsFade});
  } 

  useEffect(() => {
    count === data.reservationsAvailable ? setIsReservationAvailable(false) : setIsReservationAvailable(true)
  }, [count])

  const onHandleBack = () => router.back();
  const onHandleBookmark = () => {
    setIsBookmarked((prev) => !prev);
    openModalDialog();
  };
  const onHandleCount = (op: string) => {
    fadeEffect();
    if (op === "plus" && count < data.reservationsAvailable) {
      setCount(count + 1);
      setPrice(price + data.budget.value);
    } else if (op === "minus" && count > 1) {
      setCount(count - 1);
      setPrice(price - data.budget.value);
    }
  };

  return (
    <section className={styles.Tour}>
      {isBookmarked ? (
        <Dialog isDialogOpen={isDialogOpen} label={"Aggiunto ai salvati"} />
      ) : (
        <Dialog isDialogOpen={isDialogOpen} label={"Rimosso dai salvati"} />
      )}

      <header className={styles.Tour__header}>
        <h1 className={styles.Tour__title}>{data?.title}</h1>
        <div className={styles.Tour__header__container}>
          {isBookmarked ? (
            <BsBookmarkFill
              className={`${styles.Tour__bookmarkIcon} ${
                isDialogOpen && styles.Tour__bookmarkIcon_disabled}`}
              onClick={onHandleBookmark}
            />
          ) : (
            <BsBookmark
              className={`${styles.Tour__bookmarkIcon} ${
                isDialogOpen && styles.Tour__bookmarkIcon_disabled}`}
              onClick={onHandleBookmark}
            />
          )}
          <BsArrowLeftSquareFill
            className={styles.Tour__backIcon}
            onClick={onHandleBack}
          />
        </div>
      </header>
      <div className={styles.Tour__gallery}>
        <Swiper
          modules={[Navigation, Pagination]}
          className="mySwiper"
          pagination={{ clickable: true }}
          navigation={true}
        >
          {data?.images?.map((image) => (
            <SwiperSlide key={image?.id}>
              <div className={styles.Tour__gallery__container}>
                <img
                  src={image.url}
                  className={styles.Tour__gallery__image}
                  alt="image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.Tour__details}>
          <p className={`${styles.Tour__price} ${isFade ? styles.Tour__fadeIn : styles.Tour__fadeOut}`}>
            {price}
            {data?.budget?.currencyCode}
          </p>
          <p className={styles.Tour__nDays}>
            {data?.numberOfDays} {data?.numberOfDays === 1 ? "giorno" : "giorni"}
          </p>
        </div>
      </div>
      <div className={styles.Tour__container}>
        <div className={styles.Tour__info}>
          <div className={styles.Tour__info__wrapper}>
            <p className={styles.Tour__reservationsType}>{data.reservationsType}</p>
            <div className={styles.Tour__counter}>
              <div className={styles.Tour__countIcon}>
                <IconButton handleClick={() => onHandleCount("minus")} label={"minus"} count={count} />
              </div>
              <h3 className={`${isFade ? styles.Tour__fadeIn : styles.Tour__fadeOut}`}>{count}</h3>
              <div className={styles.Tour__countIcon}>
                <IconButton handleClick={() => onHandleCount("plus")} label={"plus"} isReservationAvailable={isReservationAvailable}/>
              </div>
            </div>
          </div>
          <div className={styles.Tour__info__wrapper}>
            <p className={styles.Tour__departureText}>Partenza da</p>
            <p className={styles.Tour__departure}>{data?.departure?.Port}</p>
            <div className={styles.Tour__info__container}>
              <div>
                <p className={styles.Tour__date}>
                  {formatDate(data?.departureDate)}{" "}
                  <span>{formatTime(data?.departureDate)}</span>
                </p>
                <p className={styles.Tour__date}>
                  {formatDate(data?.arrivalDate)}{" "}
                  <span>{formatTime(data?.arrivalDate)}</span>
                </p>
              </div>
              <BsArrowDown className={styles.Tour__arrowDownIcon} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Tour__description}>
        <h3>Descrizione</h3>
        <p className={styles.Tour__description__text}>{data?.description}</p>
      </div>
      <div className={styles.Tour__container}>
        <div className={styles.Tour__itinerary}>
          <h3>Itinerario</h3>
          <div className={styles.Tour__stages}>
            <div className={styles.Tour__stages__wrapper}>
              <p className={styles.Tour__stages__stage}>{data?.departure?.Port}</p>
              <LuSailboat className={styles.Tour__boatIcon} />
            </div>
            {data.itinerary.map((stage) => (
              <div className={styles.Tour__stages__wrapper} key={stage?.portCode}>
                <p className={styles.Tour__stages__stage}>{stage?.Port}</p>
                <LuSailboat className={styles.Tour__boatIcon} />
              </div>
            ))}
            <p className={styles.Tour__stages__stage}>{data?.arrival?.Port}</p>
          </div>
        </div>
      </div>
      <div className={styles.Tour__container}>
        <h3>Da sapere</h3>
        <div className={styles.Tour__thingsToKnow}>
          <div className={styles.Tour__wrapper}>
            <h6 className={styles.Tour__text}>disponibilità</h6>
            <p className={styles.Tour__reservationsAvailable}>
              {data?.reservationsAvailable}
            </p>{" "}
          </div>
          <div className={styles.Tour__wrapper}>
            <h6 className={styles.Tour__text}>prenotazioni</h6>
            <p className={styles.Tour__reservations}>{data?.reservations}</p>
          </div>
          <div className={styles.Tour__wrapper}>
            <h6 className={styles.Tour__text}>tipo di prenotazione</h6>
            <p className={styles.Tour__reservationsType}>{data?.reservationsType}</p>
          </div>
          <div className={styles.Tour__wrapper}>
            <h6 className={styles.Tour__text}>tipo di barca</h6>
            <p className={styles.Tour__boatType}>{data?.boatType}</p>
          </div>
          <div className={styles.Tour__wrapper}>
            <h6 className={styles.Tour__text}>valutazione</h6>
            <p className={styles.Tour__ratings}>{data?.ratings}</p>
          </div>
          <div className={styles.Tour__wrapper}>
            <h6 className={styles.Tour__text}>recensioni</h6>
            <p className={styles.Tour__nOfReviews}>{data?.numberOfReviews}</p>
          </div>
        </div>
      </div>
    </section>
  );
}


export async function getServerSideProps(context) {
  const queryId = context.query.id;
  const res = await fetch(`${API_BASE_URL}/${queryId}`);
  const data = await res.json();

  return {
    props: { data },
  };
}
