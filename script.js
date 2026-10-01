/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", function () {

    mobileMenu.classList.toggle("show");

    // Change hamburger icon to X
    const icon = menuBtn.querySelector("i");

    if (mobileMenu.classList.contains("show")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu after clicking a link */

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================================
   SEARCH BOX
========================================================= */

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const searchSubmit = document.getElementById("searchSubmit");

searchBtn.addEventListener("click", function () {

    searchBox.classList.toggle("show");

    if (searchBox.classList.contains("show")) {
        searchInput.focus();
    }

});


/* Search function */

searchSubmit.addEventListener("click", function () {

    const searchValue = searchInput.value.toLowerCase().trim();

    if (searchValue === "") {
        alert("Please enter a food or destination.");
        return;
    }

    const countrySections = document.querySelectorAll(".country-section");
    const matchingCountry = Array.from(countrySections).find(function (section) {
        const countryName = section.querySelector(".country-name h2");
        return countryName && countryName.innerText.toLowerCase().includes(searchValue);
    });

    if (matchingCountry) {
        matchingCountry.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        return;
    }

    const allCards = document.querySelectorAll(
        ".food-card, .place-card"
    );

    let found = false;

    allCards.forEach(function (card) {

        const cardText = card.innerText.toLowerCase();

        if (cardText.includes(searchValue)) {

            card.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            card.style.outline = "3px solid #b83e24";

            setTimeout(function () {
                card.style.outline = "none";
            }, 2000);

            found = true;
        }

    });


    if (!found) {

        alert(
            "Sorry, we couldn't find \"" +
            searchValue +
            "\" on this page."
        );

    }

});


/* Allow Enter key in search */

searchInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        searchSubmit.click();
    }

});


/* =========================================================
   START EXPLORING BUTTON
========================================================= */

const exploreButton = document.querySelector(".explore-btn");

exploreButton.addEventListener("click", function () {

    document.getElementById("countries").scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================================================
   COUNTRY EXPLORE BUTTONS
========================================================= */

const countryButtons = document.querySelectorAll(".country-btn");

countryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const country = button.dataset.country;

        const countryId = country.toLowerCase();

        const countrySection = document.getElementById(countryId);

        if (countrySection) {

            countrySection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================================================
   FOOD MODAL
========================================================= */

const modal = document.getElementById("foodModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");


/* Food information */

const foodInformation = {

    "Nigerian Jollof Rice":
        "A popular Nigerian rice dish prepared with long-grain rice, tomatoes, peppers, onions, spices and stock.",

    "Pounded Yam and Egusi Soup":
        "Pounded yam is smooth and stretchy, while egusi soup is prepared using ground melon seeds, vegetables, spices and meat or fish.",

    "Suya":
        "Suya is grilled meat seasoned with yaji, a spicy mixture commonly containing groundnuts, pepper and spices.",

    "Smocha":
        "Smocha combines soft chapati with a boiled sausage and may also be prepared with a boiled egg.",

    "Omena":
        "Omena are small dried fish commonly prepared with onions, tomatoes and spices.",

    "Chicken Biryani":
        "Chicken biryani is fragrant spiced rice prepared with chicken and a mixture of aromatic spices.",

    "Mokimo":
        "Mokimo is a mashed Kenyan dish made using potatoes, maize, peas and leafy greens.",

    "Nyama Choma":
        "Nyama choma is grilled meat, commonly beef or goat, often enjoyed with kachumbari and ugali.",

    "Ugali":
        "Ugali is a firm maize meal staple commonly served alongside vegetables, meat or stew.",

    "Kisamvu":
        "Kisamvu is a leafy vegetable dish made from cassava leaves and commonly cooked with onions, tomatoes and spices.",

    "Mlenda":
        "Mlenda is a traditional leafy vegetable dish prepared with cassava leaves and coconut milk.",

    "Chipsi Mayai":
        "Chipsi mayai combines fried chips with eggs and may include onions and tomatoes.",

    "Uji wa Mtama":
        "Uji wa mtama is a nutritious porridge prepared from finger millet flour."

};


/* Details buttons */

const detailsButtons = document.querySelectorAll(".details-btn");

detailsButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const foodName = button.dataset.food;

        modalTitle.textContent = foodName;

        modalText.textContent =
            foodInformation[foodName] ||
            "Discover more about this delicious African dish.";

        modal.classList.add("show");

    });

});


/* Ingredients buttons */

const ingredientButtons =
    document.querySelectorAll(".ingredients-btn");

ingredientButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const foodName = button.dataset.food;

        modalTitle.textContent = foodName + " - Ingredients";

        modalText.textContent =
            "Typical ingredients include fresh vegetables, onions, tomatoes, spices and the main ingredients used to prepare this traditional dish. Ingredients may vary depending on the region and recipe.";

        modal.classList.add("show");

    });

});


/* Close modal */

closeModal.addEventListener("click", function () {

    modal.classList.remove("show");

});


/* Close modal when clicking outside */

modal.addEventListener("click", function (event) {

    if (event.target === modal) {
        modal.classList.remove("show");
    }

});


/* =========================================================
   EXPLORE NEXT FORM
========================================================= */

const destinationForm =
    document.getElementById("destinationForm");

const destinationInput =
    document.getElementById("destinationInput");


destinationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const destination =
        destinationInput.value.trim();

    if (destination === "") {
        return;
    }

    alert(
        "Thank you! " +
        destination +
        " has been added to our Explore Next list."
    );

    destinationInput.value = "";

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const navLinks =
    document.querySelectorAll(".navbar > a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});