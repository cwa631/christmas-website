/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== DAY COUNTER FOR CHRISTMAS ===============*/

const titleData = document.getElementById("title-data"),
    numberData = document.getElementById("number-data"),
    textData = document.getElementById("text-data"),
    msgChristmas = document.getElementById("msg-christmas");

const christmasCountdown = () => {
    const now = new Date();
    const currentMonth = now.getMonth() + 1; // 1–12
    const currentDay = now.getDate();

    // Calculate next Christmas year
    let nextChristmasYear = now.getFullYear();
    if (currentMonth === 12 && currentDay > 25) nextChristmasYear += 1;

    const christmasDay = new Date(`Dec 25, ${nextChristmasYear} 00:00:00`);
    const timeLeft = christmasDay - now;

    if (timeLeft > 0) {
        // Show countdown
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        let seconds = Math.floor((timeLeft / 1000) % 60);

        // Default: show days
        let displayNumber = days;
        let displayText = "Days";

        if (days === 0 && hours > 0) {
            displayNumber = hours;
            displayText = "Hours";
        } else if (days === 0 && hours === 0 && minutes > 0) {
            displayNumber = minutes;
            displayText = "Minutes";
        } else if (days === 0 && hours === 0 && minutes === 0) {
            displayNumber = seconds;
            displayText = "Seconds";
        }

        numberData.innerHTML = displayNumber < 10 ? `0${displayNumber}` : displayNumber;
        textData.innerHTML = displayText;

        // Show countdown elements
        titleData.style.display = "block";
        msgChristmas.style.display = "none";

    } else if (currentMonth === 12 && currentDay === 25) {
        // It's Christmas!
        titleData.style.display = "none";
        msgChristmas.style.display = "block";
        msgChristmas.innerHTML = "Today is Dec 25, Merry Christmas 🎄🎅";

    } else {
        // Reset after Christmas (Dec 26+)
        titleData.style.display = "block";
        numberData.innerHTML = "00";
        textData.innerHTML = "Days";
        msgChristmas.style.display = "none";
    }
};

// Run countdown immediately and every second
christmasCountdown();
setInterval(christmasCountdown, 1000);
