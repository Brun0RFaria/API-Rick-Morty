import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);

    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters((prev) => [...prev, ...data.results]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [page]);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundColor: "#0A1724",
        minHeight: "100vh",
        color: "white",
      }}
    >

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "30px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
          Personagens
        </h1>

        <p style={{ textAlign: "center", marginBottom: "30px", color: "#bdbdbd" }}>
          Explore os personagens do universo Rick and Morty
        </p>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Pesquisar personagem..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "350px",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              fontSize: "16px",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredCharacters.map((character) => (
            <div
              key={character.id}
              style={{
                backgroundColor: "#112233",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <img
                src={character.image}
                alt={character.name}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px" }}>
                <h3>{character.name}</h3>
                <p><strong>Status:</strong> {character.status}</p>
                <p><strong>Espécie:</strong> {character.species}</p>
                <p><strong>Gênero:</strong> {character.gender}</p>
                <p><strong>Origem:</strong> {character.origin.name}</p>
                <p><strong>Localização:</strong> {character.location.name}</p>
              </div>
            </div>
          ))}
        </div>

        {loading && <h2 style={{ textAlign: "center" }}>Carregando...</h2>}

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            onClick={() => setPage(page + 1)}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Carregar mais
          </button>
        </div>

        {!loading && filteredCharacters.length === 0 && (
          <h2 style={{ textAlign: "center" }}>
            Nenhum personagem encontrado.
          </h2>
        )}
      </div>
    </div>
  );
}

export default Characters;