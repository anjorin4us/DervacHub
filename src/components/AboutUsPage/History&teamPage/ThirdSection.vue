<script>
import { defineComponent } from 'vue';
import Button from '../../Button.vue';
import TeamCard from './TeamCard.vue';
import elementStores from '../../../stores/store'


export default defineComponent({
    components: {Button, TeamCard},
    data () {
        return {
            team: elementStores().$state.team
        }
    }
})
</script>



<template>
    <section class="grid md:grid-cols-2 bg-[#f2f9ff] items-center sm:px-24 px-8 py-20 gap-10 font-sans">
        <div class="flex flex-col gap-6 md:text-left text-center">
            <p class="text-[40px] font-bold text-[#224c75]">We are technology platform</p>
            <p class="text-[#475467] md:text-[20px] text-[16px]">Dervac ICT Hub is a technology skills platform that nurtures technology startups with global aspirations, providing Co-Working Space as part of the ingredients for business prosperity. An initiative of Dervac Global Services Ltd, it is situated in Palmgrove, Lagos, Nigeria. Our physical training center aims to provide access to ICT knowledge and skills, ultimately benefiting the country. We take pride in our capability to turn ideas into business solutions, helping thousands of organizations undergo transformation at scale and eventually enter the market. Our team of experts excels at comprehending your needs, challenging ideas, and devising innovative solutions that generate significant and lasting social impact, while delivering top-notch IT solutions</p>
            <Button value="Join us now" class="bg-gradient-to-r from-[#132b42] to-[#1d4266] rounded-[5px] text-white py-3 px-5 md:block hidden "/>

        </div>

        <div class="flex flex-col items-center gap-4">
            <div class="flex items-end md:gap-4 gap-6 md:flex-row flex-col">
                <img src="../../LandingPage/images/first-image-in-the-build-a-successful-tech-career-section.svg" alt="" class="block">
                <img src="../../LandingPage/images/second-image-in-the-build-a-successful-tech-career-section.svg" alt="" class="block">
            </div>

            <div class="flex md:items-start items-center md:gap-4 gap-6 md:flex-row flex-col">
                <img src="../../LandingPage/images/third-image-in-the-build-a-successful-tech-career-section.svg" alt="" class="block">
                <img src="../../LandingPage/images/fourth-image-in-the-build-a-successful-tech-career-section.svg" alt="" class="block">
                <img src="../../LandingPage/images/fifth-image-in-the-build-a-successful-tech-career-section.svg" alt="" class="lg:block md:hidden block">
            </div>
        </div>

        <Button value="Join us now" class="bg-gradient-to-r from-[#132b42] to-[#1d4266] rounded-[5px] text-white py-3 px-5 w-full md:hidden"/>
    </section>

    <section class="bg-white sm:px-24 px-8 py-10 font-sans">
        <div class="text-center flex flex-col items-center gap-8 ">
            <div class="sm:w-[60%] w-full">
                <p class="font-bold sm:text-[35px] text-[25px]">The team </p>
                <p class="mt-6 sm:text-[19px] text-[14px] text-[#475467]">Our philosophy is simple - hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.</p>
            </div>

            <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-8">
                <TeamCard v-for="people in team" :key="people.id" :expertise="people.based"  :name="people.name" :image="people.imageUrl" :twitter="people.twitter" :linkedIn="people.linkedIn" :website="people.website" class="w-full"/>
            </div>

            <router-link to="/fellows">
                <div class="bg-[#102539] text-white p-4 rounded-[5px] text-[20px]">Meet Our Trained Fellows</div>
            </router-link>
        </div>
    </section>


    
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.font-sans {
    font-family: 'Inter', sans-serif;
}
</style>