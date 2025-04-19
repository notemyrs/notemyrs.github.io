// NAVBAR TOGGLE FOR MOBILE
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("open");
}

// SCROLL REVEAL EFFECT
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 500;
    if (scrollY > sectionTop) {
      section.classList.add("reveal");
    }
  });

  // SCROLL PROGRESS BAR
  const scrollBar = document.getElementById("scroll-bar");
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (window.scrollY / scrollHeight) * 100;
  scrollBar.style.width = scrollPercent + "%";

  // BACK TO TOP BUTTON SHOW/HIDE
  const topBtn = document.getElementById("topBtn");
  if (scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// BACK TO TOP FUNCTION
document.getElementById("topBtn")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
