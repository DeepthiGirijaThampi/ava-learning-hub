export default function Footer(){
    let thisYear = new Date().getFullYear();
    return(
        <footer>
        
           <div style={{color:"#3a5a40"}}>&copy; {thisYear} Ava's Learning Hub private limited</div>
        </footer>
    )
}