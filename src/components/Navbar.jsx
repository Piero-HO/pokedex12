import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "20px", display: "flex", gap: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/entities">Entities</Link>
    </nav>
  );
}

export default Navbar;