const ENDPOINT_PREFIX = "https://pokeapi.co/api/v2";
const ENDPOINT_SPECIES = "/pokemon-species";

export const getAllPokemon = async (limit = 151, offset = 0) => {
  let res = await fetch(
    `${ENDPOINT_PREFIX}${ENDPOINT_SPECIES}/?limit=${limit}&offset=${offset}, `
  );
  if (res.ok) {
    return {
      pokemon: await res.json(),
      error: false,
    };
  } else {
    return {
      pokemon: [],
      error: true,
    };
  }
};

export const getPokemonByName = async () => {
  let res = await fetch(`${ENDPOINT_PREFIX}`);
};
