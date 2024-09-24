<script>
import { defineComponent } from 'vue';

export  default defineComponent({
    props: ['name', 'skill', 'testimonial', 'image'],
})
</script>




<template>
    <div class=" flex flex-col gap-4 justify-between h-full w-[300px] bg-white px-6 rounded-[10px] py-2 text-[13px] md:text-[15px] shadow-2xl shadow-gray-400">

       <div class="flex md:mx-0 mx-auto">
            <img src="../LandingPage/images/Star.svg" alt="rating">
            <img src="../LandingPage/images/Star.svg" alt="rating">
            <img src="../LandingPage/images/Star.svg" alt="rating">
            <img src="../LandingPage/images/Star.svg" alt="rating">
            <img src="../LandingPage/images/Star.svg" alt="rating">
       </div> 


        <div>
            <p class="text-[#98acbf] font-medium sm:text-left text-center">{{testimonial}}</p>
        </div>

       <div class="flex md:flex-row flex-col items-center gap-6 sm:mt-0 mt-4">
            <img :src="image" class="block h-20 w-20 rounded-full" alt="Testimony giver image">

            <div class="flex flex-col sm:text-left text-center">
                <p class="font-bold ">{{ name }}</p>
                <p>{{ skill }}</p>
            </div>
       </div>
    </div>
</template>



<style></style>