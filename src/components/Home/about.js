import avatar from "../../images/home/about/user.png";

export default function () {
  const about = document.createElement("div");
  about.className = "about w-[90%] min-h-auto mx-auto mt-[100px]";
  about.innerHTML = `
        <div class="flex items-center gap-3 font-['Poppins'] font-medium text-[16px]">
            <h6>ABOUT</h6>
            <div class="line w-[45%] h-[2px] bg-[#333333]"></div>
        </div>
        <h2 class="heading text-[#333333] my-6 text-[36px] font-['Poppins'] font-semibold">“We're one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.”</h2>
        <div class="about-box flex w-full h-auto items-center">
            <div class="background w-[70%] min-h-[500px] relative">
                <div class="user rounded-md flex justify-around shadow-[0,10px,10px,40px,rgba(0,0,0,0.5)] items-center absolute bg-white w-[276px] min-h-[90px] right-[-200px] top-[27px]">
                    <img src="${avatar}" rel="user" />
                    <div>
                        <h4>Arga Danaan</h4>
                        <p class="text-[#9C9C9C]">CEO of Dananz</p>
                    </div>
                </div>
            </div>
            <div class="right w-[30%] h-auto flex flex-col justify-center gap-10 pl-16">
                <p class="text-[#9C9C9C] text-[18px] font-['Poppins'] font-normal">
                    Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
                </p>
                <a href="#" class="transition-all w-[140px] py-2 text-center bg-[#2c3878] text-white font-['Poppins'] font-normal hover:bg-white border hover:border-[#2c3878]  hover:text-[#2c3878]">Learn More</a>
            </div>
        </div>
    `;

    return about;
}
