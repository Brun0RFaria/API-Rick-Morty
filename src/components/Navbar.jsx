import { NavLink } from "react-router-dom";
import logo from "../assets/imagens/rick_and_morty_logo3.png";
import portal from "../assets/imagens/portal_rick.png";

function Navbar() {
  const navStyle = ({ isActive }) => ({
    color: isActive ? "#00ff88" : "white",
    textDecoration: "none",
    fontWeight: isActive ? "bold" : "normal",
    borderBottom: isActive ? "2px solid #00ff88" : "none",
    paddingBottom: "5px",
    transition: "0.3s",
    fontSize: "20px",
  });

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 40px",
        backgroundColor: "#000",
        boxShadow: "0 0 15px rgba(0,255,136,0.3)",
      }}
    >
      <img
        src={portal}
        alt="Portal Rick and Morty"
        style={{
          width: "80px",
          height: "80px",
          objectFit: "contain",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <NavLink to="/" style={navStyle}>
          Home
        </NavLink>

        <NavLink to="/characters" style={navStyle}>
          Personagens
        </NavLink>

        <NavLink to="/episodes" style={navStyle}>
          Episódios
        </NavLink>

        <NavLink to="/about" style={navStyle}>
          Sobre
        </NavLink>
      </div>

      <img
        src={logo}
        alt="Rick and Morty"
        style={{
          height: "70px",
          objectFit: "contain",
        }}
      />
    </nav>
  );
}

export default Navbar;