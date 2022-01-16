//Constantes que recebem os elementos do primeiro personagem
const imagem_1 = document.querySelector('#img_1');
const nomeDoPersonagem_1 = document.querySelector('#nome_1');
const especie_1 = document.querySelector('#especie_1');
const condicao_1 = document.querySelector('#status_1');

//Constantes que recebem os elementos do segundo personagem
const imagem_2 = document.querySelector('#img_2');
const nomeDoPersonagem_2 = document.querySelector('#nome_2');
const especie_2 = document.querySelector('#especie_2');
const condicao_2 = document.querySelector('#status_2');

//Constantes que recebem os elementos do terceiro personagem
const imagem_3 = document.querySelector('#img_3');
const nomeDoPersonagem_3 = document.querySelector('#nome_3');
const especie_3 = document.querySelector('#especie_3');
const condicao_3 = document.querySelector('#status_3');

//Só há um botão na página
const botao = document.querySelector('button');

//Array que receberá os 3 números aleatorios que servirão para pegar os personagens na API do Ricka and Morty
let numerosAleatorios = []


gerarValorAleatorio = () => {
    let valoresAleatorios = []
    //Insere 3 numeros aleatório no array
    for(let i = 0; i < 3; i++){
        valoresAleatorios.push(Math.floor(Math.random() * 671));
    }
    return valoresAleatorios
}


//Função responsável por pegar o primeiro personagem
pegarPersonagem_1 = () => {
    return fetch(`https://rickandmortyapi.com/api/character/${numerosAleatorios[0]}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": "Application/json"
        }
    }).then((response) => response.json()).then((data) => {
        imagem_1.src = data.image;
        imagem_1.alt = data.name;
        nomeDoPersonagem_1.innerHTML = data.name;
        especie_1.innerHTML = data.species;
        condicao_1.innerHTML = data.status;
    });
}

////Função responsável por pegar o segundo personagem
pegarPersonagem_2 = () => {
    return fetch(`https://rickandmortyapi.com/api/character/${numerosAleatorios[1]}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": "Application/json"
        }
    }).then((response) => response.json()).then((data) => {
        imagem_2.src = data.image;
        imagem_2.alt = data.name;
        nomeDoPersonagem_2.innerHTML = data.name;
        especie_2.innerHTML = data.species;
        condicao_2.innerHTML = data.status;
    });
}

//Função responsável por pegar o terceiro personagem
pegarPersonagem_3 = () => {
    return fetch(`https://rickandmortyapi.com/api/character/${numerosAleatorios[2]}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": "Application/json"
        }
    }).then((response) => response.json()).then((data) => {
        imagem_3.src = data.image;
        imagem_3.alt = data.name;
        nomeDoPersonagem_3.innerHTML = data.name;
        especie_3.innerHTML = data.species;
        condicao_3.innerHTML = data.status;
    });
}


//Ao clicar no botão essa função é chamada e ela é responsável por chamar as funçõoes que irão gerar os números aleatórios e
//pegar os personagens da API individualmente
function chamarFuncoes(){
    numerosAleatorios = gerarValorAleatorio();
    pegarPersonagem_1();
    pegarPersonagem_2();
    pegarPersonagem_3();
}

botao.onclick = chamarFuncoes;