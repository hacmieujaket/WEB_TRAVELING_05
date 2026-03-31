function filterPlaces(region) {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (region === "all" || card.dataset.region === region) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}



function search() {
    alert("Đang tìm kiếm...");
}