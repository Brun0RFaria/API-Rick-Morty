import { Link } from "react-router-dom";
import logo from "../assets/imagens/rick_and_morty_logo3.png";
import portal from "../assets/imagens/portal_rick.png";

function Navbar() {
  return (
    <div
      style={{
        padding: "16px 24px",
        backgroundColor: "#000",
      }}
    >
      <header
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          height: "78px",
          background:
            "linear-gradient(90deg, #050B13 0%, #07131E 50%, #050B13 100%)",
          borderRadius: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 28px",
          boxShadow: "0 0 25px rgba(0,0,0,0.6)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <img
          src={logo}
          alt="Rick and Morty"
          style={{
            height: "145px",    
            paddingTop: "25px",         
            objectFit: "contain",
            display: "block"
          }}
        />

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <Link
            to="/"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Home
          </Link>

          <Link
            to="/characters"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Personagens
          </Link>

          <Link
            to="/episodes"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Episódios
          </Link>

          <Link
            to="/locations"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Locais
          </Link>

          <Link
            to="/about"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Sobre
          </Link>

          <img
          src={portal}
          alt="Portal do rick"
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "50%",
            }}
          />
        </nav>
      </header>
    </div>
  );
}

export default Navbar;