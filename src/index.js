import _ from "lodash";
import Navbar from "./components/Home/navbar";
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
container.append(Navbar());
document.body.prepend(container);

// Toggle Menu
const barsMenu = document.querySelector(".bars-menu"),
  navMenu = document.querySelector(".nav-menu"),
  barsIcon = document.querySelector(".bars-icon");
barsMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active-menu");
  barsIcon.className === "fas fa-bars bars-icon"
    ? (barsIcon.className = "fas fa-moon bars-icon")
    : (barsIcon.className = "fas fa-bars bars-icon");
});
