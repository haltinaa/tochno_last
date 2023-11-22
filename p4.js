document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("card-visible");
                observer.unobserve(entry.target);
            }
        });
    });

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        observer.observe(card);
    });
});
