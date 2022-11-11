const createPokemonCard = (id, name) => {
  const pokemonCardImg = Object.assign(document.createElement("img"), {
    src: `//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    alt: `${name}`,
    loading: "lazy",
  });
  const pokemonCardName = Object.assign(document.createElement("p"), {
    innerText: `${name}`,
  });
  const pokemonCardContent = Object.assign(document.createElement("div"), {
    classList: ["pokemon-card_content"],
  });
  appendChildren(pokemonCardContent, [pokemonCardImg, pokemonCardName]);
  const pokemonCardAnchor = Object.assign(document.createElement("div"), {
    classList: ["pokemon-card__cont"],
    child: pokemonCardContent,
  });
  pokemonCardAnchor.appendChild(pokemonCardContent);
  const pokemonCard = Object.assign(document.createElement("div"), {
    classList: ["pokemon-card"],
    child: pokemonCardAnchor,
  });
  pokemonCard.appendChild(pokemonCardAnchor);
  return pokemonCard;
};

const appendChildren = (parent, children) => {
  for (const child of children) {
    parent.appendChild(child);
  }
};

export const injectPokemonCards = (pokemon) => {
  const main = document.querySelector("main");
  let children = [];
  for (let i = 0; i < pokemon.length; i++) {
    const id = i + 1;
    const name = pokemon[i].name;
    children = [...children, createPokemonCard(id, name)];
  }
  appendChildren(main, children);
};
