import './profile.css'
export default function Profile(){
   
    // Get subjects from localStorage (localStorage.getItem('subjects'))
    const storedSubjects = JSON.parse(localStorage.getItem('subjects'))||[];
    console.log("Stored Subjects - Profile Page:", storedSubjects);
    //Get units from localStorage for each subject
    //count total units and completed ones 
    //show in progress bar
    const subjectProgress = storedSubjects.map( (subject)=>{
    const units = JSON.parse(localStorage.getItem(`units-${subject.id}`))||[];
    console.log("Units-> Profile page",units)
    const total = units.length;
    console.log("total = ",total)
    const completed = units.filter(unit => unit.completed).length;
    console.log("Competde units : ",completed);
    const progress = total === 0? 0: Math.round((completed/total)*100);
    console.log(`Progress ->${subject.name}  ${progress}` )
    return{
        ...subject,
        progress
    }
})
   
    return(
        <main>
            <h1 id="profile-header">My Profile</h1>
            
            <div className="profile-wrapper">
                <section className="profile-left">
                <img src="/src/assets/Cartoonify.png" alt="Ava's Avatar" className='avatar-img' />
                <h2 style={{color:"#7BA05B"}}>Avanthika Nair</h2>
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
                <p className='welcome-ptag' >
                Welcome back, Ava! Great progress so far!! 🎉 Here's a quick summary of your learning journey.
                </p>
                </section>
                <div className="vertical-divider"></div>
                <section className="profile-right">
            {/* Progress bars for each subject */}
                {subjectProgress.length === 0 ? (
                <h2 style={{ color: "#7BA05B", fontStyle: "italic", textAlign: "center" }}>
                    <strong> <em> No subjects to display yet. Add a subject to get started!</em></strong> 
                </h2>
                ) : 
                (
                subjectProgress.map((subject, index) => (
                <div className='progress-container-div' key={index} style={{ marginBottom: "2rem" }}>
                <h3 className='subject-name-header'style={{color:"#7BA05B"}}>{subject.name}</h3>
                    <div className='progress-bar-div'>
                    <div className='progress-percentage-div'
                    style={{
                    height: "100%",
                    width: `${subject.progress}%`,
                    backgroundColor: "#7BA05B",
                    transition: "width 0.5s ease-in-out",
                        }}
                    ></div>
                    </div>
                <p style={{ marginTop: "0.5rem" , color:"#7BA05B"}} className='progress-percentage-ptag'>{subject.progress}% complete</p>
                </div>
                )))}
                </section>
            </div>
        </main>
  
    )
}