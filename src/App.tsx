import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/"></Route>
          <Route path="/note"></Route>
          <Route path="/note/:id"></Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
