const BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters() {
  const response = await fetch(`${BASE_URL}/character`);

  if (!response.ok) {
    throw new Error("Erro ao buscar personagens");
  }

  const data = await response.json();

  return data.results;
}

export async function getCharacterById(id) {
  const response = await fetch(`${BASE_URL}/character/${id}`);

  if (!response.ok) {
    throw new Error("Personagem não encontrado");
  }

  return await response.json();
}

export async function getEpisodes() {
  const response = await fetch(`${BASE_URL}/episode`);

  if (!response.ok) {
    throw new Error("Erro ao buscar episódios");
  }

  const data = await response.json();

  return data.results;
}

export async function getEpisodeById(id) {
  const response = await fetch(`${BASE_URL}/episode/${id}`);

  if (!response.ok) {
    throw new Error("Episódio não encontrado");
  }

  return await response.json();
}