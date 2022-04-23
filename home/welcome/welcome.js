function GetPokemon() {
  let pokemonNumber = Math.floor(Math.random() * 300) + 1;

  let url = "https://pokeapi.co/api/v2/pokemon/" + pokemonNumber;

  fetch(url)
    .then((res) => res.json())
    .then((out) => {
      let pokemonImage = out.sprites.other.dream_world.front_default;
      let pokemonName = out.name;
      let pokemonTypes = out.types;

      let pokemonImage1 = out.sprites.front_default;
      let pokemonImage2 = out.sprites.front_shiny;
      let pokemonImage3 = out.sprites.back_default;
      let pokemonImage4 = out.sprites.back_shiny;

      let pokemonNameFormat =
        pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

      document.getElementById("ImagePokemon").src = pokemonImage;
      document.getElementById("NamePokemon01").innerHTML = pokemonNameFormat;

      document.getElementById("PokemonImageFrontDefault").src = pokemonImage1;
      document.getElementById("PokemonImageFrontShiny").src = pokemonImage2;
      document.getElementById("PokemonImageBackDefault").src = pokemonImage3;
      document.getElementById("PokemonImageBackShiny").src = pokemonImage4;

      let PokeType =
        pokemonTypes[0].type.name.charAt(0).toUpperCase() +
        pokemonTypes[0].type.name.slice(1);

      let type1 = "";
      let type2 = "";

      if (pokemonTypes > 1) {
        type1 = pokemonTypes[0].type.name;
        type2 = pokemonTypes[1].type.name;
      } else {
        type1 = pokemonTypes[0].type.name;
        type2 = pokemonTypes[0].type.name;
        1;
      }

      document.getElementById("Type1").src = SetImage(type1);
      document.getElementById("Type2").src = SetImage(type2);

      let colortype = SetColor(PokeType);

      document.getElementById("PokemonImageCard").style.backgroundColor =
        colortype;
      document.getElementById("PokemonLabel").style.color = colortype;
      document.getElementById("NamePokemon01").style.color = colortype;

      var xValues = ["hp", "atk", "dfn", "s-attk", "s-dfn", "spd"];
      var yValues = [
        out.stats[0].base_stat,
        out.stats[1].base_stat,
        out.stats[2].base_stat,
        out.stats[3].base_stat,
        out.stats[4].base_stat,
        out.stats[5].base_stat,
      ];

      new Chart("myChart", {
        type: "line",
        data: {
          labels: xValues,
          datasets: [
            {
              fill: false,
              lineTension: 0,
              backgroundColor: "rgba(0,0,255,1.0)",
              borderColor: "rgba(0,0,255,0.1)",
              data: yValues,
            },
          ],
        },
        options: {
          legend: { display: false },
        },
      });
    })

    .catch((err) => console.log("error", err));
}

function OpenPage() {
  window.open("./home.html", "_self");
}

function SetColor(name) {
  switch (name) {
    case "Bug":
      return "#92bc2c";
    case "Dark":
      return "#595761";
    case "Dragon":
      return "#0c69c8";
    case "Electric":
      return "#f2d94e";
    case "Fairy":
      return "#ee90e6";
    case "Fighting":
      return "#d3425f";
    case "Fire":
      return "#fba54c";
    case "Flying":
      return "#a1bbec";
    case "Ghost":
      return "#5f6dbc";
    case "Grass":
      return "#5fbd58";
    case "Ground":
      return "#da7c4d";
    case "Ice":
      return "#75d0c1";
    case "Normal":
      return "#a0a29f";
    case "Poison":
      return "#b763cf";
    case "Psychic":
      return "#fa8581";
    case "Rock":
      return "#c9bb8a";
    case "Steel":
      return "#5695a3";
    case "Water":
      return "#539ddf";
    default:
      return "";
  }
}

const SetImage = (name) => {
  switch (name) {
    case "bug":
      return "./resources/icons/bug.svg";
    case "dark":
      return "./resources/icons/dark.svg";
    case "dragon":
      return "./resources/icons/dargon.svg";
    case "electric":
      return "./resources/icons/electric.svg";
    case "fairy":
      return "./resources/icons/fairy.svg";
    case "fighting":
      return "./resources/icons/fighting.svg";
    case "fire":
      return "./resources/icons/fire.svg";
    case "flying":
      return "./resources/icons/flying.svg";
    case "ghost":
      return "./resources/icons/ghost.svg";
    case "grass":
      return "./resources/icons/grass.svg";
    case "ground":
      return "./resources/icons/ground.svg";
    case "ice":
      return "./resources/icons/ice.svg";
    case "normal":
      return "./resources/icons/normal.svg";
    case "poison":
      return "./resources/icons/poison.svg";
    case "psychic":
      return "./resources/icons/psychic.svg";
    case "rock":
      return "./resources/icons/rock.svg";
    case "steel":
      return "./resources/icons/steel.svg";
    case "water":
      return "./resources/icons/water.svg";
  }
};
