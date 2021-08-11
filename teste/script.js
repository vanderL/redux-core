const corpo = document.querySelector('body');
const paises = document.querySelector('.paises');
const paisesNode = document.querySelectorAll('.paises');
const input = document.querySelector('.busca');
const pais = document.querySelector('.informePais');
let flag = false;


input.addEventListener('keydown', function (event) {
    const todosPaises = document.querySelectorAll('.informePais')
    if (event.key === 'Enter') {
        for (const pais of todosPaises) {
            if(pais.children.item('h2').textContent === input.value){
                pais.classList.remove('hide')
            } else {
                pais.classList.add('hide')
            }
        }

    }
})

fetch('https://restcountries.eu/rest/v2/all').then(function (resposta) {
    const promiseResposta = resposta.json();

    promiseResposta.then(function (body) {
        body.forEach(pais => {
            const div = document.createElement('div');
            div.classList.add('informePais');

            const name = document.createElement('h2');
            name.textContent = pais.name;

            const region = document.createElement('h4');
            region.textContent = pais.region;

            const capital = document.createElement('span');
            capital.textContent = pais.capital;

            const population = document.createElement('p');
            population.textContent = Number(pais.population).toFixed(2);

            const flag = document.createElement('img');
            flag.src = pais.flag;

            div.append(name, region, capital, population, flag);
            paises.append(div);
            corpo.append(paises);
        });

    })
})

