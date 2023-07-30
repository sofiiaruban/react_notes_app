

//import unarchivedIcon from '../../assets/unarchive_icon.png'

import { IconsProps } from "../types/IconsProps";

const Icons: React.FC<IconsProps> = ({ icons }) => {
  return (
    <>
      {icons ? icons.map((icon, index) => (
        <td>
          <img key={index} src={icon} alt={`Icon ${index}`} />
        </td>
      )): null}
    </>
  )
}
export default Icons;
