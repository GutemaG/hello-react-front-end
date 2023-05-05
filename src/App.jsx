import {Route, Routes} from "react-router-dom"
import Greeting from "./components/Greeting"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  )
}

export default App
