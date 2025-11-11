export default function Reflections(){
    return(
      
        <main>
        <h1 style={{display:"flex",justifyContent:"center"}}>Reflections Page</h1>
        <p style={{textAlign:"center"}}>
            Write your thoughts about what you learned today ✍
        </p>
        {/* placeholder for reflection entries*/ }
        <div style={{textAlign:"center",margin:"1rem",color:"gray"}}>
            <p>No reflections yet...</p>
        </div>
        <div style={{textAlign:"center"}}>
            <button>Add Reflections</button>
        </div>
        </main>
      
    )
}