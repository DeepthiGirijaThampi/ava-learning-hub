import { Routes, Route } from "react-router"
import Home from "./components/pages/Home"

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
