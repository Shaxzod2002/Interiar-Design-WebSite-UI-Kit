import servicesBg from "../../images/home/services/bg.png";

export default function homeServices() {
    const homeServices = document.createElement('div');
    homeServices.className = 'home-services w-[90%] min-h-screen mx-auto reletive mt-[100px]';
    homeServices.innerHTML = `
        <div class="element flex flex-col justify-evenly w-[70%] min-h-[450px] absolute z-20 bg-white px-10">
            <div class="flex items-center gap-4">
                <h4 class="font-['Poppins'] text-[#000000] text-[16px] font-semibold">SERVICE</h4>
                <div class="line w-[60%] h-[2px] bg-black"></div>
            </div>
            <h2 class="heading font-['Poppins'] text-[#333333] text-[36px] font-bold">attractive furniture with the best quality.</h2>
            <p class="paragraph font-['Poppins'] text-[#9C9C9C] text-[18px] font-normal">
                Customize your interior design into a dream place <br /> with the best designers and quality furniture. We try <br /> our best to fulfill your expectations.
            </p>
            <ol class="relative w-full min-h-[50%] font-['Poppins'] text-[#333333] text-[24px] font-bold flex flex-col gap-1">
                <li>
                    <a href="#" class="flex group hover:text-blue-600 justify-between items-center min-h-[40px] cursor-pointer hover:bg-black/5">
                        01 &emsp;&emsp; Interior Design <i class="fa-solid fa-arrow-right mr-4 transition-all group-hover:mr-0"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex group hover:text-blue-600 justify-between items-center min-h-[40px] cursor-pointer hover:bg-black/5">
                        02 &emsp;&emsp; Consultant <i class="fa-solid fa-arrow-right mr-4 transition-all group-hover:mr-0"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex group hover:text-blue-600 justify-between items-center min-h-[40px] cursor-pointer hover:bg-black/5">
                        03 &emsp;&emsp; Construction Consultant <i class="fa-solid fa-arrow-right mr-4 transition-all group-hover:mr-0"></i>
                    </a>
                </li>
            </ol>
        </div>
        <div class="background absolute z-10 w-[90%] min-h-[400px] top-[50%] left-[10%]">

        </div>
    `;

    return homeServices
}