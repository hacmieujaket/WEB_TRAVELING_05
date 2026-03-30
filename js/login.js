document.addEventListener("DOMContentLoaded", () => {
  // --- 1. XỬ LÝ CHO TRANG ĐĂNG KÝ (dangki.html) ---
  const registerForm =
    document.getElementById("register-form") ||
    document.querySelector(".form-box form");

  if (registerForm && window.location.pathname.includes("dangki.html")) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullName = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("Password").value;
      const confirmPassword = document.getElementById("confirmpassword").value;

      // Validate cơ bản
      if (password.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự!");
        return;
      }

      if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
      }

      const users = JSON.parse(localStorage.getItem("allUsers")) || [];
      if (users.some((user) => user.email === email)) {
        alert("Email này đã được đăng ký!");
        return;
      }

      users.push({ fullName, email, password });
      localStorage.setItem("allUsers", JSON.stringify(users));
      alert("Đăng ký thành công!");
      window.location.href = "index.html";
    });
  }

  // --- 2. XỬ LÝ CHO TRANG ĐĂNG NHẬP (index.html) ---
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailLogin = document.getElementById("login-email").value.trim();
      const passLogin = document.getElementById("password").value;

      const users = JSON.parse(localStorage.getItem("allUsers")) || [];
      const validUser = users.find(
        (u) => u.email === emailLogin && u.password === passLogin,
      );

      if (validUser) {
        // Lưu thông tin vào sessionStorage để biết ai đang online
        sessionStorage.setItem("currentUser", JSON.stringify(validUser));
        alert(`Chào mừng ${validUser.fullName} quay trở lại!`);
        window.location.href = "Home.html"; // Chuyển hướng chính xác đến Home.html
      } else {
        alert("Sai email hoặc mật khẩu!");
      }
    });
  }

  // --- 3. XỬ LÝ ẨN/HIỆN MẬT KHẨU ---
  const togglePasswordIcon = document.getElementById("togglePassword");
  const passwordField = document.getElementById("password");

  if (togglePasswordIcon && passwordField) {
    togglePasswordIcon.addEventListener("click", function () {
      const isPassword = passwordField.type === "password";
      passwordField.type = isPassword ? "text" : "password";
      // Đổi icon tương ứng
      this.setAttribute("name", isPassword ? "eye-off-outline" : "eye-outline");
    });
  }

  // --- 4. KIỂM TRA BẢO VỆ TRANG Home.html ---
  // Kiểm tra nếu đang ở trang Home.html (Không phân biệt hoa thường ở tên file)
  if (window.location.pathname.toLowerCase().includes("home.html")) {
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    if (!currentUser) {
      alert("Vui lòng đăng nhập trước!");
      window.location.href = "index.html";
    } else {
      const welcomeMsg = document.getElementById("welcome-message");
      if (welcomeMsg) {
        welcomeMsg.innerText = `Xin chào, ${currentUser.fullName}!`;
      }
    }
  }
});

// Hàm logout dùng cho nút bấm ở Home.html
function logout() {
  sessionStorage.removeItem("currentUser");
  window.location.href = "index.html";
}
