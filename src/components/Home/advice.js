import backgroundImage from '../../images/home/advice/bg.png'

export default function Advice() {
    const advice = document.createElement("div");
    advice.className = "home-advice reletive w-[90%] mx-auto min-h-auto flex flex-col";
  advice.innerHTML = `
        <div class="text w-full min-h-full relative py-4">
            <h1 class="heading text-[#333333] text-[72px] font-['Poppins'] font-bold">Design your <br /> interor with high <br /> quality.</h1>
            <div class="line absolute w-[55%] h-[2px] bg-[#333333] top-16 right-0"></div>
            <p class="paragraph rotate-[-90deg] absolute right-[-55px] bottom-[55px]">2022 <br /> ALL RIGHT RESERVED</p>
        </div>
        <div class="mt-10 background w-full mx-auto min-h-[500px] relative">
            <div class="reference w-[250px] min-h-[500px] bg-[#2C3878] absolute right-[100px] top-[-150px] flex flex-col justify-around">
                <div class="project flex flex-col justify-center items-center text-white">
                    <h1>350+</h1>
                    <p>Project Completed</p>
                </div>
                <div class="project flex flex-col justify-center items-center text-white">
                    <h1>23+</h1>
                    <p>Professional Teams</p>
                </div>
                <div class="project flex flex-col justify-center items-center text-white">
                    <h1>15+</h1>
                    <p>Years Experience</p>
                </div>
            </div>
        </div>
    `;

    return advice;
};
