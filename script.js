const menuIcon = document.querySelector(".menu-icon");
const container = document.querySelector(".container");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelector(".nav-items");

menuIcon.addEventListener("click", () => {
  if (
    !container.classList.contains("close") &&
    !container.classList.contains("open")
  ) {
    container.classList.add("open");
  } else if (container.classList.contains("close")) {
    container.classList.replace("close", "open");
  } else if (container.classList.contains("open")) {
    container.classList.replace("open", "close");
  }
});

container.addEventListener("click", (event) => {
  if (
    /* !container.classList.contains("close") && */
    container.classList.contains("open") &&
    !navigation.contains(event.target) &&
    !menuIcon.contains(event.target)
  ) {
    container.classList.replace("open", "close");
  }
});

navItems.addEventListener("click", () => {
  container.classList.replace("open", "close");
});
