import { Link } from "react-router";
export default function Subjects(){
    return(
        <>
    
        <main>
             <h1 style={{display:"flex",justifyContent:"center"}}>Subjects Page</h1>
             <Link className="link" to={"/units"}>Units</Link>
        </main>
        </>
    )
}