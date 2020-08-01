
// navbar toggle
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');

navToggle.addEventListener('click', function() {
    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links');
    // } else {
    //     links.classList.add('show-links');
    // }
    // linksContainer.classList.toggle('show-links');
    // if (navToggle) {
    //     navToggle.classList.remove('change');
    // } else {
    //     navToggle.classList.add('change');
    // } 
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
    
});


// fixed navbar
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
    if(scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
})

//select link
const scrollLink = document.querySelectorAll('.scroll-link');

scrollLink.forEach(function(link) {
    link.addEventListener('click', function(e) {
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        // calculate height
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if(!fixedNav) {
            position = position - navHeight;
        }
        // za male ekrane
        if(navHeight > 82) {
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        })
        linksContainer.style.height = 0;
    })
})

// set date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();