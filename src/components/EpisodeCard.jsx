function EpisodeCard({ episode }) {
  return (
    <div
      style={{
        backgroundColor: "#112233",
        borderRadius: "10px",
        overflow: "hidden",
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
        <p>{episode.episode}</p>
      </div>
    </div>
  );
}

export default EpisodeCard;