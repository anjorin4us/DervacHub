<template>
    <div class="w-full bg-white h-fit flex flex-col gap-[2rem] sm:items-center items-start  sm:text-center md:text-start font-sans pt-12">
        <div class="flex flex-col items-start gap-[2rem] w-full max-[425px]:text-center max-[425px]:items-center p-[1rem]">
            <div class="relative">
                <div class="flex flex-col gap-3">
                    <h1 class="lg:text-5xl md:text-4xl md:px-24 px-8 text-2xl font-bold text-[#224C75] md:w-[70%]">Gain the skill you need to land a job in the tech industry</h1>
                    <p class="text-[#475467] lg:pr-[35%] md:px-24 px-8 md:pr-[20%] sm:pr-[0%] lg:text-[18px] md:text-[14px] font-[500]">We train and mentor you to become an excellent engineer and master the technologies demanded by the employers</p>
                </div>

                <img src="/others/pattern-2.png" alt="pattern" class="block absolute right-[8%] lg:top-[-120px] top-0 h-96 rotate-90">
            </div>
            <div>
                <img src="/others/bigAvatar.jpg" alt="" class="lg:w-[2000px ]">
            </div>
        </div>
        <div class="md:px-24 sm:px-8 px-3">
            <div class="w-full relative z-[0]">
                <!-- <img class="absolute right-[0] z-[0]" src="./images/Ellipse 19.svg" alt=""> -->
            </div>
            <div class="">
                <div class="flex flex-col gap-[2rem] font-[600] w-full h-fit bg-white">
                    <div class="flex">
                        <div class="flex flex-col gap-[10px] sm:p-[2rem] max-[425px]:text-center max-[425px]:items-center z-0">
                            <h1 class="lg:text-[36px] md:text-[26px] text-[26px] text-[#224C75]">Training services</h1>
                            <p class="text-[#475467] font-normal">We offer regular training programs and fellowship programs. Join the fellowship program that helps you secure a future in tech. Our fellowship curriculum offers direct practical experience.</p>
                        </div>

                        <img src="/pattern-1.png" class="lg:block hidden " alt="pattern">
                    </div>
                    <div class="flex lg:justify-between justify-center lg:gap-[3rem] md:gap-[2rem] lg:flex-row flex-col gap-[2rem] relative z-[0]">
                        <div class="flex flex-col gap-4 rounded-[20px] bg-[#FFF2F8] p-4 max-[425px]:text-center max-[425px]:items-center">
                                <h1 class="sm:text-lg md:text-2xl lg:text-3xl text-[#224C75]">Regular Trainings</h1>
                            <p class="text-[#475467] font-normal">Our regular program is a 1-month intensive certified training program where, we teach computer fundamentals. We also provide tools that is required to equip <span class="font-bold">you</span> in order to start up a career of your choice in the world of global technology</p>
                            <router-link to="/courses">
                                <p class="p-3 w-fit rounded-[10px] border-[2px] text-[#224C75] border-[solid] border-[#224C75] hover:bg-[#224c75] hover:text-white hover:border-white transition-all duration-1000 ease-in-out mt-4">Learn more</p>
                            </router-link>
                        </div>

                        
                        <div class="flex flex-col gap-[1rem] rounded-[20px] bg-[#F4F6FD] p-4 items-start max-[425px]:text-center max-[425px]:items-center">
                                <h1 class="sm:text-lg md:text-2xl lg:text-3xl text-[#224C75]">Fellowship</h1>
                            <p class="text-[#475467] font-normal">Our Fellowship program is a 7-month intensive tech program through an agile delivery methodology, mentor matching, and leadership modules that equips young people with the skills and resources that is required to launch and grow successful careers in tech and to be able to work competitively in any global team.</p>
                            <router-link to="/fellow">
                                <p class="p-3 w-fit rounded-[10px] border-[2px] text-[#224C75]  border-[solid] border-[#224C75] hover:bg-[#224c75] hover:text-white hover:border-white transition-all duration-1000 ease-in-out mt-4" href="">Learn more</p>
                            </router-link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.font-sans {
    font-family: 'Inter', sans-serif;
}
</style>