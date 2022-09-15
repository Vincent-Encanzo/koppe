$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
});  

let S = (el) => {
    return document.getElementById(el)
}
let backToTop = () => {
    if (window.scrollY === 0) {
        S('back-to-top').style.display = 'none'
    } else {
        S('back-to-top').style.display = 'flex'
        S('back-to-top').addEventListener('click', () => {
            window.scrollTo(0, 0)
        })
    }
}
window.addEventListener('scroll', backToTop)
backToTop()