import styles from "./Button.module.scss";
import { IButtonProps } from "../../interfaces/IComponentsProps";

const Button = ({ handleClick, label }: IButtonProps) => {
  return (
    <button className={styles.Button} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
