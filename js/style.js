// document.addEventListener('DOMContentLoaded', () => {
//     const navbar = document.getElementById('navbar');
//     const heroSection = document.querySelector('.hero-section');

//     window.addEventListener('scroll', () => {

//         const heroHeight = heroSection.offsetHeight;


//         if (window.scrollY > heroHeight) {

//             navbar.classList.add('navbar-shadow');
            
//         } else {

//             navbar.classList.remove('navbar-shadow');
            
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    // You can still keep the reference, but we don't need its height anymore
    // const heroSection = document.querySelector('.hero-section'); 

    window.addEventListener('scroll', () => {

        // Check if the user has scrolled *any* amount down (i.e., past the very top)
        if (window.scrollY > 0) { 
            navbar.classList.add('navbar-shadow');
        } else {
            // When the user is back at the very top of the page
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







