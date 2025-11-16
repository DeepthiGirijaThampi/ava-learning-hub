import { Link } from "react-router";
import { useState } from 'react';

export default function NavMenu(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen)
    };
return(
   <nav className="nav-menu" >
   <button className="hamburger" onClick={toggleMenu}>
   ☰
   </button>
    <div className={`menu-links ${menuOpen ? 'show' :''}`}>
        <Link className="link" to={"/"}>Home  </Link>
        <Link className="link" to={"/about"}>About </Link>
        <Link className="link" to={"/profile"}>Profile </Link>
        <Link className="link" to={"/subjects"}>Subjects </Link>
        <Link className="link" to={"/reflections"}>Reflections </Link>
    </div>
   </nav>  
)
}