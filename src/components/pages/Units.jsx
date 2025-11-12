import CustomButton from "../common/CustomButton";

export default function Units(){
    function handleAddUnit(){
        console.log("Added Unit")
    }
    return(
        <main className="page-container">
             <h1 className="page-heading">Units Page</h1>
             {/* Step 1: Add Unit Button */}
             <div style={{ textAlign: "center", margin: "1rem" }}>
              <CustomButton text="Add Unit" onClick={handleAddUnit}/>
             </div>
             {/* Step 2: Placeholder if no units */}
             <p style={{ textAlign: "center", color: "gray" }}>
                 No units added yet.
             </p>

             {/* Step 3: Link back to Subjects */}
             <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <a href="/subjects" className="link"> 🔙 Back to Subjects</a>
             </div>

        </main>
    )
}