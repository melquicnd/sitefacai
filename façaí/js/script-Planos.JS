
let container = document.getElementById("section-complementos");
let container2 = document.getElementById("escolha-complementos");
var escolhido = 0;

let selecionado = document.getElementById("selecionado");
let mainContainer = document.getElementById("section-register");

let back = document.getElementById("back")


function botao_close2(botao){

    container.style.display= "none"
    mainContainer.style.display = "none"

}
function backAll(botao) {

    mainContainer.style.display = "none"
    container.style.display= "block"

}

function botao_close(botao) {
    
    container.style.display= "none"
    console.log(escolhido)
}
function botao_basico(botao) {
  escolhido =5;
    container.style.display = "block";
    console.log(escolhido)
}

function botao_medio(botao) {
    escolhido =10;
    container.style.display = "block";
    console.log(escolhido)
}

function botao_avancado(botao) {
    escolhido =10;
     container.style.display = "block";
     console.log(escolhido)
}

function proximo(botao) {
    let mainContainer = document.getElementById("section-register");
    

    var erro = document.getElementById("erro")

    selecionados

    var checkbox = document.querySelectorAll(".checkbox")
    var selecionados = 0;

    selecionados =0;
    checkbox.forEach(function(el){

        if(el.checked){
            selecionados++;
        }

    })
    if(selecionados < escolhido){
        
        mainContainer.style.display = "block"
        container.style.display = "none"
        
    }else{
        if(selecionados > escolhido) {
            erro.innerText ="selecione menos complementos ou selecione um plano maior"
        }else{
            
          mainContainer.style.display = "block"
          container.style.display = "none"
        }
    }
 

   
}

//Mostrar e esconder todas as opções da lista dos planos
var UlHideBasico = document.getElementById('lista-hide-basico');
var UlShowBasico = document.getElementById('ShowUl-basico');

var UlHideMedio = document.getElementById('lista-hide-medio');
var UlShowMedio = document.getElementById('ShowUl-medio');

var UlHideAvancado = document.getElementById('lista-hide-avancado');
var UlShowAvancado = document.getElementById('ShowUl-avancado');

UlShowBasico.addEventListener("click", function(){

            if(UlHideBasico.style.display === "block") {
                UlHideBasico.style.display = "none";
                UlShowBasico.innerText = 'Ver Todos';
            } else {
                UlHideBasico.style.display= "block"
                UlShowBasico.innerText = 'Ver Menos';
            }
        })*
UlShowMedio.addEventListener("click", function(){

            if(UlHideMedio.style.display === "block") {
                UlHideMedio.style.display = "none";
                UlShowMedio.innerText = 'Ver Todos';
            } else {
                UlHideMedio.style.display= "block"
                UlShowMedio.innerText = 'Ver Menos';
            }
        })
UlShowAvancado.addEventListener("click", function(){

            if(UlHideAvancado.style.display === "block") {
                UlHideAvancado.style.display = "none";
                UlShowAvancado.innerText = 'Ver Todos';
            } else {
                UlHideAvancado.style.display= "block"
                UlShowAvancado.innerText = 'Ver Menos';
            }
        })

