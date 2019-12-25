const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

fetch(endpoint)
.then(res => res.json())
.then(data => cities.push(...data));

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function find(word, cities){
    return cities.filter(place => {
        const regex = new RegExp(word , 'gi');
        return place.city.match(regex) || place.state.match(regex)
    })
}

function display(){
    const matches = find(this.value, cities)
    const suggest = matches.map(place => {
        const regex = new RegExp(this.value, 'gi')
        const city = place.city.replace(regex, `<span class="hl">${this.value}</span>`)

        const state = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
        <li>
        <span class="name">${city}, ${state}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `
    }).join('')
   suggestions.innerHTML = suggest;
}

const input = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

input.addEventListener('change', display);
input.addEventListener('keyup', display);