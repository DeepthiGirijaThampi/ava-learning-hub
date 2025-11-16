import { Link } from "react-router";
import CustomButton from "../common/CustomButton";
import './learning.css';
import { useEffect, useState } from "react";
import SubjectCard from "../common/SubjectCard";
export default function Subjects(){
    //load the subjects from local storage 
    const loadSubjects = ()=>{
        const saved = localStorage.getItem('subjects');
        return saved ? JSON.parse(saved) : [];
    }


    //add useState for setting subjects 
    const [subjects,setSubjects] = useState(loadSubjects); // subjects info
    const [subjectName,setSubjectName] = useState("") // subject name
    const [subjectDescription,setSubjectDescription] = useState("") //subject description

    useEffect(()=>{
        localStorage.setItem('subjects',JSON.stringify(subjects))
    },[subjects]);
    function handleAddSubject(e){
        e.preventDefault(); //prevent reaload
        console.log("Added subject"); //needs to be removed
        //create dummy subject for now with an object then set the setSubject with subjects
        const newSubject = {
            id: Date.now(),
            name: subjectName,
            description: subjectDescription
        };

        setSubjects([...subjects,newSubject]);
        setSubjectName("");
        setSubjectDescription("");
    }

    //rendering 
    return(
     
    
        <main className="page-container">
             <h1 className="page-heading" style={{display:"flex",justifyContent:"center"}}> Subjects </h1>
             {/* Step 1: Add Subject Button */}
             {/* <div style={{ textAlign: "center", margin: "1rem" }}>
              <CustomButton text={"Add Subject"} onClick={handleAddSubject}/>
              
             </div> */}
             <form onSubmit={handleAddSubject} className="subject-form">
               {/* <label>Subject Name </label> */}
                <input 
                   
                    value={subjectName}
                    onChange={(e)=> setSubjectName(e.target.value)}
                    placeholder="Subject Name"
                    required
                /> <br/><br/>
                {/* <label>Description </label> */}
                <textarea 
                    value={subjectDescription}
                    onChange={(e)=> setSubjectDescription(e.target.value)}
                    placeholder="Description"
                    required
                /> <br/><br/>
                <CustomButton text={"Add Subject"} type="submit" />
             </form>

            
             
        
            <div className="subjects-container">
                {subjects.length === 0 ?(
                    <p style={{ textAlign: "center", color: "gray" }} >No subjects added yet.</p>
                ):(
                    subjects.map((subject)=>(

                        <SubjectCard key={subject.id} subject={subject}/>
                        
                    ))
                )}
            </div>
        </main>
     
    )
}