require("./main.bundle.css");

const $83fcd1c4bb621d61$var$ENDPOINT_PREFIX = "https://pokeapi.co/api/v2";
const $83fcd1c4bb621d61$var$ENDPOINT_SPECIES = "/pokemon-species";
const $83fcd1c4bb621d61$export$384391c31175cbf6 = async (limit = 151, offset = 0)=>{
    let res = await fetch(`${$83fcd1c4bb621d61$var$ENDPOINT_PREFIX}${$83fcd1c4bb621d61$var$ENDPOINT_SPECIES}/?limit=${limit}&offset=${offset}, `);
    if (res.ok) return {
        pokemon: await res.json(),
        error: false
    };
    else return {
        pokemon: [],
        error: true
    };
};
const $83fcd1c4bb621d61$export$959172f60942d308 = async ()=>{
    let res = await fetch(`${$83fcd1c4bb621d61$var$ENDPOINT_PREFIX}`);
};


const $1aeca18b91bf4036$var$createPokemonCard = (id, name)=>{
    const pokemonCardImg = Object.assign(document.createElement("img"), {
        src: `//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        alt: `${name}`,
        loading: "lazy"
    });
    const pokemonCardName = Object.assign(document.createElement("p"), {
        innerText: `${name}`
    });
    const pokemonCardContent = Object.assign(document.createElement("div"), {
        classList: [
            "pokemon-card_content"
        ]
    });
    $1aeca18b91bf4036$var$appendChildren(pokemonCardContent, [
        pokemonCardImg,
        pokemonCardName
    ]);
    const pokemonCardAnchor = Object.assign(document.createElement("div"), {
        classList: [
            "pokemon-card__cont"
        ],
        child: pokemonCardContent
    });
    pokemonCardAnchor.appendChild(pokemonCardContent);
    const pokemonCard = Object.assign(document.createElement("div"), {
        classList: [
            "pokemon-card"
        ],
        child: pokemonCardAnchor
    });
    pokemonCard.appendChild(pokemonCardAnchor);
    return pokemonCard;
};
const $1aeca18b91bf4036$var$appendChildren = (parent, children)=>{
    for (const child of children)parent.appendChild(child);
};
const $1aeca18b91bf4036$export$375580a850bc0b99 = (pokemon)=>{
    const main = document.querySelector("main");
    let children = [];
    for(let i = 0; i < pokemon.length; i++){
        const id = i + 1;
        const name = pokemon[i].name;
        children = [
            ...children,
            $1aeca18b91bf4036$var$createPokemonCard(id, name)
        ];
    }
    $1aeca18b91bf4036$var$appendChildren(main, children);
};



const $95930220612465e5$var$closeModalBtn = document.querySelector(".close_modal");
const $95930220612465e5$var$modal = document.querySelector(".modal");
const $95930220612465e5$var$closeModal = (e)=>{
    $95930220612465e5$var$modal.style.display = "none";
};
const $95930220612465e5$var$openModal = (e)=>{
    $95930220612465e5$var$modal.style.display = "block";
};
$95930220612465e5$var$closeModalBtn.addEventListener("click", $95930220612465e5$var$closeModal);
$95930220612465e5$var$modal.addEventListener("click", $95930220612465e5$var$closeModal);
function $95930220612465e5$var$startApp() {
    let isLoading = true;
    let pokemon = [];
    const getDetails = async ()=>{
        const pokemonRes = await (0, $83fcd1c4bb621d61$export$384391c31175cbf6)();
        pokemonRes.error ? alert("Cannot load data. Please check your connection and try again.") : isLoading = false;
        pokemon = pokemonRes.pokemon.results;
        if (!isLoading) document.querySelector("#loadingBar").remove();
        (0, $1aeca18b91bf4036$export$375580a850bc0b99)(pokemon);
        const pokemonCards = document.querySelectorAll(".pokemon-card");
        for (const pokemonCard of pokemonCards)pokemonCard.addEventListener("click", $95930220612465e5$var$openModal);
    };
    getDetails();
}
$95930220612465e5$var$startApp();


//# sourceMappingURL=main.bundle.js.map
