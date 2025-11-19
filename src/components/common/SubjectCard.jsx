// import CustomButton from "./CustomButton";
import { Link } from "react-router";

export default function SubjectCard({subject}){
    return(
        <div className="subject-card">
            <h3>{subject.name}</h3>
            <p>{subject.description}</p>
            <Link to={`/units/${subject.id}`} state={{subject}}>Go to Units</Link>
        </div>
    )
}