import CustomButton from "../common/CustomButton";
import './learning.css';
export default function Reflections(){
    function handleAddReflections(){
        console.log("Added Reflections");
    }
    return(
      
        <main className="page-container">
        <h1 className="page-heading">Reflections Page</h1>
        <p style={{textAlign:"center"}}>
            Write your thoughts about what you learned today ✍
        </p>
        {/* placeholder for reflection entries*/ }
        <div style={{textAlign:"center",margin:"1rem",color:"gray"}}>
            <p>No reflections yet...</p>
        </div>
        <div style={{textAlign:"center"}}>
            <CustomButton text="Add Reflections" onClick={handleAddReflections}/>
        </div>
        </main>
      
    )
}