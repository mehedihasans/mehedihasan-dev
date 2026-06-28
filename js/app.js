/***********************
    PROJECT FILTER
************************/

const header = document.querySelector("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});


/*=========================
    MOBILE MENU
=========================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/*=========================
    CLOSE MENU AFTER CLICK
=========================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/*=========================
    SCROLL REVEAL
=========================*/

const revealElements = document.querySelectorAll("section");

function revealSection() {

    revealElements.forEach(section => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSection);
revealSection();


/*=========================
    SCROLL TO TOP BUTTON
=========================*/

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";
scrollBtn.className = "scrollTop";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/*=========================
    TYPING EFFECT
=========================*/

const roles = [

    
    "Web Developer",
    "IT Student",
    "Problem Solver"

];

const typingElement = document.querySelector("#typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typing() {

    let currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent = currentRole.substring(0, charIndex++);
    } else {

        typingElement.textContent = currentRole.substring(0, charIndex--);

    }

    if (!deleting && charIndex === currentRole.length + 1) {

        deleting = true;

        setTimeout(typing, 1500);

        return;

    }

    if (deleting && charIndex === 0) {

        deleting = false;

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;

        }

    }

    setTimeout(typing, deleting ? 60 : 120);

}

typing();


/*=========================
    ACTIVE MENU
=========================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});










/*==============================
PROJECT FILTER
==============================*/

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

if(filterButtons.length){

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            if(
                filter === "all" ||
                card.dataset.category === filter
            ){

                card.style.display = "block";

            }else{

                card.style.display = "none";

            }

        });

    });

});

}

/*=====================================
CONTACT FORM
=====================================*/

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const subject =
    document.getElementById("subject").value.trim();

    const message =
    document.getElementById("message").value.trim();

    const button =
    this.querySelector(".contact-btn");

    if(!name || !email || !subject || !message){

        alert("Please fill in all fields.");
        return;

    }

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        alert("Please enter a valid email address.");
        return;

    }

    button.disabled = true;

    button.innerHTML =
    `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;

    setTimeout(() => {

        alert("✅ Message Sent Successfully!");

        contactForm.reset();

        button.disabled = false;

        button.innerHTML =
        `<span>Send Message</span>
         <i class="fa-solid fa-paper-plane"></i>`;

    },1800);

});

}






