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

function showDetail(place) {

    const detail = document.getElementById("detail");

    const title = document.getElementById("title");
    const image = document.getElementById("image");
    const desc = document.getElementById("desc");
    const highlights = document.getElementById("highlights");
    const schedule = document.getElementById("schedule");

    detail.style.display = "block";
    highlights.innerHTML = "";

    // ===== PHÚ QUỐC =====
    if (place === "phuquoc") {
        title.innerText = "Phú Quốc";
        image.src = "source/phuquoc.jpg";
        desc.innerText = "Phú Quốc – thiên đường biển đảo với nước trong xanh, cát trắng mịn và không gian nghỉ dưỡng tuyệt vời.";

        highlights.innerHTML = `
            <li>🏝️ Bãi Sao – bãi biển đẹp top Việt Nam</li>
            <li>🚡 Cáp treo Hòn Thơm vượt biển dài nhất thế giới</li>
            <li>🦞 Hải sản tươi sống cực ngon</li>
        `;
        schedule.innerText = "Ngày 1: tắm biển → Ngày 2: tour đảo → Ngày 3: nghỉ dưỡng.";
    }

    // ===== ĐÀ NẴNG =====
    else if (place === "danang") {
        title.innerText = "Đà Nẵng";
        image.src = "source/danang1.jpg";
        desc.innerText = "Đà Nẵng – thành phố đáng sống với biển xanh, núi non và những cây cầu biểu tượng.";

        highlights.innerHTML = `
            <li>🔥 Cầu Rồng phun lửa</li>
            <li>🏔️ Bà Nà Hills</li>
            <li>🏖️ Biển Mỹ Khê</li>
        `;
        schedule.innerText = "Ngày 1: biển → Ngày 2: Bà Nà → Ngày 3: city tour.";
    }

    // ===== HÀ NỘI =====
    else if (place === "hanoi") {
        title.innerText = "Hà Nội";
        image.src = "source/hanoi.jpg";
        desc.innerText = "Hà Nội – thủ đô nghìn năm văn hiến với vẻ đẹp cổ kính và ẩm thực phong phú.";

        highlights.innerHTML = `
            <li>🏞️ Hồ Gươm</li>
            <li>🏮 Phố cổ</li>
            <li>🍜 Ẩm thực Hà Nội</li>
        `;
        schedule.innerText = "2-3 ngày khám phá phố cổ và ẩm thực.";
    }

    // ===== BẾN NINH KIỀU =====
    else if (place === "ninhkieu") {
        title.innerText = "Bến Ninh Kiều";
        image.src = "source/ninhkieu.jpg";
        desc.innerText = "Bến Ninh Kiều – trái tim Cần Thơ, nơi hội tụ vẻ đẹp sông nước miền Tây.";

        highlights.innerHTML = `
            <li>🌇 Ngắm hoàng hôn</li>
            <li>🚢 Du thuyền sông Hậu</li>
            <li>🍢 Chợ đêm</li>
        `;
        schedule.innerText = "Chiều dạo bến → Tối du thuyền.";
    }

    // ===== CÁI RĂNG =====
    else if (place === "cairang") {
        title.innerText = "Chợ nổi Cái Răng";
        image.src = "source/cairang.jpg";
        desc.innerText = "Chợ nổi Cái Răng – nét văn hóa đặc trưng miền Tây.";

        highlights.innerHTML = `
            <li>🚤 Buôn bán trên sông</li>
            <li>🍍 Trái cây tươi</li>
            <li>📸 Trải nghiệm độc đáo</li>
        `;
        schedule.innerText = "Đi chợ từ sáng sớm.";
    }

    // ===== HỘI AN =====
    else if (place === "hoian") {
        title.innerText = "Hội An";
        image.src = "source/hoian1.jpg";
        desc.innerText = "Hội An – phố cổ lung linh với đèn lồng và vẻ đẹp hoài niệm.";

        highlights.innerHTML = `
            <li>🏮 Đèn lồng rực rỡ</li>
            <li>🍜 Cao lầu</li>
            <li>📸 Check-in phố cổ</li>
        `;
        schedule.innerText = "Chiều dạo phố → Tối thả đèn.";
    }

    // ===== HUẾ =====
    else if (place === "hue") {
        title.innerText = "Huế";
        image.src = "source/hue.jpg";
        desc.innerText = "Huế – cố đô với nét đẹp trầm mặc và lịch sử lâu đời.";

        highlights.innerHTML = `
            <li>🏰 Đại Nội</li>
            <li>⛩️ Chùa Thiên Mụ</li>
            <li>🍲 Ẩm thực Huế</li>
        `;
        schedule.innerText = "Tham quan di tích + ẩm thực.";
    }

    // ===== SAPA =====
    else if (place === "sapa") {
        title.innerText = "Sapa";
        image.src = "source/sapa.jpg";
        desc.innerText = "Sapa – thiên đường vùng cao với cảnh sắc hùng vĩ.";

        highlights.innerHTML = `
            <li>🏔️ Fansipan</li>
            <li>🌾 Ruộng bậc thang</li>
            <li>🌫️ Săn mây</li>
        `;
        schedule.innerText = "2-3 ngày trekking.";
    }

    // ===== HẠ LONG =====
    else if (place === "halong") {
        title.innerText = "Hạ Long";
        image.src = "source/halong.jpg";
        desc.innerText = "Vịnh Hạ Long – kỳ quan thiên nhiên thế giới.";

        highlights.innerHTML = `
            <li>⛵ Du thuyền</li>
            <li>🏝️ Hang động</li>
            <li>📸 Cảnh đẹp</li>
        `;
        schedule.innerText = "Tour 1-2 ngày.";
    }

    // ===== CÔN ĐẢO =====
    else if (place === "condao") {
        title.innerText = "Côn Đảo";
        image.src = "source/condao.jpg";
        desc.innerText = "Côn Đảo – thiên đường biển hoang sơ.";

        highlights.innerHTML = `
            <li>🏖️ Biển sạch</li>
            <li>🕯️ Nghĩa trang Hàng Dương</li>
            <li>🐢 Xem rùa</li>
        `;
        schedule.innerText = "Nghỉ dưỡng 2-3 ngày.";
    }

    // 👉 scroll xuống phần detail
    detail.scrollIntoView({ behavior: "smooth" });
}