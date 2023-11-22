document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("mouseover", function () {
            anime({
                targets: this,
                translateX: 7,
                translateY: -7, 
                scale: 1.1, 
                easing: "easeInOutQuad", 
                duration: 300, 
            });
        });

        card.addEventListener("mouseout", function () {
            anime({
                targets: this,
                translateX: 0,
                translateY: 0,
                scale: 1,
                easing: "easeInOutQuad",
                duration: 300,
            });
        });
    });
});




const heading = document.querySelector(".display-5");

heading.addEventListener("mouseover", function () {
    anime({
        targets: this,
        rotate: 360, // Угол вращения
        duration: 1000,
        easing: "easeInOutQuad",
    });
});

