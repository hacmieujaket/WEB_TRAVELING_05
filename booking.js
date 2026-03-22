
const dsKhachSan = [
    { id: 1, ten: "Hanoi Grand Hotel", diaChi: "1 Trần Bình, Cầu Giấy", sao: 5, anhUrl: "", gia: 2000000, tinh: "Hà Nội" },
    { id: 2, ten: "Sun Travel Hotel", diaChi: "10 Hàng Bài, Hoàn Kiếm", sao: 4, anhUrl: "", gia: 1500000, tinh: "Hà Nội" },
    { id: 3, ten: "Hanoi Pearl Hotel", diaChi: "50 Lý Thường Kiệt, Hoàn Kiếm", sao: 4, anhUrl: "", gia: 1700000, tinh: "Hà Nội" },
    { id: 4, ten: "Golden Lotus Hotel", diaChi: "12 Trần Phú, Ba Đình", sao: 5, anhUrl: "", gia: 2100000, tinh: "Hà Nội" },
    { id: 5, ten: "Lotus Central Hotel", diaChi: "5 Nguyễn Thái Học, Hoàn Kiếm", sao: 3, anhUrl: "", gia: 1200000, tinh: "Hà Nội" },
    { id: 6, ten: "Danang Beach Hotel", diaChi: "1 Nguyễn Văn Linh, Đà Nẵng", sao: 5, anhUrl: "", gia: 1800000, tinh: "Đà Nẵng" },
    { id: 7, ten: "Sea View Resort", diaChi: "25 Võ Nguyên Giáp, Đà Nẵng", sao: 4, anhUrl: "", gia: 1400000, tinh: "Đà Nẵng" },
    { id: 8, ten: "Sunny Beach Hotel", diaChi: "12 Trần Phú, Hải Châu, Đà Nẵng", sao: 4, anhUrl: "", gia: 1600000, tinh: "Đà Nẵng" },
    { id: 9, ten: "Dragon Hotel", diaChi: "8 Bạch Đằng, Sơn Trà, Đà Nẵng", sao: 5, anhUrl: "", gia: 2000000, tinh: "Đà Nẵng" },
    { id: 10, ten: "Blue Ocean Hotel", diaChi: "15 Nguyễn Văn Thoại, Ngũ Hành Sơn, Đà Nẵng", sao: 3, anhUrl: "", gia: 1300000, tinh: "Đà Nẵng" },
    { id: 11, ten: "Saigon Central Hotel", diaChi: "10 Lê Lợi, Quận 1, TP HCM", sao: 5, anhUrl: "", gia: 2200000, tinh: "TP HCM" },
    { id: 12, ten: "Riverside Hotel", diaChi: "20 Nguyễn Huệ, Quận 1, TP HCM", sao: 4, anhUrl: "", gia: 1800000, tinh: "TP HCM" },
    { id: 13, ten: "Grand Saigon Hotel", diaChi: "5 Đồng Khởi, Quận 1, TP HCM", sao: 5, anhUrl: "", gia: 2500000, tinh: "TP HCM" },
    { id: 14, ten: "Lotus Hotel", diaChi: "12 Hai Bà Trưng, Quận 1, TP HCM", sao: 4, anhUrl: "", gia: 1600000, tinh: "TP HCM" },
    { id: 15, ten: "Saigon Pearl Hotel", diaChi: "50 Nguyễn Cư Trinh, Quận 1, TP HCM", sao: 3, anhUrl: "", gia: 1400000, tinh: "TP HCM" },
    { id: 16, ten: "HP Royal Hotel", diaChi: "20 Lạch Tray, Ngô Quyền, Hải Phòng", sao: 5, anhUrl: "", gia: 2000000, tinh: "Hải Phòng" },
    { id: 17, ten: "Hai Phong Grand", diaChi: "15 Trần Phú, Hồng Bàng, Hải Phòng", sao: 4, anhUrl: "", gia: 1800000, tinh: "Hải Phòng" },
    { id: 18, ten: "Oriental Hotel HP", diaChi: "5 Hoàng Diệu, Hồng Bàng, Hải Phòng", sao: 4, anhUrl: "", gia: 1600000, tinh: "Hải Phòng" },
    { id: 19, ten: "Sea Pearl Hotel", diaChi: "10 Nguyễn Văn Linh, Hải An, Hải Phòng", sao: 3, anhUrl: "", gia: 1400000, tinh: "Hải Phòng" },
    { id: 20, ten: "Lighthouse Hotel", diaChi: "8 Lê Lợi, Ngô Quyền, Hải Phòng", sao: 5, anhUrl: "", gia: 2100000, tinh: "Hải Phòng" },
    { id: 21, ten: "Can Tho Riverside", diaChi: "1 Hai Bà Trưng, Ninh Kiều, Cần Thơ", sao: 5, anhUrl: "", gia: 1900000, tinh: "Cần Thơ" },
    { id: 22, ten: "Mekong Pearl Hotel", diaChi: "10 Lê Lợi, Ninh Kiều, Cần Thơ", sao: 4, anhUrl: "", gia: 1700000, tinh: "Cần Thơ" },
    { id: 23, ten: "Lotus Hotel CT", diaChi: "15 Trần Văn Hoài, Cái Khế, Cần Thơ", sao: 4, anhUrl: "", gia: 1500000, tinh: "Cần Thơ" },
    { id: 24, ten: "Golden River Hotel", diaChi: "20 Nguyễn Trãi, Ninh Kiều, Cần Thơ", sao: 3, anhUrl: "", gia: 1400000, tinh: "Cần Thơ" },
    { id: 25, ten: "Can Tho Central Hotel", diaChi: "5 Nguyễn Văn Cừ, Ninh Kiều, Cần Thơ", sao: 5, anhUrl: "", gia: 2000000, tinh: "Cần Thơ" },
    { id: 26, ten: "Hue Royal Hotel", diaChi: "10 Lê Lợi, TP Huế", sao: 5, anhUrl: "", gia: 2000000, tinh: "Huế" },
    { id: 27, ten: "Imperial Hotel Hue", diaChi: "5 Trần Hưng Đạo, TP Huế", sao: 4, anhUrl: "", gia: 1800000, tinh: "Huế" },
    { id: 28, ten: "Perfume River Hotel", diaChi: "15 Nguyễn Huệ, TP Huế", sao: 4, anhUrl: "", gia: 1600000, tinh: "Huế" },
    { id: 29, ten: "Lotus Hue Hotel", diaChi: "20 Phan Bội Châu, TP Huế", sao: 3, anhUrl: "", gia: 1400000, tinh: "Huế" },
    { id: 30, ten: "Royal Lotus Hue", diaChi: "8 Trần Cao Vân, TP Huế", sao: 5, anhUrl: "", gia: 2100000, tinh: "Huế" },
    { id: 31, ten: "Halong Bay Hotel", diaChi: "10 Hạ Long, Hạ Long", sao: 5, anhUrl: "", gia: 2100000, tinh: "Quảng Ninh" },
    { id: 32, ten: "Seaview Quang Ninh", diaChi: "15 Trần Hưng Đạo, Hạ Long", sao: 4, anhUrl: "", gia: 1800000, tinh: "Quảng Ninh" },
    { id: 33, ten: "Halong Pearl Hotel", diaChi: "20 Nguyễn Văn Cừ, Hạ Long", sao: 4, anhUrl: "", gia: 1700000, tinh: "Quảng Ninh" },
    { id: 34, ten: "Lotus Hotel QN", diaChi: "5 Lê Lợi, Hạ Long", sao: 3, anhUrl: "", gia: 1500000, tinh: "Quảng Ninh" },
    { id: 35, ten: "Royal Halong Hotel", diaChi: "8 Trần Phú, Hạ Long", sao: 5, anhUrl: "", gia: 2200000, tinh: "Quảng Ninh" },
    { id: 36, ten: "Tuyen Quang Hotel", diaChi: "10 Nguyễn Trãi, Tuyên Quang", sao: 5, anhUrl: "", gia: 1500000, tinh: "Tuyên Quang" },
    { id: 37, ten: "Lotus TQ Hotel", diaChi: "15 Lê Lợi, Tuyên Quang", sao: 4, anhUrl: "", gia: 1300000, tinh: "Tuyên Quang" },
    { id: 38, ten: "Sunrise Hotel TQ", diaChi: "20 Trần Phú, Tuyên Quang", sao: 4, anhUrl: "", gia: 1200000, tinh: "Tuyên Quang" },
    { id: 39, ten: "Mountain View Hotel", diaChi: "5 Hoàng Văn Thụ, Tuyên Quang", sao: 3, anhUrl: "", gia: 1100000, tinh: "Tuyên Quang" },
    { id: 40, ten: "Royal Lotus TQ", diaChi: "8 Nguyễn Văn Linh, Tuyên Quang", sao: 5, anhUrl: "", gia: 1600000, tinh: "Tuyên Quang" },
    { id: 41, ten: "Sapa Luxury Hotel", diaChi: "10 Phan Đình Phùng, Lào Cai", sao: 5, anhUrl: "", gia: 2000000, tinh: "Lào Cai" },
    { id: 42, ten: "Lao Cai Pearl Hotel", diaChi: "15 Trần Hưng Đạo, Lào Cai", sao: 4, anhUrl: "", gia: 1800000, tinh: "Lào Cai" },
    { id: 43, ten: "Lotus Sapa Hotel", diaChi: "20 Nguyễn Huệ, Lào Cai", sao: 4, anhUrl: "", gia: 1700000, tinh: "Lào Cai" },
    { id: 44, ten: "Mountain View Lao Cai", diaChi: "5 Lê Lợi, Lào Cai", sao: 3, anhUrl: "", gia: 1500000, tinh: "Lào Cai" },
    { id: 45, ten: "Royal Lotus Sapa", diaChi: "8 Trần Phú, Lào Cai", sao: 5, anhUrl: "", gia: 2100000, tinh: "Lào Cai" },
    { id: 46, ten: "Thai Nguyen Hotel", diaChi: "10 Hoàng Văn Thụ, Thái Nguyên", sao: 5, anhUrl: "", gia: 1600000, tinh: "Thái Nguyên" },
    { id: 47, ten: "Lotus Thai Nguyen", diaChi: "15 Trần Phú, Thái Nguyên", sao: 4, anhUrl: "", gia: 1400000, tinh: "Thái Nguyên" },
    { id: 48, ten: "Sunrise Hotel TN", diaChi: "20 Nguyễn Trãi, Thái Nguyên", sao: 4, anhUrl: "", gia: 1300000, tinh: "Thái Nguyên" },
    { id: 49, ten: "Mountain View TN", diaChi: "5 Lê Lợi, Thái Nguyên", sao: 3, anhUrl: "", gia: 1200000, tinh: "Thái Nguyên" },
    { id: 50, ten: "Royal Lotus TN", diaChi: "8 Trần Phú, Thái Nguyên", sao: 5, anhUrl: "", gia: 1700000, tinh: "Thái Nguyên" },
    { id: 51, ten: "Bac Ninh Hotel", diaChi: "10 Lý Thái Tổ, Bắc Ninh", sao: 5, anhUrl: "", gia: 1500000, tinh: "Bắc Ninh" },
    { id: 52, ten: "Lotus Bac Ninh", diaChi: "15 Trần Hưng Đạo, Bắc Ninh", sao: 4, anhUrl: "", gia: 1300000, tinh: "Bắc Ninh" },
    { id: 53, ten: "Sunrise Bac Ninh", diaChi: "20 Nguyễn Huệ, Bắc Ninh", sao: 4, anhUrl: "", gia: 1200000, tinh: "Bắc Ninh" },
    { id: 54, ten: "Mountain View BN", diaChi: "5 Hoàng Hoa Thám, Bắc Ninh", sao: 3, anhUrl: "", gia: 1100000, tinh: "Bắc Ninh" },
    { id: 55, ten: "Royal Lotus BN", diaChi: "8 Lê Lợi, Bắc Ninh", sao: 5, anhUrl: "", gia: 1600000, tinh: "Bắc Ninh" },
    { id: 56, ten: "Hung Yen Hotel", diaChi: "10 Lý Thường Kiệt, Hưng Yên", sao: 5, anhUrl: "", gia: 1400000, tinh: "Hưng Yên" },
    { id: 57, ten: "Lotus Hung Yen", diaChi: "15 Trần Hưng Đạo, Hưng Yên", sao: 4, anhUrl: "", gia: 1200000, tinh: "Hưng Yên" },
    { id: 58, ten: "Sunrise HY Hotel", diaChi: "20 Nguyễn Trãi, Hưng Yên", sao: 4, anhUrl: "", gia: 1100000, tinh: "Hưng Yên" },
    { id: 59, ten: "Mountain View HY", diaChi: "5 Lê Lợi, Hưng Yên", sao: 3, anhUrl: "", gia: 1000000, tinh: "Hưng Yên" },
    { id: 60, ten: "Royal Lotus HY", diaChi: "8 Trần Phú, Hưng Yên", sao: 5, anhUrl: "", gia: 1500000, tinh: "Hưng Yên" },
    { id: 61, ten: "Ninh Binh Hotel", diaChi: "10 Trần Hưng Đạo, Ninh Bình", sao: 5, anhUrl: "", gia: 1600000, tinh: "Ninh Bình" },
    { id: 62, ten: "Lotus NB Hotel", diaChi: "15 Lê Lợi, Ninh Bình", sao: 4, anhUrl: "", gia: 1400000, tinh: "Ninh Bình" },
    { id: 63, ten: "Sunrise NB", diaChi: "20 Nguyễn Trãi, Ninh Bình", sao: 4, anhUrl: "", gia: 1300000, tinh: "Ninh Bình" },
    { id: 64, ten: "Mountain View NB", diaChi: "5 Hoàng Văn Thụ, Ninh Bình", sao: 3, anhUrl: "", gia: 1200000, tinh: "Ninh Bình" },
    { id: 65, ten: "Royal Lotus NB", diaChi: "8 Trần Phú, Ninh Bình", sao: 5, anhUrl: "", gia: 1700000, tinh: "Ninh Bình" },
    { id: 66, ten: "Quang Tri Hotel", diaChi: "10 Lê Lợi, Quảng Trị", sao: 5, anhUrl: "", gia: 1400000, tinh: "Quảng Trị" },
    { id: 67, ten: "Lotus QT Hotel", diaChi: "15 Trần Hưng Đạo, Quảng Trị", sao: 4, anhUrl: "", gia: 1200000, tinh: "Quảng Trị" },
    { id: 68, ten: "Sunrise QT", diaChi: "20 Nguyễn Huệ, Quảng Trị", sao: 4, anhUrl: "", gia: 1100000, tinh: "Quảng Trị" },
    { id: 69, ten: "Mountain View QT", diaChi: "5 Hoàng Hoa Thám, Quảng Trị", sao: 3, anhUrl: "", gia: 1000000, tinh: "Quảng Trị" },
    { id: 70, ten: "Royal Lotus QT", diaChi: "8 Lê Lợi, Quảng Trị", sao: 5, anhUrl: "", gia: 1500000, tinh: "Quảng Trị" },
    { id: 71, ten: "Central Hotel Quảng Ngãi", diaChi: "01 Hùng Vương, TP Quảng Ngãi", sao: 4, anhUrl: "", gia: 900000, tinh: "Quảng Ngãi" },
    { id: 72, ten: "New CC Hotel", diaChi: "09 Phan Đình Phùng, TP Quảng Ngãi", sao: 3, anhUrl: "", gia: 750000, tinh: "Quảng Ngãi" },
    { id: 73, ten: "Song Trà Hotel", diaChi: "02 Quang Trung, TP Quảng Ngãi", sao: 4, anhUrl: "", gia: 880000, tinh: "Quảng Ngãi" },
    { id: 74, ten: "Hùng Vương Hotel", diaChi: "45 Lê Trung Đình, TP Quảng Ngãi", sao: 3, anhUrl: "", gia: 800000, tinh: "Quảng Ngãi" },
    { id: 75, ten: "Cocoland River Beach Resort", diaChi: "Thôn Phước Thiện, Bình Sơn, Quảng Ngãi", sao: 5, anhUrl: "", gia: 1800000, tinh: "Quảng Ngãi" },
    { id: 76, ten: "Hoàng Anh Gia Lai Hotel", diaChi: "01 Phù Đổng, TP Pleiku", sao: 4, anhUrl: "", gia: 950000, tinh: "Gia Lai" },
    { id: 77, ten: "Tre Xanh Plaza", diaChi: "18 Lê Lai, TP Pleiku", sao: 4, anhUrl: "", gia: 1000000, tinh: "Gia Lai" },
    { id: 78, ten: "Pleiku Hotel", diaChi: "03 Nguyễn Tất Thành, TP Pleiku", sao: 3, anhUrl: "", gia: 700000, tinh: "Gia Lai" },
    { id: 79, ten: "Khách sạn Đức Long Gia Lai", diaChi: "90 Lý Nam Đế, TP Pleiku", sao: 4, anhUrl: "", gia: 920000, tinh: "Gia Lai" },
    { id: 80, ten: "Le Centre Hotel", diaChi: "22 Nguyễn Văn Trỗi, TP Pleiku", sao: 3, anhUrl: "", gia: 780000, tinh: "Gia Lai" },
    { id: 81, ten: "Vinpearl Resort Nha Trang", diaChi: "Đảo Hòn Tre, Nha Trang", sao: 5, anhUrl: "", gia: 3500000, tinh: "Khánh Hòa" },
    { id: 82, ten: "InterContinental Nha Trang", diaChi: "32 Trần Phú, Nha Trang", sao: 5, anhUrl: "", gia: 3200000, tinh: "Khánh Hòa" },
    { id: 83, ten: "Novotel Nha Trang", diaChi: "50 Trần Phú, Nha Trang", sao: 4, anhUrl: "", gia: 2200000, tinh: "Khánh Hòa" },
    { id: 84, ten: "Liberty Central Nha Trang", diaChi: "07 Biệt Thự, Nha Trang", sao: 4, anhUrl: "", gia: 2000000, tinh: "Khánh Hòa" },
    { id: 85, ten: "Dendro Gold Hotel", diaChi: "86/4 Trần Phú, Nha Trang", sao: 4, anhUrl: "", gia: 1700000, tinh: "Khánh Hòa" },
    { id: 86, ten: "Dalat Palace Heritage Hotel", diaChi: "02 Trần Phú, Đà Lạt", sao: 5, anhUrl: "", gia: 3200000, tinh: "Lâm Đồng" },
    { id: 87, ten: "Terracotta Hotel & Resort", diaChi: "Hồ Tuyền Lâm, Đà Lạt", sao: 4, anhUrl: "", gia: 2100000, tinh: "Lâm Đồng" },
    { id: 88, ten: "Ana Mandara Villas Dalat", diaChi: "Đường Lê Lai, Đà Lạt", sao: 5, anhUrl: "", gia: 2800000, tinh: "Lâm Đồng" },
    { id: 89, ten: "Colline Dalat Hotel", diaChi: "10 Phan Bội Châu, Đà Lạt", sao: 4, anhUrl: "", gia: 1800000, tinh: "Lâm Đồng" },
    { id: 90, ten: "La Sapinette Hotel", diaChi: "01 Phan Chu Trinh, Đà Lạt", sao: 4, anhUrl: "", gia: 1600000, tinh: "Lâm Đồng" },
    { id: 91, ten: "Mường Thanh Luxury Buôn Ma Thuột", diaChi: "81 Nguyễn Tất Thành", sao: 4, anhUrl: "", gia: 1700000, tinh: "Đắk Lắk" },
    { id: 92, ten: "Elephants Hotel", diaChi: "142 Phan Chu Trinh, Buôn Ma Thuột", sao: 3, anhUrl: "", gia: 900000, tinh: "Đắk Lắk" },
    { id: 93, ten: "Sài Gòn Ban Mê Hotel", diaChi: "01 Phan Chu Trinh", sao: 4, anhUrl: "", gia: 1500000, tinh: "Đắk Lắk" },
    { id: 94, ten: "Dakruco Hotel", diaChi: "30 Nguyễn Chí Thanh", sao: 4, anhUrl: "", gia: 1400000, tinh: "Đắk Lắk" },
    { id: 95, ten: "Coffee Tour Resort", diaChi: "Km 3 Quốc lộ 14", sao: 3, anhUrl: "", gia: 1000000, tinh: "Đắk Lắk" },
    { id: 96, ten: "The Mira Central Park Hotel", diaChi: "128 Nguyễn Ái Quốc, Biên Hòa", sao: 5, anhUrl: "", gia: 2200000, tinh: "Đồng Nai" },
    { id: 97, ten: "Aurora Hotel Plaza", diaChi: "253 Phạm Văn Thuận, Biên Hòa", sao: 4, anhUrl: "", gia: 1500000, tinh: "Đồng Nai" },
    { id: 98, ten: "Ha Trinh Hotel", diaChi: "18/99 Nguyễn Ái Quốc", sao: 3, anhUrl: "", gia: 850000, tinh: "Đồng Nai" },
    { id: 99, ten: "Ngọc Sơn Hotel", diaChi: "34 Đồng Khởi", sao: 3, anhUrl: "", gia: 800000, tinh: "Đồng Nai" },
    { id: 100, ten: "Biên Hòa Hotel", diaChi: "05 Võ Thị Sáu", sao: 4, anhUrl: "", gia: 1100000, tinh: "Đồng Nai" },
    { id: 101, ten: "Melia Vinpearl Tây Ninh", diaChi: "90 Lê Duẩn", sao: 5, anhUrl: "", gia: 2500000, tinh: "Tây Ninh" },
    { id: 102, ten: "Sunrise Hotel Tây Ninh", diaChi: "81 Hoàng Lê Kha", sao: 4, anhUrl: "", gia: 1200000, tinh: "Tây Ninh" },
    { id: 103, ten: "Mai Vy Hotel", diaChi: "15 Nguyễn Thái Học", sao: 3, anhUrl: "", gia: 700000, tinh: "Tây Ninh" },
    { id: 104, ten: "Golden Hotel Tây Ninh", diaChi: "22 Lý Thường Kiệt", sao: 4, anhUrl: "", gia: 950000, tinh: "Tây Ninh" },
    { id: 105, ten: "Victory Hotel", diaChi: "10 Trần Hưng Đạo", sao: 3, anhUrl: "", gia: 800000, tinh: "Tây Ninh" },
    { id: 106, ten: "Sài Gòn Vĩnh Long Hotel", diaChi: "02 Trưng Nữ Vương", sao: 4, anhUrl: "", gia: 1200000, tinh: "Vĩnh Long" },
    { id: 107, ten: "Phước Thịnh Hotel", diaChi: "18 Phạm Thái Bường", sao: 3, anhUrl: "", gia: 750000, tinh: "Vĩnh Long" },
    { id: 108, ten: "Mekong Riverside Boutique", diaChi: "08 Hai Bà Trưng", sao: 4, anhUrl: "", gia: 1100000, tinh: "Vĩnh Long" },
    { id: 109, ten: "Happy Hotel Vĩnh Long", diaChi: "33 Nguyễn Huệ", sao: 3, anhUrl: "", gia: 700000, tinh: "Vĩnh Long" },
    { id: 110, ten: "River View Hotel", diaChi: "55 Trần Phú", sao: 4, anhUrl: "", gia: 950000, tinh: "Vĩnh Long" },
    { id: 111, ten: "Bông Sen Hotel Cao Lãnh", diaChi: "10 Nguyễn Huệ, Cao Lãnh", sao: 3, anhUrl: "", gia: 750000, tinh: "Đồng Tháp" },
    { id: 112, ten: "Sao Mai Hotel", diaChi: "05 Trần Hưng Đạo, Cao Lãnh", sao: 4, anhUrl: "", gia: 900000, tinh: "Đồng Tháp" },
    { id: 113, ten: "Huỳnh Đức Hotel", diaChi: "18 Lý Thường Kiệt, Sa Đéc", sao: 3, anhUrl: "", gia: 700000, tinh: "Đồng Tháp" },
    { id: 114, ten: "Thư Lê Hotel", diaChi: "44 Nguyễn Trãi, Sa Đéc", sao: 3, anhUrl: "", gia: 720000, tinh: "Đồng Tháp" },
    { id: 115, ten: "Sen Hồng Hotel", diaChi: "22 Phan Chu Trinh, Cao Lãnh", sao: 4, anhUrl: "", gia: 950000, tinh: "Đồng Tháp" },
    { id: 116, ten: "Mường Thanh Luxury Cà Mau", diaChi: "01 Phan Ngọc Hiển, TP Cà Mau", sao: 5, anhUrl: "", gia: 2000000, tinh: "Cà Mau" },
    { id: 117, ten: "Anh Nguyet Hotel", diaChi: "207 Phan Ngọc Hiển, TP Cà Mau", sao: 4, anhUrl: "", gia: 1200000, tinh: "Cà Mau" },
    { id: 118, ten: "Best CM Hotel", diaChi: "55 Nguyễn Tất Thành, TP Cà Mau", sao: 3, anhUrl: "", gia: 800000, tinh: "Cà Mau" },
    { id: 119, ten: "International Hotel Cà Mau", diaChi: "90 Lý Thường Kiệt", sao: 4, anhUrl: "", gia: 1100000, tinh: "Cà Mau" },
    { id: 120, ten: "Phú Cường Hotel", diaChi: "10 Hùng Vương", sao: 4, anhUrl: "", gia: 1300000, tinh: "Cà Mau" },
    { id: 121, ten: "Victoria Châu Đốc Hotel", diaChi: "01 Lê Lợi, Châu Đốc", sao: 5, anhUrl: "", gia: 2600000, tinh: "An Giang" },
    { id: 122, ten: "Đông Xuyên Hotel", diaChi: "09 Lý Thái Tổ, Long Xuyên", sao: 4, anhUrl: "", gia: 1100000, tinh: "An Giang" },
    { id: 123, ten: "Hòa Bình Hotel", diaChi: "12 Nguyễn Huệ, Long Xuyên", sao: 3, anhUrl: "", gia: 800000, tinh: "An Giang" },
    { id: 124, ten: "Châu Phố Hotel", diaChi: "88 Trưng Nữ Vương, Châu Đốc", sao: 3, anhUrl: "", gia: 850000, tinh: "An Giang" },
    { id: 125, ten: "Bến Đá Núi Sam Resort", diaChi: "Núi Sam, Châu Đốc", sao: 4, anhUrl: "", gia: 1200000, tinh: "An Giang" },
    { id: 126, ten: "Mường Thanh Lai Châu Hotel", diaChi: "113 Lê Duẩn, TP Lai Châu", sao: 4, anhUrl: "", gia: 1400000, tinh: "Lai Châu" },
    { id: 127, ten: "Lan Anh Hotel Lai Châu", diaChi: "22 Trần Phú, TP Lai Châu", sao: 3, anhUrl: "", gia: 700000, tinh: "Lai Châu" },
    { id: 128, ten: "Hoàng Nhâm Hotel", diaChi: "09 Nguyễn Trãi", sao: 3, anhUrl: "", gia: 680000, tinh: "Lai Châu" },
    { id: 129, ten: "Putaleng Hotel", diaChi: "35 Lê Lợi", sao: 4, anhUrl: "", gia: 950000, tinh: "Lai Châu" },
    { id: 130, ten: "Thanh Bình Hotel LC", diaChi: "18 Điện Biên Phủ", sao: 3, anhUrl: "", gia: 720000, tinh: "Lai Châu" },
    { id: 131, ten: "Mường Thanh Grand Điện Biên", diaChi: "514 Võ Nguyên Giáp", sao: 5, anhUrl: "", gia: 2200000, tinh: "Điện Biên" },
    { id: 132, ten: "Him Lam Hotel", diaChi: "Tổ 6, Thanh Trường", sao: 4, anhUrl: "", gia: 1500000, tinh: "Điện Biên" },
    { id: 133, ten: "A1 Hotel", diaChi: "Ngã 3 A1, TP Điện Biên Phủ", sao: 3, anhUrl: "", gia: 900000, tinh: "Điện Biên" },
    { id: 134, ten: "Ruby Hotel Điện Biên", diaChi: "12 Trường Chinh", sao: 3, anhUrl: "", gia: 850000, tinh: "Điện Biên" },
    { id: 135, ten: "Phương Nam Hotel DB", diaChi: "33 Nguyễn Chí Thanh", sao: 4, anhUrl: "", gia: 1100000, tinh: "Điện Biên" },
    { id: 136, ten: "Mường Thanh Sơn La Hotel", diaChi: "02 Tô Hiệu", sao: 4, anhUrl: "", gia: 1400000, tinh: "Sơn La" },
    { id: 137, ten: "Hoa Ban Hotel", diaChi: "17 Lò Văn Giá", sao: 3, anhUrl: "", gia: 700000, tinh: "Sơn La" },
    { id: 138, ten: "Sơn La Star Hotel", diaChi: "25 Chu Văn Thịnh", sao: 3, anhUrl: "", gia: 720000, tinh: "Sơn La" },
    { id: 139, ten: "Đông Hà Hotel SL", diaChi: "09 Trần Đăng Ninh", sao: 4, anhUrl: "", gia: 1000000, tinh: "Sơn La" },
    { id: 140, ten: "Ban Mai Hotel", diaChi: "66 Nguyễn Lương Bằng", sao: 3, anhUrl: "", gia: 750000, tinh: "Sơn La" },
    { id: 141, ten: "Mường Thanh Lạng Sơn Hotel", diaChi: "68 Ngô Quyền", sao: 4, anhUrl: "", gia: 1500000, tinh: "Lạng Sơn" },
    { id: 142, ten: "Four Points by Sheraton Lang Son", diaChi: "02 Trần Hưng Đạo", sao: 5, anhUrl: "", gia: 2800000, tinh: "Lạng Sơn" },
    { id: 143, ten: "Hoa Sim Hotel", diaChi: "15 Lê Lợi", sao: 3, anhUrl: "", gia: 800000, tinh: "Lạng Sơn" },
    { id: 144, ten: "Green Hotel Lang Son", diaChi: "27 Bà Triệu", sao: 3, anhUrl: "", gia: 780000, tinh: "Lạng Sơn" },
    { id: 145, ten: "Vin Hotel Lạng Sơn", diaChi: "90 Tam Thanh", sao: 4, anhUrl: "", gia: 1200000, tinh: "Lạng Sơn" },
    { id: 146, ten: "FLC Luxury Hotel Sầm Sơn", diaChi: "Đường Hồ Xuân Hương", sao: 5, anhUrl: "", gia: 3000000, tinh: "Thanh Hoá" },
    { id: 147, ten: "Central Hotel Thanh Hóa", diaChi: "01 Đại lộ Lê Lợi", sao: 4, anhUrl: "", gia: 1400000, tinh: "Thanh Hoá" },
    { id: 148, ten: "Mường Thanh Grand Thanh Hóa", diaChi: "06 Phan Chu Trinh", sao: 4, anhUrl: "", gia: 1500000, tinh: "Thanh Hoá" },
    { id: 149, ten: "Dragon Sea Hotel", diaChi: "43 Hồ Xuân Hương", sao: 4, anhUrl: "", gia: 1300000, tinh: "Thanh Hoá" },
    { id: 150, ten: "Phù Đổng Hotel", diaChi: "68 Lê Hoàn", sao: 3, anhUrl: "", gia: 850000, tinh: "Thanh Hoá" },
    { id: 151, ten: "Mường Thanh Luxury Sông Lam", diaChi: "13 Quang Trung, Vinh", sao: 5, anhUrl: "", gia: 2200000, tinh: "Nghệ An" },
    { id: 152, ten: "Tecco Sky Hotel", diaChi: "72 Lê Lợi, Vinh", sao: 4, anhUrl: "", gia: 1500000, tinh: "Nghệ An" },
    { id: 153, ten: "Saigon Kim Liên Hotel", diaChi: "25 Quang Trung", sao: 4, anhUrl: "", gia: 1400000, tinh: "Nghệ An" },
    { id: 154, ten: "Avatar Hotel Vinh", diaChi: "28 Nguyễn Sỹ Sách", sao: 3, anhUrl: "", gia: 900000, tinh: "Nghệ An" },
    { id: 155, ten: "Giao Tế Hotel", diaChi: "09 Hồ Tùng Mậu", sao: 3, anhUrl: "", gia: 850000, tinh: "Nghệ An" },
    { id: 156, ten: "Mường Thanh Luxury Hà Tĩnh", diaChi: "156 Hà Huy Tập", sao: 5, anhUrl: "", gia: 2000000, tinh: "Hà Tĩnh" },
    { id: 157, ten: "Eagle Hotel Hà Tĩnh", diaChi: "268 Trần Phú", sao: 4, anhUrl: "", gia: 1300000, tinh: "Hà Tĩnh" },
    { id: 158, ten: "White Palace Hotel", diaChi: "52 Nguyễn Công Trứ", sao: 3, anhUrl: "", gia: 900000, tinh: "Hà Tĩnh" },
    { id: 159, ten: "BMC Plaza Hotel", diaChi: "06 Phan Đình Phùng", sao: 4, anhUrl: "", gia: 1200000, tinh: "Hà Tĩnh" },
    { id: 160, ten: "Thanh Bình Hotel HT", diaChi: "22 Hải Thượng Lãn Ông", sao: 3, anhUrl: "", gia: 850000, tinh: "Hà Tĩnh" },
    { id: 161, ten: "Jeanne Hotel Cao Bằng", diaChi: "99 Kim Đồng", sao: 4, anhUrl: "", gia: 1300000, tinh: "Cao Bằng" },
    { id: 162, ten: "Max Boutique Hotel", diaChi: "117 Vườn Cam", sao: 3, anhUrl: "", gia: 900000, tinh: "Cao Bằng" },
    { id: 163, ten: "Sunny Hotel Cao Bằng", diaChi: "22 Bế Văn Đàn", sao: 3, anhUrl: "", gia: 850000, tinh: "Cao Bằng" },
    { id: 164, ten: "Bang Giang Hotel", diaChi: "01 Hoàng Như", sao: 4, anhUrl: "", gia: 1100000, tinh: "Cao Bằng" },
    { id: 165, ten: "Sài Gòn - Bản Giốc Resort", diaChi: "Trùng Khánh", sao: 5, anhUrl: "", gia: 2000000, tinh: "Cao Bằng" },
    { id: 166, ten: "Mường Thanh Luxury Phú Thọ", diaChi: "Hùng Vương, Việt Trì", sao: 5, anhUrl: "", gia: 1600000, tinh: "Phú Thọ" },
    { id: 167, ten: "Sài Gòn Phú Thọ Hotel", diaChi: "Trần Phú, Việt Trì", sao: 4, anhUrl: "", gia: 1200000, tinh: "Phú Thọ" },
    { id: 168, ten: "Việt Trì Garden Hotel", diaChi: "Nguyễn Tất Thành, Việt Trì", sao: 3, anhUrl: "", gia: 800000, tinh: "Phú Thọ" },
    { id: 169, ten: "Hùng Vương Hotel", diaChi: "Khu di tích Đền Hùng", sao: 3, anhUrl: "", gia: 700000, tinh: "Phú Thọ" },
    { id: 170, ten: "Hồng Ngọc Hotel", diaChi: "Đại lộ Hùng Vương", sao: 3, anhUrl: "", gia: 600000, tinh: "Phú Thọ" }
];

dsKhachSan.forEach(k => {
    k.anhUrl = `https://loremflickr.com/400/300/hotel,building?lock=${k.id}`;
});

const vungMien = {
    "1": ["hà nội", "hải phòng", "quảng ninh", "tuyên quang", "lào cai", "thái nguyên", "phú thọ", "bắc ninh", "hưng yên", "ninh bình", "lai châu", "điện biên", "sơn la", "lạng sơn", "cao bằng"],
    "2": ["đà nẵng", "huế", "quảng trị", "quảng ngãi", "gia lai", "khánh hòa", "lâm đồng", "đắk lắk", "thanh hoá", "nghệ an", "hà tĩnh"],
    "3": ["tp hcm", "cần thơ", "đồng nai", "tây ninh", "vĩnh long", "đồng tháp", "cà mau", "an giang"]
};

const gioBayTheoVung = {
    "tayNamBo": ["06:30", "14:00", "09:15", "16:45", "11:00", "19:30"],
    "dongNamBo": ["07:00", "13:30", "09:40", "15:30", "11:30", "19:45"],
    "tayNguyen": ["06:45", "14:30", "08:00", "17:15", "12:45", "20:30"],
    "namTrungBo": ["08:45", "16:00", "10:30", "18:20", "11:50", "21:00"],
    "bacTrungBo": ["06:50", "21:00", "09:45", "17:40", "12:20", "23:00"],
    "tayBacBo": ["07:45", "13:00", "08:50", "15:30", "18:00", "22:30"],
    "conLai": ["10:00", "14:20", "17:50", "19:45", "22:00", "23:30"]
};

function getMien(tenTinh) {
    const ten = tenTinh.trim().toLowerCase();
    for (let mien in vungMien) {
        if (vungMien[mien].includes(ten)) return parseInt(mien);
    }
    return null;
}

function getSubRegion(tenTinh) {
    const t = tenTinh.trim().toLowerCase();
    if (["cần thơ", "vĩnh long", "đồng tháp", "cà mau", "an giang"].includes(t)) return "tayNamBo";
    if (["tp hcm", "đồng nai", "tây ninh"].includes(t)) return "dongNamBo";
    if (["gia lai", "lâm đồng", "đắk lắk"].includes(t)) return "tayNguyen";
    if (["đà nẵng", "quảng ngãi", "khánh hòa"].includes(t)) return "namTrungBo";
    if (["huế", "quảng trị", "thanh hoá", "nghệ an", "hà tĩnh"].includes(t)) return "bacTrungBo";
    if (["lào cai", "lai châu", "điện biên", "sơn la"].includes(t)) return "tayBacBo";
    return "conLai";
}

function taoMaChuyenBay(noiDi, noiDen, prefix, index) {
    let str = noiDi.trim().toLowerCase() + "-" + noiDen.trim().toLowerCase() + "-" + prefix + index;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    hash = Math.abs(hash) % 9000 + 1000;
    return prefix + hash;
}

let ketQuaTimKiem = [];

document.getElementById('tab-mb').onclick = () => {
    document.getElementById('form-mb').classList.remove('hidden');
    document.getElementById('form-ks').classList.add('hidden');
    document.getElementById('tab-mb').classList.add('active');
    document.getElementById('tab-ks').classList.remove('active');
};
document.getElementById('tab-ks').onclick = () => {
    document.getElementById('form-mb').classList.add('hidden');
    document.getElementById('form-ks').classList.remove('hidden');
    document.getElementById('tab-ks').classList.add('active');
    document.getElementById('tab-mb').classList.remove('active');
};

document.getElementById('noiDen').addEventListener('change', () => {
    document.getElementById('ketQuaVe').innerText = '';
});
document.getElementById('tinh').addEventListener('change', () => {
    document.getElementById('ketQuaPhong').innerText = '';
});

document.getElementById('timChuyen').onclick = function () {
    const noiDi = document.getElementById('noiDi').value.trim();
    const noiDen = document.getElementById('noiDen').value.trim();
    const ngayDiMB = document.getElementById('ngayDiMB').value;
    const soKhach = parseInt(document.getElementById('soKhach').value) || 0;

    let err = '';
    if (!noiDi) err = 'Vui lòng chọn nơi đi.';
    else if (!noiDen) err = 'Vui lòng chọn nơi đến.';
    else if (noiDi === noiDen) err = 'Nơi đi và nơi đến không được trùng nhau.';
    else if (!ngayDiMB) err = 'Vui lòng chọn ngày đi.';
    else if (soKhach < 1) err = 'Số khách phải ≥ 1.';

    if (err) {
        document.getElementById('loiVe').innerText = err;
        document.getElementById('dsChuyen').innerHTML = '';
        return;
    }
    document.getElementById('loiVe').innerText = '';

    const mienDi = getMien(noiDi);
    const mienDen = getMien(noiDen);

    let heSoKhoangCach = 1.2;
    let thoiGianBay = "1 tiếng 15 phút";

    if (mienDi && mienDen) {
        const khoangCach = Math.abs(mienDi - mienDen);
        if (khoangCach === 0) {
            heSoKhoangCach = 1.0; thoiGianBay = "1 tiếng";
        } else if (khoangCach === 1) {
            heSoKhoangCach = 1.5; thoiGianBay = "1 tiếng 30 phút";
        } else if (khoangCach === 2) {
            heSoKhoangCach = 2.0; thoiGianBay = "2 tiếng";
        }
    }

    const hangGhe = document.querySelector('input[name="hangGhe"]:checked').value;
    let heSoGhe = 1;
    if (hangGhe === "Phổ thông đặc biệt") heSoGhe = 1.2;
    if (hangGhe === "Thương gia") heSoGhe = 2.0;
    if (hangGhe === "Hạng nhất") heSoGhe = 3.0;

    const vungXuatPhat = getSubRegion(noiDi);
    const khungGio = gioBayTheoVung[vungXuatPhat];

    const hangHangKhong = [
        { hang: "VietJet Air", prefix: "VJ", giaGoc: 700000, gio: [khungGio[0], khungGio[1]] },
        { hang: "Bamboo Airways", prefix: "QH", giaGoc: 900000, gio: [khungGio[2], khungGio[3]] },
        { hang: "Vietnam Airlines", prefix: "VN", giaGoc: 1200000, gio: [khungGio[4], khungGio[5]] }
    ];

    ketQuaTimKiem = [];
    let indexId = 1;

    hangHangKhong.forEach(hang => {
        hang.gio.forEach(gioBay => {
            const giaCuoiCung = hang.giaGoc * heSoKhoangCach * heSoGhe;
            const maChuyen = taoMaChuyenBay(noiDi, noiDen, hang.prefix, indexId);

            ketQuaTimKiem.push({
                id: indexId,
                ma: maChuyen,
                hang: hang.hang,
                gio: gioBay,
                thoiGianBay: thoiGianBay,
                giaTheoNguoi: giaCuoiCung
            });
            indexId++;
        });
    });

    const html = ketQuaTimKiem.map(cb => `
    <label class="flight-item">
      <span class="flight-info">
        ${cb.ma} - ${cb.hang} - Giờ cất cánh: ${cb.gio} - Thời gian bay: ${cb.thoiGianBay} - Giá vé/người: <span class="price">${cb.giaTheoNguoi.toLocaleString('vi-VN')}đ</span>
      </span>
      <input type="radio" name="chonChuyen" value="${cb.id}">
    </label>
  `).join('');

    document.getElementById('dsChuyen').innerHTML = html;
};

document.getElementById('datVe').onclick = function () {
    const chon = document.querySelector('input[name="chonChuyen"]:checked');
    const soKhach = parseInt(document.getElementById('soKhach').value) || 0;

    if (!chon) {
        document.getElementById('loiVe').innerText = 'Vui lòng tick chọn một chuyến bay ở bên phải.';
        return;
    }

    const cb = ketQuaTimKiem.find(c => c.id == chon.value);
    const hangGhe = document.querySelector('input[name="hangGhe"]:checked').value;
    const tongTien = cb.giaTheoNguoi * soKhach;

    document.getElementById('ketQuaVe').innerText = `✔ Đặt vé thành công! ${document.getElementById('noiDi').value} ➔ ${document.getElementById('noiDen').value}, Ngày đi: ${document.getElementById('ngayDiMB').value}, Số lượng: ${soKhach} vé (${hangGhe}), Tổng thanh toán: ${tongTien.toLocaleString('vi-VN')}đ`;
    document.getElementById('loiVe').innerText = '';
};

// --- QUẢN LÝ HIỂN THỊ KHÁCH SẠN ---
const selectTinh = document.getElementById('tinh');
dsKhachSan.forEach(k => {
    if (![...selectTinh.options].some(o => o.value === k.tinh)) {
        const opt = document.createElement('option'); opt.value = k.tinh; opt.innerText = k.tinh; selectTinh.appendChild(opt);
    }
});

selectTinh.onchange = function () {
    const tinh = this.value;
    const selKS = document.getElementById('ks');
    selKS.innerHTML = '<option value="">--Chọn--</option>';
    dsKhachSan.filter(k => k.tinh === tinh).forEach(k => {
        const opt = document.createElement('option'); opt.value = k.id; opt.innerText = k.ten; selKS.appendChild(opt);
    });
    document.getElementById('chiTietKS').innerHTML = '';
};


function renderHotelInfo() {
    const ksId = document.getElementById('ks').value;
    const k = dsKhachSan.find(x => x.id == ksId);
    if (!k) {
        document.getElementById('chiTietKS').innerHTML = '';
        return;
    }

    const loaiPhong = document.getElementById('loaiPhong').value;
    let dongGiaVIP = '';


    if (loaiPhong === 'VIP') {
        const giaVIP = k.gia * 1.5;
        dongGiaVIP = `<p style="color: #c0392b; margin-top: 5px;">Giá phòng VIP: <strong>${giaVIP.toLocaleString('vi-VN')}đ/đêm</strong></p>`;
    }

    document.getElementById('chiTietKS').innerHTML = `
    <p><strong>${k.ten}</strong> - ${k.diaChi}</p>
    <p>Đánh giá: ${'★'.repeat(k.sao)}${'☆'.repeat(5 - k.sao)}</p>
    <img src="${k.anhUrl}" class="hotel-img" alt="${k.ten}">
    <p>Giá cơ bản: <strong>${k.gia.toLocaleString('vi-VN')}đ/đêm</strong> (Phòng thường)</p>
    ${dongGiaVIP}
  `;
}


document.getElementById('ks').addEventListener('change', renderHotelInfo);
document.getElementById('loaiPhong').addEventListener('change', renderHotelInfo);

document.getElementById('datPhong').onclick = function () {
    const tinh = document.getElementById('tinh').value;
    const ksId = document.getElementById('ks').value;
    const soPhong = parseInt(document.getElementById('soPhong').value) || 0;
    const loaiPhong = document.getElementById('loaiPhong').value;
    const ngayDen = document.getElementById('ngayDenKS').value;
    const ngayDi = document.getElementById('ngayDiKS').value;

    let err = '';
    if (!tinh) err = 'Chọn tỉnh.';
    else if (!ksId) err = 'Chọn khách sạn.';
    else if (soPhong < 1) err = 'Phải ≥1 phòng.';
    else if (!ngayDen) err = 'Chọn ngày nhận.';
    else if (!ngayDi) err = 'Chọn ngày trả.';
    else if (new Date(ngayDi) <= new Date(ngayDen)) err = 'Ngày trả phải sau ngày nhận.';

    if (err) { document.getElementById('loiPhong').innerText = err; document.getElementById('ketQuaPhong').innerText = ''; return; }

    const k = dsKhachSan.find(x => x.id == ksId);
    const soDem = Math.ceil((new Date(ngayDi) - new Date(ngayDen)) / (1000 * 60 * 60 * 24));

    const heSoPhong = (loaiPhong === 'VIP') ? 1.5 : 1;
    const tong = k.gia * heSoPhong * soPhong * soDem;

    document.getElementById('ketQuaPhong').innerText = `✔ Đặt phòng thành công! ${tinh}, ${k.ten}, ${ngayDen} ➔ ${ngayDi} (${soDem} đêm), ${soPhong} phòng (${loaiPhong}), Tổng thanh toán: ${tong.toLocaleString('vi-VN')}đ`;
    document.getElementById('loiPhong').innerText = '';
};