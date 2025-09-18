document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const heroSection = document.querySelector('.hero-section');

    window.addEventListener('scroll', () => {

        const heroHeight = heroSection.offsetHeight;


        if (window.scrollY > heroHeight) {

            navbar.classList.add('navbar-shadow');
        } else {

            navbar.classList.remove('navbar-shadow');
        }
    });
});




$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})







