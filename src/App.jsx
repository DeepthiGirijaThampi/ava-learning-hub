import { Routes, Route } from "react-router";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Profile from "./components/pages/Profile";
function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App
