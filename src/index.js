import _ from "lodash";
import homeNavbar from "./components/Home/navbar";
import homeAdvice from "./components/Home/advice";
import homeAbout from "./components/Home/about";
import homeServices from "./components/Home/services";
import "./css/main.css";

// Font Awesome Installing;
const fontAwesomeAll = document.createElement("link");
fontAwesomeAll.href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css";
fontAwesomeAll.rel = "stylesheet";
fontAwesomeAll.integrity =
  "sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==";
fontAwesomeAll.crossOrigin = "anonymous";
fontAwesomeAll.referrerPolicy = "no-referrer";
document.head.append(fontAwesomeAll);

// Tailwindcss Installing;
const tailwindcss = document.createElement("script");
tailwindcss.src = "https://cdn.tailwindcss.com";
document.body.append(tailwindcss);

// Create container block
const container = document.createElement("div");
container.className = "w-full min-h-screen";
// Add Home Navbar Page 
container.append(homeNavbar());
// Add Home Advice Page
container.append(homeAdvice());
// Add Home About Page
container.append(homeAbout());
// Add Home Services Page
container.append(homeServices());
document.body.prepend(container);

// Toggle Menu
const barsMenu = document.querySelector(".bars-menu"),
  navMenu = document.querySelector(".nav-menu"),
  barsIcon = document.querySelector(".bars-icon");
barsMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active-menu");
  barsIcon.className === "fas fa-bars bars-icon"
    ? (barsIcon.className = "fas fa-times bars-icon")
    : (barsIcon.className = "fas fa-bars bars-icon");
});
