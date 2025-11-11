
export default function Units(){
    return(
        <main>
             <h1 style={{display:"flex",justifyContent:"center"}}>Units Page</h1>
             {/* Step 1: Add Unit Button */}
             <div style={{ textAlign: "center", margin: "1rem" }}>
              <button>Add Unit</button>
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