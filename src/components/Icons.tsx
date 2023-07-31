
import { IconsProps } from "../types/IconsProps";

const Icons: React.FC<IconsProps> = ({ icons, click }) => {

  return (
    <>
      {icons && click && icons.length === click.length
        ? icons.map((icon, index) => (
            <td key={index}>
              <img
                src={icon}
                alt={`Icon ${index}`}
                onClick={click[index] ? click[index] : undefined}
              />
            </td>
          ))
        : null}
    </>
  )
}
export default Icons;
