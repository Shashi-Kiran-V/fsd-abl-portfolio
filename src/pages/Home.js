import { motion } from "framer-motion";
import me from "../assets/myimage2.jpg";

function Home() {
  return (
    <motion.div
      className="glass"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: "center" }}
    >
      <img 
        src={me} 
        alt="me" 
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          border: "4px solid #00eaff",
          objectFit: "cover",
        }}
      />

      <h1 style={{ fontSize: "40px", marginTop: "20px" }}>Hey, I'm Shashi 👋</h1>
      <p style={{ fontSize: "22px", marginTop: "10px", opacity: 0.9 }}>
        Full Stack Developer • MERN • AI/ML • Cloud • Automation
      </p>
    </motion.div>
  );
}

export default Home;
