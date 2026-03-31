/*lớp phủ cho thanh scroll */
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/*hiện thị submit*/
const form = document.querySelector(".search-bar");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const destination = form.querySelector('input[type="text"]').value;
    const budget = form.querySelector('input[type="number"]').value;

    alert(`Bạn đang tìm: ${destination} với ngân sách ${budget}$`);
});

/*trending */
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", function () {
        const location = card.querySelector("h3").innerText;
        alert(`Bạn đã chọn ${location}`);
    });
});