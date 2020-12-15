// toggle
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
    
    
});

// preloader
     $(window).on("load",function(){
       $(".loader-wrapper").fadeOut(4000);
    });
