const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const botaoOutroGato = document.getElementById('outro-gato');
const imagemGato = document.getElementById('gato');

const buscarGatos = async () => {
    const dados = await fetch(BASE_URL)
        .then((resultado) => resultado.json())
        .catch((e) => console.log(e));

    return dados.webpurl;
};

//pega a img da API
const carregarImagem = async () => {
    imagemGato.src = await buscarGatos();
}

//chama a imagem sempre que clicar no botão
botaoOutroGato.addEventListener('click', carregarImagem);

carregarImagem();