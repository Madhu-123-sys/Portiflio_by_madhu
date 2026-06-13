// =========================
// Typing Animation
// =========================

const text = [
    "Web Developer",
    "Python Learner",
    "Future Software Engineer",
    "Tech Enthusiast",
    "Problem Solver"
];

let index = 0;
let charIndex = 0;

const typingElement = document.querySelector(".typing");

function typeEffect() {

    if (charIndex < text[index].length) {

        typingElement.textContent +=
        text[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.textContent =
        text[index].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        index++;

        if (index >= text.length) {
            index = 0;
        }

        setTimeout(typeEffect, 300);
    }
}

typeEffect();


// =========================
// Contact Form
// =========================

document
.getElementById("contactForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    alert(
        "Thank you for contacting me! 😊\n\nI will get back to you soon."
    );

    this.reset();
});


// =========================
// Active Navbar Highlight
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 100;

        const sectionHeight =
        section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {
            link.classList.add("active");
        }
    });
});


// =========================
// Scroll To Top Button
// =========================

const topBtn =
document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px 15px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// =========================
// Welcome Message
// =========================

window.onload = function() {

    console.log(
        "Welcome to Madhuri's Portfolio 🚀"
    );
};