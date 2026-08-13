/* =========================================
   SHAHZAD MOTORS - JAVASCRIPT
   ========================================= */


document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE MENU
       ========================================= */

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {
            navbar.classList.toggle("show");

            if (navbar.classList.contains("show")) {
                menuToggle.innerHTML = "✕";
            } else {
                menuToggle.innerHTML = "☰";
            }
        });


        // Close menu after clicking a link
        const navLinks = navbar.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {
                navbar.classList.remove("show");
                menuToggle.innerHTML = "☰";
            });

        });

    }


    /* =========================================
       CURRENT YEAR
       ========================================= */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =========================================
       CAR SEARCH
       ========================================= */

    const searchInput = document.getElementById("carSearch");

    if (searchInput) {

        const carCards = document.querySelectorAll(".car-card");

        searchInput.addEventListener("input", function () {

            const searchText = searchInput.value.toLowerCase().trim();

            carCards.forEach(function (card) {

                const carName = card
                    .getAttribute("data-name")
                    .toLowerCase();

                if (carName.includes(searchText)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }

            });

        });

    }


    /* =========================================
       CONTACT FORM
       ========================================= */

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || phone === "" || message === "") {

                formMessage.textContent =
                    "Please fill in all required fields.";

                formMessage.style.color = "#e31b23";

                return;
            }


            if (phone.length < 10) {

                formMessage.textContent =
                    "Please enter a valid phone number.";

                formMessage.style.color = "#e31b23";

                return;
            }


            formMessage.textContent =
                "Thank you! Your message has been received. We will contact you soon.";

            formMessage.style.color = "green";

            contactForm.reset();

        });

    }

});
