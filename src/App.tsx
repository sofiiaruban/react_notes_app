import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import NotePage from './pages/NotePage'
function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/note" element={<NotePage />} />
          <Route path="/note/:id"></Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
