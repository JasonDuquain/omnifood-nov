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









