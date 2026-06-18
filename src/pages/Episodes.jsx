import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEpisodes } from "../services/rickMortyServices";

function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadEpisodes() {
      try {
        setLoading(true);

        const data = await getEpisodes();

        const episodesWithImages = await Promise.all(
          data.map(async (episode) => {
            const firstCharacter = await fetch(
              episode.characters[0]
            ).then((res) => res.json());

            return {
              ...episode,
              image: firstCharacter.image,
            };
          })
        );

        if (!cancelled) {
          setEpisodes(episodesWithImages);
        }
      } catch (err) {
        if (!cancelled) {
          setError("Não foi possível carregar os episódios.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadEpisodes();

    return () => {
      cancelled = true;
    };
  }, []);

  const filteredEpisodes = episodes.filter((episode) =>
    episode.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <h2
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Carregando episódios...
      </h2>
    );
  }

  if (error) {
    return (
      <h2
        style={{
          color: "red",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        {error}
      </h2>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "white",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#00ff88",
          textShadow: "0 0 10px #00ff88",
        }}
      >
        Episódios
      </h1>

      <input
        type="text"
        placeholder="Buscar episódio..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "25px",
          borderRadius: "8px",
          border: "2px solid #00ff88",
          backgroundColor: "#111",
          color: "white",
          outline: "none",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredEpisodes.map((episode) => (
          <Link
            key={episode.id}
            to={`/episodes/${episode.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                backgroundColor: "#112233",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 0 10px rgba(0,255,136,0.2)",
                transition: "0.3s",
              }}
            >
              <img
                src={episode.image}
                alt={episode.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px" }}>
                <h3>{episode.name}</h3>

                <p>
                  <strong>Código:</strong> {episode.episode}
                </p>

                <p>
                  <strong>Data:</strong> {episode.air_date}
                </p>

                <p>
                  <strong>Personagens:</strong>{" "}
                  {episode.characters.length}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Episodes;