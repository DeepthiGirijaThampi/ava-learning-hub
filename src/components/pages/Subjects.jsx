import { Link } from "react-router";
import './learning.css';
import CustomButton from "../common/CustomButton";
export default function Subjects(){
    function handleAddSubject(){
        console.log("Added Subject");
    }
    return(
     
        <main className="page-container">
        <h1 className="page-heading" style={{display:"flex",justifyContent:"center"}}>Subjects Page</h1>
             {/* Step 1: Add Subject Button */}
             <div style={{ textAlign: "center", margin: "1rem" }}>
              <CustomButton text={"Add Subject"} onClick={handleAddSubject}/>
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