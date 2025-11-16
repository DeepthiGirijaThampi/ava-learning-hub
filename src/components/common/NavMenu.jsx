import { Link } from "react-router";
import { useState } from 'react';

export default function NavMenu(){
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  };
    return(
    <nav className="nav-menu">
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`menu-links ${menuOpen ? 'show' : ''}`}>
        <Link className="link" id="links" to="/" onClick={() => setMenuOpen(false)} >Home  </Link>
        <Link className="link" id="links" to="/about" onClick={() => setMenuOpen(false)} >About  </Link>
        <Link className="link" id="links" to="/profile" onClick={() => setMenuOpen(false)} >Profile  </Link>
        <Link className="link" id="links" to="/reflections" onClick={() => setMenuOpen(false)} >Reflections  </Link>
        <Link className="link" id="links" to="/subjects" onClick={() => setMenuOpen(false)} >Subjects  </Link>
      </div>
    </nav>
    )
}