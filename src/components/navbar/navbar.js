export async function navbar() {
  const list = document.querySelectorAll(".navbar .nav .nav-main .links a");

  list.forEach((link) => {
    const href = link.getAttribute("href");

    if (window.location.pathname === "/" && href === "/") {
      link.classList.add("active");
    }
  });

  // ----- Display Logout Button ----- //
  const loginCookie = window.Cookies.get("login"); // Access Cookies from window object
  const logoutButton = document.querySelector(".nav-others .logout");
  const loginButton = document.querySelector(".nav-others .to-login");

  if (logoutButton) {
    if (loginCookie) {
      logoutButton.style.display = "inline-block";
      loginButton.style.display = "none";
    } else {
      logoutButton.style.display = "none";
      loginButton.style.display = "inline-block";
    }

    // ----- Logout ----- //
    logoutButton.addEventListener("click", (event) => {
      event.preventDefault(); 
      Swal.fire({
        title: "Logout",
        text: "You have successfully logged out!",
        icon: "success",
        showConfirmButton: false,
        timer: 2000, // Show alert for 2 seconds
      }).then(() => {
        window.Cookies.remove("login"); // Use window.Cookies to remove cookie
        window.location.href = "/login"; // Redirect after SweetAlert closes
      });
    });
  }
}
