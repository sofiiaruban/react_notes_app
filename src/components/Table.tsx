import { Note } from "../types/note";

const Table = (notesData: Note[])=> {
  return <table>{JSON.stringify(notesData)}<thead></thead><tbody></tbody></table>
}
export default Table;
