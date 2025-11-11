
export default function Profile(){
    //Placeholder for subject progress data 
    const subjects = [
        {name : "Math", progress: 50},
        {name : "Science", progress: 70},
        {name : "Reading", progress: 85}
    ];
    return(
 
      
        <main>
        <h1 style={{display:"flex",justifyContent:"center"}}>Profile Page</h1>
        <p>
        <div
        style={{
            width:"100px",
            height:"100px",
            borderRadius:"50%",
            backgroundColor:"yellow",
            margin: "10px auto",
            display: "flex",
            alignItems:"center",
            justifyContent:"center",
            fontSize:"20px",
            color:"purple"

        }}
        >
          👧 
        Avatar
        </div>

            Welcome back! Here's a quick summary of your learning journey.
        </p>

        {/* progressbars for each subject */}
        {
            subjects.map((subject,index)=>(
                <div key={index} style={{ marginBottom: "2rem" }} > 
                <h3>{subject.name}</h3>
                <div style={{
                    backgroundColor:"gray",
                    width : "50%",
                    height : "20px",
                    borderRadius: "20px",
                    overflow :"hidden",
                    boxShadow:"inset 0 1px 3px gray"
                }}>
                    <div style={{
                        height:"100%",
                        width:`${subject.progress}%`,
                        backgroundColor:"pink",
                    }}></div>
                </div>
                <p>{subject.progress}% complete</p>
                </div>
            ))
        }
        </main>
  
    )
}