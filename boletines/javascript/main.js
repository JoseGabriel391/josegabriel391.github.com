//console.log("Hola mundo desde JavaScript")

//DOM
/*let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
})*/

//console.log(links)
/*
let celdas = document.querySelectorAll("td")

celdas.forEach(function(td){
    td.addEventListener('click', function(){
        console.log(this)
    });
})*/

//tomo el elemento
let links = document.querySelectorAll(".close");

//Lo recorro
links.forEach(function(link){
    
    //Le doy un evento a cada uno de ellos
    link.addEventListener("click", function(evento){
        evento.preventDefault()
        let content = document.querySelector('.content');

        content.classList.remove("fadeInDown");
        content.classList.remove("animate");

        content.classList.add("fadeOutUp")
        content.classList.add("animated")

        setTimeout(function(){
            location.href = "/boletines"
        }, 1000)
        

        return false
    })
})

/*let iconos = document.querySelector("i");

iconos.forEach(function(icono){
    icono.classList.remove();
})*/

