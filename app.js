const container = document.querySelector('.container');
const card = container.querySelector('.container__card');
const ramen = card.querySelector('.container__card-top-image');
const cardHeading = card.querySelector('.container__card-heading');
const cardCto = card.querySelector('.container__card-cto');
const cardContent = card.querySelector('.container__card-content');




container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = "rotateY(" + xAxis + "deg) rotateX(" + yAxis + "deg)";
    ramen.style.transform = "translateZ(80px) rotateZ(30deg) scale(1.5)";
    cardHeading.style.transform = "translateZ(80px)";
    cardCto.style.transform = "translateZ(30px) scale(1.4)";
    cardContent.style.transform = "translateZ(80px)";

});

container.addEventListener('mouseenter', () => {
    card.style.transition = "none";

});
container.addEventListener('mouseleave', () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
    ramen.style.transform = "translateZ(0px) rotateZ(0deg) scale(1)";
    cardHeading.style.transform = "translateZ(0px)";
    cardCto.style.transform = "translateZ(0px) scale(1)";
    cardContent.style.transform = "translateZ(0px)";
    card.style.transition = "transform .3s ease-in";



});