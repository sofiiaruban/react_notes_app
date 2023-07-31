



import { IconsProps } from "../types/IconsProps";

const Icons: React.FC<IconsProps> = ({ icons }) => {
  return (
    <>
      {icons
        ? icons.map((icon, index) => (
            <td key={index}>
              <img src={icon} alt={`Icon ${index}`} />
            </td>
          ))
        : null}
    </>
  )
}
export default Icons;
