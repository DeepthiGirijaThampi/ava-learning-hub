import { Routes, Route, Navigate } from "react-router";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Profile from "./components/pages/Profile";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
function App() {
  

  return (
    <div className="App">
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
