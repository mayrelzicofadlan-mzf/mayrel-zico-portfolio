// Cek file script.js lo, Joqies!
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    // Pas di-scroll, pertahanin bg gelap semi-transparan yang ada blurnya
    nav.style.background = "rgba(15, 23, 42, 0.9)";
    nav.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
  } else {
    // Pas di paling atas, biarin navnya menyatu sama bg hero
    nav.style.background = "transparent";
    nav.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";
  }
});
