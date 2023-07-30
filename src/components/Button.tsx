import { ButtonProps } from "../types/ButtonProps"
import styles from "./Button.module.css"

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick} className={styles.button}>{children}</button>
}
export default Button
