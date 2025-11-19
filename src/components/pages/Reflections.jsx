import { useEffect, useState } from "react";
import CustomButton from "../common/CustomButton";
import './learning.css';
import './reflections.css';
export default function Reflections(){
    //Load saved reflections from localStorage
    const loadReflections = ()=> {
        const saved = localStorage.getItem('reflections');
        return saved ? JSON.parse(saved) : [];
    }
     //Load the subjects from localStorage
     const loadSubjects = () =>{
        const saved = localStorage.getItem('subjects');
        return saved ? JSON.parse(saved) : [];
    }
    //useState hook for show form
    const [showForm,setShowForm] = useState(false);
    //hook for loadreflections
    const [reflections, setReflections] = useState(loadReflections);
    //usestate for text
    const [text, setText] = useState('');
    //usestate foe subject
    const [subject, setSubject] = useState('');
    //usestate foe subject list
    const [subjectList, setSubjectList] = useState(loadSubjects); 

    //save reflections in local storage when changed 
    useEffect(()=>{
        localStorage.setItem('reflections',JSON.stringify(reflections));
    },[reflections])

    //function handleAddReflections
    function handleAddReflections(e){
        console.log("Added Reflections");
        e.preventDefault();
        const newReflection = {
            id : Date.now(),
            text,
            subject,
            date : new Date().toLocaleDateString()
        };
        setReflections([...reflections,newReflection]);
        setText('');
        setSubject('');
        setShowForm(false);
    }
    //handler for deleting reflections
    const handleDeleteReflection = (id)=>{
        const updatedReflection = reflections.filter(reflection => reflection.id !== id);
        setReflections(updatedReflection);
    }
    //rendering
    return(
      
        <main className="page-container">
        <h1 className="page-heading">Reflections</h1>
        <p style={{textAlign:"center"}}>
            Write your thoughts about what you learned today ✍
        </p>
        {/* show a text box  or so and dropdown to write/select the reflection */}
        {/* save the entry to localStoragenin before rendering part */}
        {/* diaplay saved reflections  */}
        {/* show form when reflection is clicked so need to call handleAddReflections in the form onSubmit and on onClick of button need to add a set function for showing the form*/}
        {showForm && (
            <form className="reflections-form" onSubmit={handleAddReflections}>
                <textarea 
                    rows={4}
                    placeholder='Your thoughts'
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    required
                /><br></br>
                <select value={subject} onChange={e=>setSubject(e.target.value)}>
                    <option value={""}>--Optional : Select Subject--</option>
                    {subjectList.map((sub)=>(
                        <option key={sub.id} value={sub.name}>{sub.name}</option>
                    ))
                    }
                </select><br/>
                <CustomButton text="Save Reflection" type = "submit"/>
            </form>
        )

        }
        {/* Add Reflection Button only when form is hidden */}
        {!showForm && (
            <div style={{textAlign:"center"}}>
            <CustomButton text="Add Reflections" onClick={()=>setShowForm(true)}/>
            </div>
        )
            
        }
       <div className="reflections-container">
        {reflections.length === 0 ? 
        (<div style={{textAlign:"center",margin:"1rem",color:"gray"}}>
            <p>No reflections yet...</p>
        </div>)
        :
        (reflections.map((reflection)=>(
        <div className="reflection-display" key={reflection.id}>
          
            <div className="h3-div">
            <h3 className="h3-sub">{reflection.subject}</h3>
            </div>
            <div className="reflect-div">
            <p className="reflect-p">{reflection.text}</p>
            <small>{reflection.date}</small><br></br>
            <br></br>
            <CustomButton className="btn" text="Delete" onClick={()=>handleDeleteReflection(reflection.id)}/>
            </div>
        </div>
        )))}
      </div> 
        </main>
      
    )
}