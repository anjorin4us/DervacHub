<script>
import { defineComponent } from 'vue';
import Button from '../Button.vue';



export default defineComponent({
    components: {Button},
    data() {
        return {
            hovering: 0,
        }
    }
})
</script>



<template>
    <!-- blue #f2f6fb -->
    <!-- purple #f3e0e5 -->

    <div class="grid lg:grid-cols-2 grid-cols-1 text-center relative lg:text-left md:gap-20 gap-8 bg-gradient-to-tl from-[#f2f6fb] to-[#f3e0e5] py-8 md:pb-36 md:pt-16 md:px-24 px-8 items-end font-sans">
        
        <!-- The first div containing mainly the text -->
        <div class="flex flex-col gap-8 z-30 lg:z-0">
            <div class="relative">
                <div class="lg:flex lg:flex-col">
                    <p class="main-text italic font-extrabold min-[330px]:text-[40px] sm:text-[45px] md:text-[50px] text-[25px] text-[#224c75] z-10">Learn, Innovate and Thrive in the</p>
                    <p class="text-[#d82e21] main-text font-black min-[330px]:text-[40px] text-[25px]">Digital World!</p>

                    <!-- The slant avatar images -->
                    <div class="sm:flex flex-row hidden bg-white w-fit py-3 pl-3 pr-6 rounded-[10px] lg:mx-0 mx-auto lg:absolute rotate-in-my-way top-[70px] lg:shadow-2xl right-[-80px] 2xl:right-28 z-10">
                        <img src="/fellows/stanley.jpg" alt="" class="flex-none w-[50px] h-[50px] block rounded-[50%]">
                        <img src="/fellows/dosu.jpg" alt="" class="flex-none w-[50px] h-[50px] block rounded-[50%]">
                        <img src="/fellows/Balkis.jpg" alt="" class="flex-none w-[50px] h-[50px] block rounded-[50%]">
                        <img src="/fellows/luqman.png" alt="" class="flex-none w-[50px] h-[50px] block rounded-[50%]">
                        <img src="/fellows/adam.jpg" alt="" class="flex-none w-[50px] h-[50px] block rounded-[50%]">
                        <div class="flex-none">
                            <router-link to="/fellows">
                                <img src="./images/Avatar-add-button.svg" alt="" >
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            <p class="text-[#224c75] md:text-[20px] text-[15px] z-10">Unlock your Digital potential with cutting-edge Training in our Technology Hub </p>


            <!-- The button imported from another file -->
            <div class="flex gap-12 md:flex-row flex-col md:w-fit w-full mx-auto lg:mx-0">
                <router-link to="/courses">
                    <component is="Button" value="Become a tech expert" class="min-[1170px]:text-[15px] text-[12px]  min-[1237px]:text-[17px] md:w-fit w-full px-8 rounded-[10px] py-5 transition-all duration-1000 ease-in-out" :class="hovering == 0? 'bg-[#102539] text-white' : 'border border-1 border-gray-300 text-[#224c75]'"></component>
                </router-link>
                
                <router-link to="/testimonials">
                    <component is="Button" value="Testimonials" class="min-[1170px]:text-[15px] text-[12px] min-[1237px]:text-[18px] md:w-fit w-full px-8 rounded-[10px] py-5 transition-all duration-1000 ease-in-out" :class="hovering == 1? 'bg-[#102539] text-white' : 'border border-1 border-gray-300 text-[#224c75]'" @mouseover="hovering = 1" @mouseleave="hovering = 0"></component>
                </router-link>
                <!-- max-[1285px]:items-center -->
            </div>

            <!-- The red curve below  -->
            <img src="./images/red-curve.svg" alt="" class="absolute bottom-0 left-0">
        </div>


        <!-- The second div containing the two images  -->
        <div class="flex gap-4 sm:flex-row flex-col-reverse">      
            
            <!-- first image side -->
            <div class="bg-white sm:w-[50%] flex flex-col gap-2 rounded-[10px] shadow-2xl z-30">
                <div class="w-[100%]">
                    <img src="/others/FirstSection.png" alt="class image" class="w-[100%] h- rounded-t-[10px]">
                </div>

                <div class="px-4 pt-4 pb-9 text-[#224c75]">
                    <img class="w-[25px]" src="../../assets/images/dervac-main-logo.png" alt="">

                    <p class="italic mt-2"><q>Gain the skills you need to land your dream job</q></p>
                </div>
            </div>


            <!-- Mr Anjorin's image side  -->
            <div class="bg-white sm:w-[50%] flex flex-col gap-2 rounded-[10px] shadow-2xl z-30">
                <div class="w-[100%]">
                    <img src="/others/AnjorinFirstSection.png" alt="Mr. Anjorin" class="w-[100%] h- rounded-t-[10px]">
                </div>

                <div class="px-4 pt-4 pb-9 text-[#224c75]">
                    <img class="w-[25px]" src="../../assets/images/dervac-main-logo.png" alt="">

                    <p class="italic mt-2"><q>Get trained and mentored by industry experts</q></p>
                </div>
            </div>

            

            <!-- The blue curve beside the two images -->
            <img src="./images/blue-curve.svg" alt="" class=" absolute lg:h-[520px] lg:w-[520px] right-[50px] top-8">
        </div>        
    </div>

</template>




<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

    .font-sans {
        font-family: 'Inter', sans-serif;
    }

    .flex-none {
        flex: none;
        margin-right: -15px;
    }

    @media (min-width: 1024px) {
        .rotate-in-my-way {
            transform: rotateZ(-10deg)
        }
    }

    .blue {
        right: 0;
        top: 0;
        margin-right: -80px;
        margin-top: -70px;
        transform: rotateZ(25deg);
        
    }

    @media (max-width: 1280px) {
        .blue {
            /* margin: ; */
            transform: rotateZ(-20deg);
            margin-right: -340px;
            margin-top: -95px;
        }
    }

    @media (max-width: 1282) {
        .blue {
            transform: rotateZ(30deg);
            margin-top: -80px
        }
    }

    @media (min-width: 1082px) {
        .main-text {
            font-size: 50px;
        }
    }
</style>