const URL = `https://pokeapi.co/api/v2/pokemon/`;
const user = document.querySelector('#user');
const btn = document.querySelector('#pokeBall');
const pokeName = document.getElementById('pokeName');
const power = document.getElementById('power');
const description = document.getElementById('description');
const pokeGif = document.querySelector('#pokeGif');
const icon = document.getElementById('icon')

async function pokeData(id) {
    const response = await fetch(URL + id);
    const data = await response.json();
    fetchPoke(data);

    const speciesResponse = await fetch(data.species.url);
    const speciesData = await speciesResponse.json();
    const descriptionText = speciesData.flavor_text_entries.find(entry => entry.language.name === 'en');

    fetchPoke(data, descriptionText ? descriptionText.flavor_text : 'A description for this POKéMON is currently unavailable');


}


function fetchPoke(getP, descriptionText) {

    user.value = getP.name
    pokeName.innerHTML = user.value;

    if (getP.sprites.other.showdown.front_default) {
        pokeGif.src = getP.sprites.other.showdown.front_default;
    } else if (getP.sprites.front_default) {
        pokeGif.src = getP.sprites.front_default
    }
    power.innerHTML = getP.abilities[0].ability.name;
    description.innerHTML = descriptionText;


    icon.src = getP.sprites['versions']['generation-vii']['icons']['front_default'];
    if (getP.id <= 807) {
        icon.style.display = 'block';
    } else {
        icon.style.display = 'none';
    }

}

btn.addEventListener('click', () => {
    pokeData(user.value)
})

