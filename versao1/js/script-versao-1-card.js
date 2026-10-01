//procure e selcione o elemento coma classe card-destino
// e guarde uma variavel chamada primeiro card
let priemirocard= document.querySelector('.card-destino');

console.log(priemirocard);
// procure o botão de curiosidades da lua
let botaoCuriosidade = document.querySelector(".botao-curiosidade");

// procure e selecione o paragráfo com a curiosidade sobre a lua
let curiosidade = document.querySelector(".curiosidade");
console.log(curiosidade)

/* Monitore o clique no botão de curiosidade e, quando acontecer
o clique, verifique Se a curiosidade está oculta.
Se estiver faça ficar visivel, mude o aria-expanded para true
e troque o texto do botão para " ocultar curiosidade"*/
botaoCuriosidade.addEventListener("click", function(){
    if(curiosidade.hidden){
        curiosidade.hidden = false;

        botaoCuriosidade.setAttribute("aria-expanded", "true")

        botaoCuriosidade.textContent = "Ocultar curiosidades";
        
    } else  { 
        curiosidade.hidden = true;
        botaoCuriosidade.setAttribute("aria-expanded", false);
        botaoCuriosidade.textContent = "ver curiosidades";
    }
    }
);