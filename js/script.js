const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            if(filter === "all" || card.dataset.category === filter){

                card.style.display = "block";

            }else{

                card.style.display = "none";

            }

        });

    });

});













/*=====================================
        CONTACT FORM
=====================================*/

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const button = this.querySelector(".contact-btn");

        // Empty Check
        if (!name || !email || !subject || !message) {

            alert("Please fill in all fields.");

            return;
        }

        // Email Validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;
        }

        // Button Loading
        button.disabled = true;

        button.innerHTML =
            `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;

        // Fake Sending
        setTimeout(() => {

            alert("✅ Message Sent Successfully!");

            contactForm.reset();

            button.disabled = false;

            button.innerHTML =
                `<span>Send Message</span>
                 <i class="fa-solid fa-paper-plane"></i>`;

        }, 1800);

    });

}