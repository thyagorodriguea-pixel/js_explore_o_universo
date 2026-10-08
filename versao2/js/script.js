// Selecionar todos os cards
 
let cards = document.querySelectorAll(".card-destino");
 
/* Peercorrer todos os cards selecionados e para cada um (separadamente ) pegar os botóes
(botão curiosidade e o botão favoritos) c */
 
cards.forEach(function (card) {
    let botaoCuriosidade = card.querySelector('.botao-curiosidade');
 
    let botaoFavorito = card.querySelector('.botao-favorito');
 
    let curiosidade = card.querySelector('.curiosidade');
 
    botaoCuriosidade.addEventListener("click", function (){
        if(curiosidade.hidden){
        curiosidade.hidden = false;
        botaoCuriosidade.setAttribute("aria-expedand", "true");
        botaoCuriosidade.textContent - "Ver curiosidade"

   
        } else{

        
         curiosidade.hidden = true
        botaoCuriosidade.setAttribute("aria-expedand", "false");
        botaoCuriosidade.textContent - "Ver curiosidade";
        }
    }); //Fechamento do código do botãocuriosidade

    botaoFavorito.addEventListener("click", function(){
        //aplicar/remover a classe 'favoritado'
        let favoritado = card.classList.toggle('favoritado');

        //Atualizar o estado do botão(aria-pressed)
        botaoFavorito.setAttribute("aria-pressed", favoritado);

        //atualizar o texto do botão ( o favorito ou ★ favoritado)
        if(favoritado){
            botaoFavorito.textContent = "★ favoritado";
        } else {
            botaoFavorito.textContent ="☆ favorito";

        }
    }); 
});

/*  V2: programação para o recurso de filtragem de destinos*/

// procurar e selecionar os botões de filtro

const botoesfiltro = document.querySelectorAll("[data-filtro]");


// percorrer/acessar cada botão dentro do botoesfiltro
botoesfiltro.forEach(function(botaofiltro){
// descobrir/guardar qual filtro foi escolhidos


    botaofiltro.addEventListener("click", function(){
    // ... acessamos e guardamos o filtro escondido
    const filtro= botaofiltro.dataset.filtro;
        //percorrendo cada card
    cards.forEach(function(card){
        const categoria = card.dataset.categoria;
        //mostrar todos os cards ou apenas os cards da categoria filtrada

        if(filtro === "todos" || categoria === filtro){
            card.hidden = false;

        } else {
            card.hidden = true;

        }
    });

    botoesfiltro.forEach(function(botaofiltro){
        if (botaofiltro.dataset.filtro === filtro){
            botaofiltro.classList.add("filtro-ativo");
            botaofiltro.setAttribute("aria-pressed", "true")
        } else {
            botaofiltro.classList.remove("filtro-ativo");
             botaofiltro.setAttribute("aria-pressed", "false")
        }
    });


    });// fechamento do event listener

}); // fechamento for each