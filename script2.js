/* =========================================================
   ELEMENTS
   ========================================================= */

const openButton =
    document.getElementById("openButton");

const wishButton =
    document.getElementById("wishButton");

const wishResult =
    document.getElementById("wishResult");


/* =========================================================
   OPEN SURPRISE
   ========================================================= */

openButton.addEventListener("click", function () {

    // Membuat efek confetti
    createConfetti();

    // Scroll ke bagian ulang tahun
    setTimeout(function () {

        document
            .getElementById("birthday")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 500);

});


/* =========================================================
   CONFETTI
   ========================================================= */

function createConfetti() {

    const symbols = [
        "🎉",
        "🎊",
        "✨",
        "💖",
        "🎈",
        "⭐",
        "🌟"
    ];

    for (let i = 0; i < 60; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        confetti.style.position =
            "fixed";

        confetti.style.top =
            "-50px";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";

        confetti.style.zIndex =
            "9999";

        confetti.style.pointerEvents =
            "none";

        confetti.style.transition =
            "transform 3s linear, opacity 3s linear";

        document.body.appendChild(confetti);


        // Memberikan variasi kecepatan
        const duration =
            Math.random() * 2 + 2;


        setTimeout(function () {

            confetti.style.transform =
                `translateY(110vh) rotate(${Math.random() * 720}deg)`;

            confetti.style.opacity =
                "0";

        }, 50);


        // Hapus setelah animasi selesai
        setTimeout(function () {

            confetti.remove();

        }, duration * 1000 + 500);

    }

}


/* =========================================================
   MAKE A WISH
   ========================================================= */

wishButton.addEventListener("click", function () {

    wishResult.classList.add("show");

    wishButton.innerHTML =
        "✨ Wish Made! ✨";

    createConfetti();

});


/* =========================================================
   FLOATING HEARTS
   ========================================================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position =
        "fixed";

    heart.style.bottom =
        "-30px";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 15 + 15 + "px";

    heart.style.zIndex =
        "1";

    heart.style.pointerEvents =
        "none";

    heart.style.opacity =
        "0.7";

    heart.style.transition =
        "transform 6s linear, opacity 6s linear";

    document.body.appendChild(heart);


    setTimeout(function () {

        heart.style.transform =
            `translateY(-110vh) translateX(${Math.random() * 100 - 50}px)`;

        heart.style.opacity =
            "0";

    }, 100);


    setTimeout(function () {

        heart.remove();

    }, 6500);

}


/* =========================================================
   CREATE HEART EVERY FEW SECONDS
   ========================================================= */

setInterval(function () {

    createHeart();

}, 3500);


/* =========================================================
   PAGE LOAD EFFECT
   ========================================================= */

window.addEventListener("load", function () {

    document.body.style.opacity = "0";

    setTimeout(function () {

        document.body.style.transition =
            "opacity 1.2s ease";

        document.body.style.opacity =
            "1";

    }, 100);

});


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const sections =
    document.querySelectorAll("section");


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


sections.forEach(function (section) {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(40px)";

    section.style.transition =
        "opacity 1s ease, transform 1s ease";

    observer.observe(section);

});