import { useEffect, useState } from "react";
import CardList from "../cardList";
import styles from "./Itinerary.module.scss";
import { IDataProps } from "../../interfaces/IProps";
import { CardData } from "../../utils/types/typeCard";

const Itinerary = ({ data }: IDataProps) => {
  const [randomItinerary, setRandomItinerary] = useState<CardData[]>([]);

  function getMultipleRandom(data: CardData[], num: number) {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  useEffect(() => {
    const randomTours: CardData[] = getMultipleRandom(data, 8);
    setRandomItinerary(randomTours);
  }, []);

  return (
    <section className={styles.Itinerary}>
      <h3>Avventure da scoprire</h3>
      <CardList data={randomItinerary} isButtonVisible={false} />
    </section>
  );
};

export default Itinerary;
