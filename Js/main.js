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


//Switching between education and experience tabs
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-content');

function openRelatedContent(tabName){
        for(tablink of tablinks)
        {
            tablink.classList.remove('active-link');
        };
        for(tabcontent of tabcontents)
        {
            tabcontent.classList.remove('active-tab');
        };
        event.currentTarget.classList.add('active-link');
        document.getElementById(tabName).classList.add('active-tab');
}

//Selecting active Navbar tab
const navalllinks = document.querySelectorAll('.navlink');

navalllinks.forEach(currentlink =>{
    currentlink.addEventListener('click',() =>{
        document.querySelector('.active-navlink').classList.remove('active-navlink');
        currentlink.classList.add('active-navlink');
    })
})

const sectionalllinks = document.querySelectorAll('.section');

let currentsection = 'home';
window.addEventListener('scroll',() =>{

    sectionalllinks.forEach(presentsection => {
        if(window.scrollY >= presentsection.offsetTop - presentsection.clientHeight/2){
            currentsection = presentsection.id;
        }
    })

    navalllinks.forEach(currentLink =>{
        if(currentLink.href.includes(currentsection))
        {
            document.querySelector('.active-navlink').classList.remove('active-navlink'); //removes previous active-navlink
            currentLink.classList.add('active-navlink'); //adds active-navlink
        }
    })

})


