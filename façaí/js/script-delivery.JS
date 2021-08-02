//Abrir nav MENU MOBILE

$(document).ready(function(){
    $('.open-nav').click(function(){
        $('.menu').toggleClass('active');
        $('.open-menu').toggleClass('open');
    });
});
function myFunction(x) {
    x.classList.toggle("change");
  }

//profile
var ContainerProfile = document.getElementById("ContainerProfile")
var CloseProfile = document.getElementById("CloseProfile")
var ShowProfile = document.getElementById("BtnProfile")


ShowProfile.addEventListener("click", function(){

    if(ContainerProfile.style.marginRight === "-250%"){
        ContainerProfile.style.marginRight = "0%";
    } else {
        ContainerProfile.style.marginRight = "0%"
    }
})

CloseProfile.addEventListener("click", function(){

    if(ContainerProfile.style.marginRight === "0%"){
        ContainerProfile.style.marginRight = "-250%";
    } else {
        ContainerProfile.style.marginRight = "-250%"
    }
})

//Search
var ContainerSearch = document.getElementById("ContainerSearch")
var CloseSearch = document.getElementById("CloseSearch")
var ShowSearch = document.getElementById("BtnSearch")


ShowSearch.addEventListener("click", function(){

    if(ContainerSearch.style.marginRight === "-100%"){
        ContainerSearch.style.marginRight = "0%";

    } else {
        ContainerSearch.style.marginRight = "0%"
    }
})

CloseSearch.addEventListener("click", function(){

    if(ContainerSearch.style.marginRight === "0%"){
        ContainerSearch.style.marginRight = "-100%";
    } else {
        ContainerSearch.style.marginRight = "-100%"
    }
})

//Fechar menu moble
var btn_close_menu = document.getElementById("btn-close-menu")

//btn_close_menu.onclick = function(){
    //btn.classList.toggle("");

//popup
var btn_close_popup = document.getElementById("close-popup")
var container_popup = document.getElementById("container-popup")

btn_close_popup.addEventListener("click", function(){
    if(container_popup.style.display === "block"){
        container_popup.style.display ="none"
    } else {
        container_popup.style.display ="none"
    }
})




//escolher lista de produtos

var closebtn_acai = document.getElementById("btn-acai")
var closebtn_cremes = document.getElementById("btn-cremes")
var closebtn_cupuacu = document.getElementById("btn-cupuacu")
var closebtn_casadinho = document.getElementById("btn-casadinho")
var closebtn_mix = document.getElementById("btn-mix")



var listaacai = document.getElementById("list-acai")
var listacremes = document.getElementById("list-cremes")
var listacupuacu = document.getElementById("list-cupuacu")
var listacasadinho = document.getElementById("list-casadinho")
var listamix = document.getElementById("list-mix")


closebtn_acai.addEventListener("click", function(){

    if(listaacai.style.display === "none"){
        listaacai.style.display = "block";
    } else {
        listaacai.style.display = "block"
    }
})
closebtn_cremes.addEventListener("click", function(){

    if(listacremes.style.display === "none"){
        listacremes.style.display = "block";
    } else {
        listacremes.style.display = "block"
    }
})
closebtn_cupuacu.addEventListener("click", function(){

    if(listacupuacu.style.display === "none"){
        listacupuacu.style.display = "block";
    } else {
        listacupuacu.style.display = "block"
    }
})
closebtn_casadinho.addEventListener("click", function(){

    if(listacasadinho.style.display === "none"){
        listacasadinho.style.display = "block";
    } else {
        listacasadinho.style.display = "block"
    }
})
closebtn_mix.addEventListener("click", function(){

    if(listamix.style.display === "none"){
        listamix.style.display = "block";
    } else {
        listamix.style.display = "block"
    }
})


//Funções para quando abrir uma categoria... Fechar a outra----------------

//açaí

closebtn_acai.addEventListener("click", function(){

    if(listacremes.style.display === "block"){
        listacremes.style.display = "none";
    } else {
        listacremes.style.display = "none"
    }
})
closebtn_acai.addEventListener("click", function(){

    if(listacupuacu.style.display === "block"){
        listacupuacu.style.display = "none";
    } else {
        listacupuacu.style.display = "none"
    }
})
closebtn_acai.addEventListener("click", function(){

    if(listacasadinho.style.display === "block"){
        listacasadinho.style.display = "none";
    } else {
        listacasadinho.style.display = "none"
    }
})
closebtn_acai.addEventListener("click", function(){

    if(listamix.style.display === "block"){
        listamix.style.display = "none";
    } else {
        listamix.style.display = "none"
    }
})

//cremes---
closebtn_cremes.addEventListener("click", function(){

    if(listaacai.style.display === "block"){
        listaacai.style.display = "none";
    } else {
        listaacai.style.display = "none"
    }
})
closebtn_cremes.addEventListener("click", function(){

    if(listacupuacu.style.display === "block"){
        listacupuacu.style.display = "none";
    } else {
        listacupuacu.style.display = "none"
    }
})
closebtn_cremes.addEventListener("click", function(){

    if(listacasadinho.style.display === "block"){
        listacasadinho.style.display = "none";
    } else {
        listacasadinho.style.display = "none"
    }
})
closebtn_cremes.addEventListener("click", function(){

    if(listamix.style.display === "block"){
        listamix.style.display = "none";
    } else {
        listamix.style.display = "none"
    }
})

//cupuacu----
closebtn_cupuacu.addEventListener("click", function(){

    if(listaacai.style.display === "block"){
        listaacai.style.display = "none";
    } else {
        listaacai.style.display = "none"
    }
})
closebtn_cupuacu.addEventListener("click", function(){

    if(listacremes.style.display === "block"){
        listacremes.style.display = "none";
    } else {
        listacremes.style.display = "none"
    }
})
closebtn_cupuacu.addEventListener("click", function(){

    if(listacasadinho.style.display === "block"){
        listacasadinho.style.display = "none";
    } else {
        listacasadinho.style.display = "none"
    }
})
closebtn_cupuacu.addEventListener("click", function(){

    if(listamix.style.display === "block"){
        listamix.style.display = "none";
    } else {
        listamix.style.display = "none"
    }
})

//casadinho
closebtn_casadinho.addEventListener("click", function(){

    if(listaacai.style.display === "block"){
        listaacai.style.display = "none";
    } else {
        listaacai.style.display = "none"
    }
})
closebtn_casadinho.addEventListener("click", function(){

    if(listacremes.style.display === "block"){
        listacremes.style.display = "none";
    } else {
        listacremes.style.display = "none"
    }
})
closebtn_casadinho.addEventListener("click", function(){

    if(listacupuacu.style.display === "block"){
        listacupuacu.style.display = "none";
    } else {
        listacupuacu.style.display = "none"
    }
})
closebtn_casadinho.addEventListener("click", function(){

    if(listamix.style.display === "block"){
        listamix.style.display = "none";
    } else {
        listamix.style.display = "none"
    }
})

//mix----
closebtn_mix.addEventListener("click", function(){

    if(listaacai.style.display === "block"){
        listaacai.style.display = "none";
    } else {
        listaacai.style.display = "none"
    }
})
closebtn_mix.addEventListener("click", function(){

    if(listacremes.style.display === "block"){
        listacremes.style.display = "none";
    } else {
        listacremes.style.display = "none"
    }
})
closebtn_mix.addEventListener("click", function(){

    if(listacupuacu.style.display === "block"){
        listacupuacu.style.display = "none";
    } else {
        listacupuacu.style.display = "none"
    }
})
closebtn_mix.addEventListener("click", function(){

    if(listacasadinho.style.display === "block"){
        listacasadinho.style.display = "none";
    } else {
        listacasadinho.style.display = "none"
    }
})

//Botão para aparecer os complementos


//checkout mobile

var container_checkout = document.getElementById("section-carrinho") 
var mostrar_checkout = document.getElementById("carrinho")
var conatiner_checkout = document.getElementById("container-checkout")
var close_checkout = document.getElementById("close-checkout")



mostrar_checkout.addEventListener("click", function(){

    if(conatiner_checkout.style.marginTop === "200%"){
        conatiner_checkout.style.marginTop = "0%";
    } else {
        conatiner_checkout.style.marginTop = "0%"
    }
})

close_checkout.addEventListener("click", function(){

    if(conatiner_checkout.style.marginTop === "0%"){
        conatiner_checkout.style.marginTop = "200%";
    } else {
        conatiner_checkout.style.marginTop = "200%"
    }
})

//Lozalização do cliente

/*var btnLocalização = document.getElementById("btn-localização")
var containerlocalização = document.getElementById("container-localização")

btnLocalização.addEventListener("click", function(){

    if(containerlocalização.style.display === "none"){
        containerlocalização.style.display = "block";
    } else {
        containerlocalização.style.display = "block"
    }
})

containerlocalização.addEventListener("click", function(){

    if(containerlocalização.style.display === "block"){
        containerlocalização.style.display = "none";
    } else {
        containerlocalização.style.display = "none"
    }
})*/

// Evento dos complementos


class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }
    salvar() {
       let produto = this.lerDados1();
       let imgBag = document.getElementById('imgBag')
       imgBag.style.display= "none"

        if(this.validaCampos(produto)) {
            this.adicionar(produto)
        }
      
       this.listaTabela()
    }

    salvar2() {
        let produto = this.lerDados2();
        let imgBag = document.getElementById('imgBag')
        imgBag.style.display= "none"
 
         if(this.validaCampos(produto)) {
             this.adicionar(produto)
         }
       
        this.listaTabela()
     }

     salvar3() {
        let produto = this.lerDados3();
        let imgBag = document.getElementById('imgBag')
        imgBag.style.display= "none"
 
         if(this.validaCampos(produto)) {
             this.adicionar(produto)
         }
       
        this.listaTabela()
     }

     salvar4() {
        let produto = this.lerDados4();
        let imgBag = document.getElementById('imgBag')
        imgBag.style.display= "none"
 
         if(this.validaCampos(produto)) {
             this.adicionar(produto)
         }
       
        this.listaTabela()
     }
   
     salvar5() {
        let produto = this.lerDados5();
        let imgBag = document.getElementById('imgBag')
        imgBag.style.display= "none"
 
         if(this.validaCampos(produto)) {
             this.adicionar(produto)
         }
       
        this.listaTabela()
     }

     salvar6() {
        let produto = this.lerDados6();
        let imgBag = document.getElementById('imgBag')
        imgBag.style.display= "none"
 
         if(this.validaCampos(produto)) {
             this.adicionar(produto)
         }
       
        this.listaTabela()
     }

     salvar7() {
        let produto = this.lerDados7();
        let imgBag = document.getElementById('imgBag')
        imgBag.style.display= "none"
 
         if(this.validaCampos(produto)) {
             this.adicionar(produto)
         }
       
        this.listaTabela()
     }

     salvar8() {
        let produto = this.lerDados8();
        let imgBag = document.getElementById('imgBag')
        imgBag.style.display= "none"
 
         if(this.validaCampos(produto)) {
             this.adicionar(produto)
         }
       
        this.listaTabela()
     }

     salvar9() {
        let produto = this.lerDados9();
        let imgBag = document.getElementById('imgBag')
        imgBag.style.display= "none"
 
         if(this.validaCampos(produto)) {
             this.adicionar(produto)
         }
       
        this.listaTabela()
     }

     salvar10() {
        let produto = this.lerDados10();
        let imgBag = document.getElementById('imgBag')
        imgBag.style.display= "none"
 
         if(this.validaCampos(produto)) {
             this.adicionar(produto)
         }
       
        this.listaTabela()
     }





   listaTabela() {
       let tbody = document.getElementById('tbody')
       tbody.innerText = ''
       

       for (let i = 0; i < this.arrayProdutos.length; i++) {
          let tr = tbody.insertRow();
          
          let td_id = tr.insertCell()
          let td_produto = tr.insertCell()
          let td_valor = tr.insertCell()
          let td_acoes = tr.insertCell()

          td_id.innerText = this.arrayProdutos[i].id
          td_produto.innerText = this.arrayProdutos[i].nomeProduto
          td_valor.innerText = this.arrayProdutos[i].preco

          td_id.classList.add('center')
          td_acoes.classList.add('center')


          let imgDelete = document.createElement('img')
          imgDelete.src = 'imagens/lixeira-de-reciclagem.png'
          imgDelete.setAttribute("onclick", "produto.deletar("+this.arrayProdutos[i].id+")")

          td_acoes.appendChild(imgDelete)

          
       }
   }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }
    
    lerDados1() {
        let produto = {}
        let nome = ' Açaí 250ml'
        let preco = 'R$12,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }

    lerDados2() {
        let produto = {}
        let nome = 'Açaí 330ml'
        let preco = 'R$15,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }

    lerDados3() {
        let produto = {}
        let nome = 'Açaí 500ml'
        let preco = 'R$23,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }

    lerDados4() {
        let produto = {}
        let nome = 'Açaí 770ml'
        let preco = 'R$35,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }

    lerDados5() {
        let produto = {}
        let nome = 'Açaí 1kg'
        let preco = 'R$45,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }

    lerDados6() {
        let produto = {}
        let nome = 'Cremes 250ml'
        let preco = 'R$14,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }

    lerDados7() {
        let produto = {}
        let nome = '330ml +7 complementos'
        let preco = 'R$17,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }

    lerDados8() {
        let produto = {}
        let nome = '500ml +7 complementos'
        let preco = 'R$23,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }

    lerDados9() {
        let produto = {}
        let nome = '770ml +10 complementos'
        let preco = 'R$35,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }

    lerDados10() {
        let produto = {}
        let nome = '1kg +10 complementos'
        let preco = 'R$45,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }


    

    validaCampos(produto) {
        let msg = '';

        if(produto.nomeProduto == ''){
           
        }
        if(produto.preco == ''){
           
        }

        if(msg != ''){
            alert(msg);
            return false
        }
        return true;
    }

    cancelar() {
        
    }
    deletar(id) {

        let tbody = document.getElementById('tbody')

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1)
                tbody.deleteRow(i)
            }
            
        }

        
    }
}
var produto = new Produto()

//Quando marca a opção de pagamento dinheiro

var SelectMoney = document.getElementById("CheckMoney")
var SectionTroco = document.getElementById("DinheiroHide")
var SelectCartao = document.getElementById("CheckCartao")

SelectMoney.addEventListener("click", function(){
    if(SectionTroco.style.display === "none"){
        SectionTroco.style.display ="block"
    } else {
        SectionTroco.style.display ="block"
    }
})
SelectCartao.addEventListener("click", function(){
    if(SectionTroco.style.display === "block"){
        SectionTroco.style.display ="none"
    } else {
        SectionTroco.style.display ="none"
    }
})