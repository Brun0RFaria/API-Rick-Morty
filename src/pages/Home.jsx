import { useState, useEffect } from "react";
import background from "../assets/imagens/imagemfundo.png";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results.slice(0, 3));
      });

    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json())
      .then(async (data) => {
        const episodesData = await Promise.all(
          data.results.slice(0, 3).map(async (episode) => {
            const firstCharacter = await fetch(
              episode.characters[0]
            ).then((res) => res.json());

            return {
              ...episode,
              image: firstCharacter.image,
            };
          })
        );

        setEpisodes(episodesData);
      });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
      }}
    >

      <header
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "330px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <h1>Rick and Morty</h1>
          <p>
            Explore personagens, episódios e locais do universo Rick and Morty.
          </p>
        </div>
      </header>

      <section style={{ marginTop: "30px" }}>
        <h2>Personagens</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          {characters.map((character) => (
            <div
              key={character.id}
              style={{
                flex: 1,
                backgroundColor: "#112233",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <img
                src={character.image}
                alt={character.name}
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <h3>{character.name}</h3>
              <p>{character.status}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>Episódios</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          {episodes.map((episode) => (
            <div
              key={episode.id}
              style={{
                flex: 1,
                backgroundColor: "#112233",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <img
                src={episode.image}
                alt={episode.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />

              <h3>{episode.name}</h3>

              <p>{episode.episode}</p>

              <p>{episode.air_date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;