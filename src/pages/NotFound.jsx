import { Link } from "react-router-dom";
import portal from "../assets/imagens/portal_rick.png";

function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <img
        src={portal}
        alt="Portal"
        style={{
          width: "180px",
          marginBottom: "20px",
          filter: "drop-shadow(0 0 15px #00ff88)",
        }}
      />

      <h1
        style={{
          fontSize: "5rem",
          margin: 0,
          color: "#00ff88",
          textShadow: "0 0 15px #00ff88",
        }}
      >
        404
      </h1>

      <h2
        style={{
          marginTop: "10px",
          marginBottom: "20px",
        }}
      >
        Página não encontrada
      </h2>

      <p
        style={{
          maxWidth: "500px",
          color: "#ccc",
          marginBottom: "30px",
        }}
      >
        Parece que você entrou em um portal errado e acabou em uma dimensão que
        não existe.
      </p>

      <Link
        to="/"
        style={{
          backgroundColor: "#00ff88",
          color: "#000",
          padding: "12px 24px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Voltar para Home
      </Link>
    </div>
  );
}

export default NotFound;