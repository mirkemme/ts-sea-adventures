import { useState } from "react";
import Card from "../card/Card";
import styles from "./CardList.module.scss";
import Button from "../button";
import { CardData } from "../../utils/types/typeCard";
import { ICardListProps } from "../../interfaces/IComponentsProps";

const CardList = ({ data, isButtonVisible = false }: ICardListProps) => {
  const [show, setShow] = useState<number>(8);

  const onHandleClick = () => setShow((prev) => prev + 8);
  return (
    <section className={styles.CardList}>
      {data.slice(0, show).map((item: CardData) => (
        <Card data={item} key={item.id} />
      ))}
      {isButtonVisible && <Button handleClick={onHandleClick} label={"Show more"} />}
    </section>
  );
};

export default CardList;
