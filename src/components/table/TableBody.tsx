import { TableProps } from '../../types/TableProps'

const TableBody: React.FC<TableProps> = ({data}) => {
  return (
    <tbody>
      {Array.isArray(data) ? (
        data.map((note, index) => (
          <tr key={index}>
            {Object.values(note).map((value) => (
              <td>{value}</td>
            ))}
          </tr>
        ))
      ) : (
        <>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key}>
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
