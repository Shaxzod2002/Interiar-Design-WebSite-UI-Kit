import _ from "lodash";
import Navbar from "./components/Home/navbar";
import "./css/main.css";



// intalling tailwindcss;
const tailwindcss = document.createElement('script');
tailwindcss.src = "https://cdn.tailwindcss.com";
document.body.append(tailwindcss);

// Create container block
const container = document.createElement("div");
container.className = "w-full min-h-screen";
container.append(Navbar());
document.body.prepend(container);
