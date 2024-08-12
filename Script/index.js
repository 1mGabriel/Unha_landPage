$(document).ready(function(){
    $("#carrousel-container").slick({autoplay: true, autoplaySpeed: 2000})

    $("#see-more").on("click", function(){
        $(".photo-container").slideDown()
    })

    $("#see-less").on("click", function(){
        $(".photo-container").slideUp()
    })
})

// Seleção dos elementos
const imagem = document.querySelector("#esmalte-img")
const esmalteContainer = document.querySelector("#cor-container-red")
const blueSpan = document.querySelector(".blue")
const redSpan = document.querySelector(".red")
const cianoSpan = document.querySelector(".ciano")
const greenSpan = document.querySelector(".green")
const pinkSpan = document.querySelector(".pink")

// metodo que altera a cor dos esmaltes
const alteraSrc = (cor) =>{
    let srcString = `./img/esmalte_${cor}.png`
    imagem.src = srcString

    esmalteContainer.id = `cor-container-${cor}`
}

// chama o evento de alterar a cor
blueSpan.addEventListener("click", ()=>{
    alteraSrc("blue")
})
redSpan.addEventListener("click", ()=>{
    alteraSrc("red")
})
greenSpan.addEventListener("click", ()=>{
    alteraSrc("green")
})
cianoSpan.addEventListener("click", ()=>{
    alteraSrc("ciano")
})
pinkSpan.addEventListener("click", ()=>{
    alteraSrc("pink")
})


