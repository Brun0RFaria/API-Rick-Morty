import logo from "../assets/imagens/rick_and_morty_logo3.png";

function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "white",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#112233",
          borderRadius: "12px",
          padding: "40px",
          boxShadow: "0 0 15px rgba(0,255,136,0.3)",
          textAlign: "center",
        }}
      >
        <img
          src={logo}
          alt="Rick and Morty"
          style={{
            width: "250px",
            marginBottom: "20px",
          }}
        />

        <h1
          style={{
            color: "#00ff88",
            textShadow: "0 0 10px #00ff88",
            marginBottom: "20px",
          }}
        >
          Sobre o Projeto
        </h1>

        <p
          style={{
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          Este projeto foi desenvolvido para a disciplina de
          Programação Frontend da UNIVAS utilizando React.
        </p>

        <p
          style={{
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          A aplicação consome dados da Rick and Morty API,
          permitindo explorar personagens e episódios da série
          através de uma interface moderna e responsiva.
        </p>

        <hr
          style={{
            margin: "30px 0",
            border: "1px solid #00ff88",
          }}
        />

        <h2 style={{ color: "#00ff88" }}>
          Tecnologias Utilizadas
        </h2>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            lineHeight: "2",
            fontSize: "18px",
          }}
        >
          <li>React</li>
          <li>React Router DOM</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>Rick and Morty API</li>
        </ul>

        <hr
          style={{
            margin: "30px 0",
            border: "1px solid #00ff88",
          }}
        />

        <h2 style={{ color: "#00ff88" }}>
          Desenvolvedores
        </h2>

        <p style={{ fontSize: "18px" }}>
          Bruno Faria
          <br />
          Rian Diniz
        </p>
      </div>
    </div>
  );
}

export default About;