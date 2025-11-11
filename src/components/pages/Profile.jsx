import './profile.css'
export default function Profile(){
    //Placeholder for subject progress data 
    const subjects = [
        {name : "Math", progress: 50},
        {name : "Science", progress: 70},
        {name : "Reading", progress: 85}
    ];
    return(
 
      
        <main>
        <h1 id="profile-header">Profile Page</h1>
      
        <div className="profile-wrapper">
         <section className="profile-left">
         <img src="/src/assets/Cartoonify.png" alt="Ava's Avatar" className='avatar-img' />
         <h2 style={{color:"purple"}}>Avanthika Nair</h2>
         <table className="profile-info-table">
            <tbody>
                <tr>
                    <td><strong>Email : </strong></td>
                    <td>avanthika@gmail.com</td>
                </tr>
                <tr>
                    <td><strong>Grade :</strong></td>
                    <td>7th Grade</td>
                </tr>
                <tr>
                    <td><strong>School :</strong></td>
                    <td>Fort Zumwalt WMS</td>
                </tr>
            </tbody>
         </table>
          <p className='welcome-ptag' style={{color:"purple"}}>
            Welcome back, Ava! Great progress so far!! 🎉 Here's a quick summary of your learning journey.
          </p>
         </section>
         <div className="vertical-divider"></div>
         <section className="profile-right">
             {/* Progress bars for each subject */}
         {subjects.map((subject, index) => (
         <div className='progress-container-div' key={index} style={{ marginBottom: "2rem" }}>
            <h3 className='subject-name-header' style={{color:"purple"}}>{subject.name}</h3>
                <div className='progress-bar-div'>
                <div className='progress-percentage-div'
                style={{
                height: "100%",
                width: `${subject.progress}%`,
                backgroundColor: "mediumorchid",
                transition: "width 0.5s ease-in-out",
                 }}
                ></div>
                </div>
          <p style={{ marginTop: "0.5rem" , color:"purple"}} className='progress-percentage-ptag'>{subject.progress}% complete</p>
        </div>
        ))}
         </section>
        </div>

         

       
        </main>
  
    )
}