export default function Footer(){
    let thisYear = new Date().getFullYear();
    return(
        <footer>
        
           <div style={{color:"purple"}}>&copy; {thisYear} Ava's Learning Hub private limited</div>
        </footer>
    )
}