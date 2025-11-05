import { Link } from "react-router";

export default function NavMenu(){
return(
    <div className="nav-menu">
        <Link className="link" to={"/"}>Home | </Link>
        <Link className="link" to={"/about"}>About |</Link>
        <Link className="link" to={"/profile"}>Profile |</Link>
        <Link className="link" to={"/subjects"}>Subjects |</Link>
        <Link className="link" to={"/reflections"}>Reflections </Link>
    </div>
)
}