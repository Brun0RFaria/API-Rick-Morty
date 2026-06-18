function CharacterCard({ character }) {
  return (
    <div
      style={{
        backgroundColor: "#112233",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <img
        src={character.image}
        alt={character.name}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "15px" }}>
        <h3>{character.name}</h3>
        <p>{character.status}</p>
      </div>
    </div>
  );
}

export default CharacterCard;