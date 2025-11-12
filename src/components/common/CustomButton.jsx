export default function CustomButton({text,onClick}){
    return(
        <button className="add-btn" onClick={onClick}>{text}</button>
    );
}