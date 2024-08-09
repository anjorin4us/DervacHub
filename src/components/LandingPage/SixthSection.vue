<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    data() {
        return {
            hovering: 0,
        }
    }

  })
</script>

<template>
    <section id="sixth-section" class="overflow-hidden h-[100vh] md:px-24 px-8 py-20 w-full grid grid-cols-2 gap-10 bg-[whitesmoke] max-[1285px]:grid-cols-2 max-[1285px]:items-center max-[1285px]:h-fit">
        <div class="flex flex-col gap-8 max-[1285px]:items-center">
            <p class="lg:text-5xl font-black text-[#224C75]">Build a successful tech career without tuition until you are hired</p>
            <p class="lg:text-xl text-[gray]">At Dervac, we believe that everyone deserves the opportunity to pursue their dreams without the burden of the debt. That's why we've created a program that puts you in control of your education and career. Explore the core aspects of frontend web development in this hands-on course. Learn HTML, CSS, and JavaScript to create engaging and responsive user interfaces. Develop the skills to build and style web content, add interactivity, and ensure optimal user experiences across devices. Perfect for beginners and those looking to strengthen their front-End skills. Our fellowship got you covered</p>
            <div class="flex gap-10">
                <router-link to="/fellow">
                    <p class="cursor-pointer w-fit rounded-md px-2 py-[5px] lg:px-6 lg:py-[10px]" :class="hovering == 1? 'bg-[#102539] text-white' : 'border border-1 border-gray-300 text-[#224c75]'" @mouseover="hovering = 1" @mouseleave="hovering = 0">Learn more</p>
                </router-link>
                <a href="https://fellow.dervac.com" target="_blank">
                    <p class="cursor-pointer w-fit rounded-md px-2 py-[5px] lg:px-6 lg:py-[10px]" :class="hovering == 0? 'bg-[#102539] text-white' : 'border border-1 border-gray-300 text-[#224c75]'">Apply</p>
                </a>
            </div>
        </div>



        <div class="relative flex flex-col items-center gap-6 w-full">
            <div class="flex items-end gap-6 md:flex-row flex-col">
                <img src="./images/first-image-in-the-build-a-successful-tech-career-section.svg" class="z-10 w-full" alt="">
                <img src="./images/second-image-in-the-build-a-successful-tech-career-section.svg" class="z-10 w-full" alt="">
            </div>
            <div class="flex md:flex-row items-start gap-6 flex-col">
                <img src="./images/third-image-in-the-build-a-successful-tech-career-section.svg" class="z-10 w-full" alt="">
                <img src="./images/fourth-image-in-the-build-a-successful-tech-career-section.svg" class="z-10 w-full" alt="">
                <img src="./images/fifth-image-in-the-build-a-successful-tech-career-section.svg" class="z-10 w-full" alt="">
            </div>
            <div class="w-[600px] h-[600px] border-2 border-[#224C75] rounded-[50%] absolute z-0 left-[480px] max-[1285px]:left-[600px]"></div>
        </div>
    </section>
</template>