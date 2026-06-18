import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function EpisodeDetails() {
  const { id } = useParams();

  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadEpisode() {
      try {
        setLoading(true);

        const response = await fetch(
          `https://rickandmortyapi.com/api/episode/${id}`
        );

        if (!response.ok) {
          throw new Error("Episódio não encontrado.");
        }

        const data = await response.json();

        if (!cancelled) {
          setEpisode(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError("Não foi possível carregar o episódio.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadEpisode();

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#000",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Carregando episódio...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#000",
          color: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "white",
        padding: "40px",
      }}
    >
      <Link
        to="/episodes"
        style={{
          color: "#00ff88",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        ← Voltar para Episódios
      </Link>

      <div
        style={{
          maxWidth: "800px",
          margin: "40px auto",
          backgroundColor: "#112233",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 0 15px rgba(0,255,136,0.3)",
        }}
      >
        <h1
          style={{
            color: "#00ff88",
            textShadow: "0 0 10px #00ff88",
            marginBottom: "25px",
          }}
        >
          {episode.name}
        </h1>

        <p>
          <strong>Código:</strong> {episode.episode}
        </p>

        <p>
          <strong>Data de exibição:</strong> {episode.air_date}
        </p>

        <p>
          <strong>Quantidade de personagens:</strong>{" "}
          {episode.characters.length}
        </p>

        <p>
          <strong>ID:</strong> {episode.id}
        </p>
      </div>
    </div>
  );
}

export default EpisodeDetails;