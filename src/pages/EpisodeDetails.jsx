import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <h2 style={{ color: "white", textAlign: "center" }}>
        Carregando episódio...
      </h2>
    );
  }

  if (error) {
    return (
      <h2 style={{ color: "red", textAlign: "center" }}>
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
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: "#00ff88",
          textShadow: "0 0 10px #00ff88",
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
    </div>
  );
}

export default EpisodeDetails;