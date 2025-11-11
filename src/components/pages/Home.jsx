import { useNavigate ,Link } from "react-router";
export default function Home(){
    return(
        <main className="home-page">
        <div className="welcome">
         <h1 style={{display:"flex",justifyContent:"center",color:"purple"}}>Welcome to Ava’s Learning Hub</h1>
         <p style={{display:"flex",justifyContent:"center", color:"purple"}}>Your personal space to explore, reflect, and grow 🌱</p>
         
         </div>
         <section className="features">
        <Link to={"/subjects"}><div className="feature-card">📚 Track Subjects</div></Link>
        <Link to={"/reflections"}><div className="feature-card">✍ Reflect on Learning</div></Link>
        <Link to={"/profile"}><div className="feature-card">📊 Celebrate Progress</div></Link>
         <div className="feature-card">🌍 Coming soon: multi-user!</div>
        </section>
        <button onClick={() => navigate("/subjects")} className="start-learning-button">Get Started</button>
        </main>
    )
}