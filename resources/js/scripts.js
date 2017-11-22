/****EQUAL HEIGHT BLOCKQUOTES IN TESTIMONIAL SECT****/
let eqHeights = document.querySelectorAll('.section-testimonials blockquote');
let highest = 0;

for (let i = 0; i < eqHeights.length; i++) {
    
    if (eqHeights[i].scrollHeight > highest) {
        highest = eqHeights[i].scrollHeight;
    }
}

for (let i = 0; i < eqHeights.length; i++) {
    eqHeights[i].style.height = highest + 'px'; 
}

/*********UPDATE COPYRIGHT DATE**************/
let year = document.querySelector('.year');
let currentYear = new Date().getFullYear();
year.textContent = currentYear;


/****HIGHLIGHT NAV ITEM ON CLICK****/
/* doesnt work since it conflicts with :target styles
let mainNav = document.querySelector('.main-nav');
let anchs = mainNav.querySelectorAll('a');

mainNav.addEventListener('click', function(e) {
    //e.preventDefault();
    if (e.target.tagName.toLowerCase() === 'a') {
        anchs.forEach((el) => {
            el.classList.remove('clicked');
            e.target.classList.add('clicked');
        });
    }
    
});
*/

/****ANIMATE SECT ON SCROLL****/
let sects = document.querySelectorAll('.app-screen, .section-cities .box');

document.addEventListener('scroll', () => {

   sects.forEach((el) => {
       /*phone img starts out translated on y axis by 100% so add height*/
       if (el.classList.contains('app-screen')) {
           if (el.getBoundingClientRect().top - el.getBoundingClientRect().height <= 400) {
                el.classList.add('animate');
            }
       } else if (el.getBoundingClientRect().top <= 200) {
           el.classList.add('animate');
       }
       
   }); 
    
});

/*******STICKY HEADER******/
let featuresSect = document.querySelector('.section-features');
let nav = document.querySelector('header nav');

document.addEventListener('scroll', () => {
    if (featuresSect.getBoundingClientRect().top <= 70) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});


/*****************HAMBRUGER MENU******************/
let hamburger = document.querySelector('.mobile-nav-icon');

hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    var mainNav = document.querySelector('.main-nav');
    var hamburgerIcon = document.querySelector('.mobile-nav-icon i'); //DO NOT USE .ion-navicon-round as that will cause click to fail when it is an 'X'
    mainNav.classList.toggle('navVisible');
    if (hamburgerIcon.classList.contains('ion-navicon-round')) {
       hamburgerIcon.classList.add('ion-close-round');
       hamburgerIcon.classList.remove('ion-navicon-round') 
    } else {
       hamburgerIcon.classList.add('ion-navicon-round'); 
       hamburgerIcon.classList.remove('ion-close-round'); 
    }
    
    
});





