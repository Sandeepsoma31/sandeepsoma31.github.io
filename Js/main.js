//hamburger menu toggle navigation bar
let hammenu = document.querySelector('#ham-menu');
let navbar = document.querySelector('.navbar');

hammenu.onclick = () =>{
    
    hammenu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

//scroll to active section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(section=>{
        let top = window.scrollY;
       // let bottom = window.scrollX;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        
        if(top >= offset && top < offset+height){
            navLinks.forEach.apply(links=>{
             links.classList.remove('active');
             document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });  
        };
    });
    
    //sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    
    //remove toggle & icon
    hammenu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


