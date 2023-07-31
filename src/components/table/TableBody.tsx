import { TableProps } from '../../types/TableProps'
import Icons from '../Icons'
import { v4 as uuidv4 } from 'uuid'

const TableBody: React.FC<TableProps> = ({data,icons}) => {
  return (
    <tbody>
      {Array.isArray(data) ? (
        data.map((note) => (
          <tr key={uuidv4()}>
            {Object.values(note).map((value) => (
              <td key={uuidv4()}>{value}</td>
            ))}
            <Icons icons={icons} />
          </tr>
        ))
      ) : (
        <>
          {Object.entries(data).map(([key, value]) => (
            <tr key={uuidv4()}>
              <td>{key}</td>
              <td>{value[0]}</td>
              <td>{value[1]}</td>
            </tr>
          ))}
        </>
      )}
    </tbody>
  )
}
export default TableBody
