import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar({ dark, setDark }) {
  return (
    <nav>
      <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>Shashi Portfolio</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>

        <button onClick={() => setDark(!dark)}>
          {dark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
