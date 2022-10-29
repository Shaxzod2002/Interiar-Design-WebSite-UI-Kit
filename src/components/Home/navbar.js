import logo from "../../images/home/nav/logo.png";

export default function Navbar() {
  const navbar = document.createElement("div");
  navbar.className = "flex w-[90%] mx-auto";
  navbar.innerHTML = `
       <div class="w-[40%] min-h-[80px] flex justify-start items-center">
        <img src="${logo}" alt="navbar logo" />
       </div>
       <div class="w-[50%] min-h-[80px] flex justify-evenly items-center">
        <a href="#" class="w-[100px] text-center font-normal transition-all duration-500 hover:font-[600]">Home</a>
        <a href="#" class="w-[100px] text-center font-normal transition-all duration-500 hover:font-[600]">About Us</a>
        <a href="#" class="w-[100px] text-center font-normal transition-all duration-500 hover:font-[600]">Services</a>
        <a href="#" class="w-[100px] text-center font-normal transition-all duration-500 hover:font-[600]">Our Teams</a>
       </div>
       <div class="w-[10%] min-h-[80px] flex justify-center items-center">
        <a href="#" class="w-[120px] border border-white py-[8px] px-3 bg-blue-800 active:bg-white active:border-blue-800 active:text-blue-800 text-white text-center">Contact Us</a>
       </div>
    `;

  return navbar;
}
