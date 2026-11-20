const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.innerHTML = isOpen ? 'CLOSE <span>－</span>' : 'MENU <span>＋</span>';
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.innerHTML = 'MENU <span>＋</span>';
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
