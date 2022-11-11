import { getAllPokemon } from "./api/pokeAPI";
import { injectPokemonCards } from "./components/pokemonCards";

const closeModalBtn = document.querySelector(".close_modal");
const modal = document.querySelector(".modal");

const closeModal = (e) => {
  modal.style.display = "none";
};

const openModal = (e) => {
  modal.style.display = "block";
};

closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

function startApp() {
  let isLoading = true;
  let pokemon = [];

  const getDetails = async () => {
    const pokemonRes = await getAllPokemon();
    pokemonRes.error
      ? alert("Cannot load data. Please check your connection and try again.")
      : (isLoading = false);
    pokemon = pokemonRes.pokemon.results;
    if (!isLoading) {
      document.querySelector("#loadingBar").remove();
    }
    injectPokemonCards(pokemon);

    const pokemonCards = document.querySelectorAll(".pokemon-card");
    for (const pokemonCard of pokemonCards) {
      pokemonCard.addEventListener("click", openModal);
    }
  };
  getDetails();
}

startApp();
