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
      <div className={styles.CardList__container}>
      {data.slice(0, show).map((item: CardData) => (
        <Card data={item} key={item.id} />
        ))}
      </div>
      {isButtonVisible && data.length > show &&  <Button handleClick={onHandleClick} label={"Show more"} />}
    </section>
  );
};

export default CardList;
