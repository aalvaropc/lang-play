import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { TaskPage } from './pages/TaskPages'
import { TaskFormPage } from './pages/TaskFormPage'
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to = "/tasks" />} />
          <Route path="/task" element={<TaskPage />} />
          <Route path="/tasks-create" element={<TaskFormPage />} />
        </Routes>
      </BrowserRouter> */}
      hola
    </>
  )
}

export default App
