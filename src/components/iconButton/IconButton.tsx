import { IButtonProps } from "../../interfaces/IProps";
import { LuPlusSquare, LuMinusSquare } from "react-icons/lu";
import styles from "./IconButton.module.scss";

const IconButton = ({ handleClick, label, isReservationAvailable, count }: IButtonProps) => {
  return (
    <>
      {label === "plus" ? (
        <LuPlusSquare onClick={handleClick} className={`${styles.IconButton} ${!isReservationAvailable && styles.IconButton_disabled }`} />
      ) : (
        <LuMinusSquare onClick={handleClick} className={`${styles.IconButton} ${(count === 1) && styles.IconButton_disabled }`}/>
      )}
    </>
  );
};

export default IconButton;
 