// Definir la URL de la API de Pokemon
const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=1000";

// traigo la lista de pkmn de la API y agregarlos al selector en la página
fetch(apiUrl)
	.then(response => response.json())
	.then(data => {
		const pokemonList = data.results;
		const pokemonNames = pokemonList.map(pokemon => pokemon.name);
		const pokemonSelectElement = document.getElementById("pokemon-select");

		pokemonNames.forEach(name => {
			const option = document.createElement("option");
			option.textContent = name;
			pokemonSelectElement.appendChild(option);
		});
	})
	.catch(error => console.log(error));