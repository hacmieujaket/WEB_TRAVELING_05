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