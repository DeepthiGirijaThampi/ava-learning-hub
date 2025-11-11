import { Link } from "react-router";
export default function Subjects(){
    return(
     
        <main>
        <h1 style={{display:"flex",justifyContent:"center"}}>Subjects Page</h1>
             {/* Step 1: Add Subject Button */}
             <div style={{ textAlign: "center", margin: "1rem" }}>
              <button>Add Subject</button>
             </div>

             <p style={{textAlign:"center"}}>Choose a Subject</p>
             
              {/* Step 2: Placeholder for subjects */}
            <div style={{ textAlign: "center", color: "gray" }}>
            <p>No subjects added yet.</p>
            </div>
            {/* Step 3: Link to Units Page */}
            <div style={{ textAlign: "center" }}>
            <Link className="link" to={"/units"}>Go to Units</Link>
            </div>
        </main>
   
    )
}