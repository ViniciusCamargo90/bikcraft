//Ativar Links Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLinks(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLinks);

//Ativar Itens do Orçamento

const parametros = new URLSearchParams(location.search);
console.log(parametros);

function ativarProdutos(parametro) {
  const elemento = document.getElementById(parametro);
  console.log(elemento);
  if (elemento) elemento.checked = true;
}

parametros.forEach(ativarProdutos);

//Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expand", ativa);
}

function eventosPergunta(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPergunta);

//Galeria de Bicicleta
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width:1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}
galeria.forEach(eventosGaleria);

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
