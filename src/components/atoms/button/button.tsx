import { h, ComponentChildren } from "preact";
import styles from "./style.scss";

type ButtonProps = {
  children: ComponentChildren;
};
const Button = ({ children }: ButtonProps) => {
  return <button className={styles.button}>{children}</button>;
};
export default Button;
