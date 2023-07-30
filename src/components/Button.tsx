import { ButtonProps } from "../types/ButtonProps"

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>
}
export default Button
