<script>
import { defineComponent } from 'vue';
import TrainingSection from './TrainingSection.vue';
import SecSixth from './fellowshipPage/SecSixth.vue';
import TenthSection from './LandingPage/TenthSection.vue';
import elementStores from '../stores/store'


export default defineComponent({
    components: { TrainingSection, SecSixth, TenthSection,},
    data() {
        return {
            courses: elementStores().$state.courses,
        }
    }
})
</script>




<template>
    <div class="bg-white pb-16">

        <!-- first section starts -->
        <div class="flex lg:flex-row flex-col relative text-center lg:text-left lg:gap-20 gap-0 bg-gradient-to-tl from-[#f2f6fb] to-[#f3e0e5] py-8 md:py-12 lg:pb-28 justify-between md:px-20 px-8 font-sans w-full items-center">
            <div class="flex flex-col gap-8 lg:w-[40%] w-full">
                <p class="md:text-[42px] font-extrabold sm:text-[30px] text-[#224c75]">Our <span class="text-[#d82e21]">training program</span> will help you secure a future in tech</p>

                <p class="text-[#224c75] md:text-[16px] text-[15px]">Our Courses offer a comprehensive learning experience designed to empower individuals with the knowledge and expertise needed to excel in the rapidly evolving field of technology. Spanning across various domains, our courses are carefully crafted to provide hands-on training, expert guidance, and practical skills that prepare students for a successful journey in the tech industry.</p>

                <div class="lg:block hidden z-30">
                    <a href="" target="_blank">
                        <component is="Button" value="Enrol now" class="text-[15px] md:text-[18px] px-8 rounded-[10px] py-5 bg-[#102539] text-white">Enrol now</component>
                    </a>
                </div>
            </div>

            <div>
                <img src="./training-hero-image.svg" alt="" class="z-30 mb-0 relative">
                <img src="./LandingPage/images/blue-curve.svg" alt="" class="absolute right-0 top-0 lg:block hidden">
            </div>
            <div class="lg:hidden mb-32 w-full">
                <a href="" target="_blank">
                    <component is="Button" value="Enrol now" class="text-[15px] w-full px-8 rounded-[10px] py-5 bg-[#224c75] text-white">Enrol now</component>
                </a>
            </div>   
            
            <img src="./fellowshipPage/images/red-curve.svg" alt="" class="absolute bottom-0 lg:left-0">
            
        </div>


        <!-- second section start -->

        <div class="md:px-20 px-8 py-[96px] bg-white">
            <div class="flex md:flex-row flex-col justify-between items-center">
                <p class="text-center sm:text-start text-[24px] lg:text-[30px] font-[600] text-[#224C75] h-fit leading-6">Dervac HUB Training Products</p>
            </div>
            <p class="text-[#475467] text-[20px] md:py-[20px] text-center sm:text-start">Discover our range of courses and select the one that best suits your needs and interests.</p>
            <div class="my-[20px] grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:my-2" >
                
                <TrainingSection v-for="(course, index) in courses" :field="course.field" :desc="course.desc"  :Module="course.module" :time="course.time" :courseImage="course.image" />
            </div>
        </div>


        <!-- third section starts -->
        <TenthSection />
    </div>
</template>





<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.font-sans {
    font-family: 'Inter', sans-serif;
}
</style>