const images = document.querySelectorAll(".img");
const containerimage = document.querySelector(".container-img");
const imagecontainer = document.querySelector(".img-show");
const copy = document.querySelector(".copy");
const closemodal = document.querySelector(".bx.bx-x");


images.forEach(image =>{
    image.addEventListener("click", ()=>{
        addimage(image.getAttribute("src"),(image.getAttribute("alt")))

    })
})

const addimage =(src, alt)=>{
    containerimage.classList.toggle("move");
    imagecontainer.classList.toggle("show");

    imagecontainer.src =src;
    copy.innerHTML = alt;

}

closemodal.addEventListener("click", ()=>{
    containerimage.classList.toggle("move");
    imagecontainer.classList.toggle("show");


})