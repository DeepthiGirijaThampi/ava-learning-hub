import NavMenu from "./NavMenu";

export default function Header(){
    return(
        <header>
            <h1 className="main-heading" style={{color:"#3a5a40"}}>Ava's Learning Hub</h1>
            <NavMenu></NavMenu>
        </header>
    )
}