(() => {
  // src/api/pokeAPI.js
  var ENDPOINT_PREFIX = "https://pokeapi.co/api/v2";
  var ENDPOINT_SPECIES = "/pokemon-species";
  var getAllPokemon = async (limit = 151, offset = 0) => {
    let res = await fetch(
      `${ENDPOINT_PREFIX}${ENDPOINT_SPECIES}/?limit=${limit}&offset=${offset}, `
    );
    if (res.ok) {
      return {
        pokemon: await res.json(),
        error: false
      };
    } else {
      return {
        pokemon: [],
        error: true
      };
    }
  };

  // src/components/pokemonCards.js
  var createPokemonCard = (id, name) => {
    const pokemonCardImg = Object.assign(document.createElement("img"), {
      src: `//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      alt: `${name}`,
      loading: "lazy"
    });
    const pokemonCardName = Object.assign(document.createElement("p"), {
      innerText: `${name}`
    });
    const pokemonCardContent = Object.assign(document.createElement("div"), {
      classList: ["pokemon-card_content"]
    });
    appendChildren(pokemonCardContent, [pokemonCardImg, pokemonCardName]);
    const pokemonCardAnchor = Object.assign(document.createElement("div"), {
      classList: ["pokemon-card__cont"],
      child: pokemonCardContent
    });
    pokemonCardAnchor.appendChild(pokemonCardContent);
    const pokemonCard = Object.assign(document.createElement("div"), {
      classList: ["pokemon-card"],
      child: pokemonCardAnchor
    });
    pokemonCard.appendChild(pokemonCardAnchor);
    return pokemonCard;
  };
  var appendChildren = (parent, children) => {
    for (const child of children) {
      parent.appendChild(child);
    }
  };
  var injectPokemonCards = (pokemon) => {
    const main = document.querySelector("main");
    let children = [];
    for (let i = 0; i < pokemon.length; i++) {
      const id = i + 1;
      const name = pokemon[i].name;
      children = [...children, createPokemonCard(id, name)];
    }
    appendChildren(main, children);
  };

  // src/main.js
  var closeModalBtn = document.querySelector(".close_modal");
  var modal = document.querySelector(".modal");
  var closeModal = (e) => {
    modal.style.display = "none";
  };
  var openModal = (e) => {
    modal.style.display = "block";
  };
  closeModalBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", closeModal);
  function startApp() {
    let isLoading = true;
    let pokemon = [];
    const getDetails = async () => {
      const pokemonRes = await getAllPokemon();
      pokemonRes.error ? alert("Cannot load data. Please check your connection and try again.") : isLoading = false;
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
})();
