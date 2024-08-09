<script>
import { defineComponent } from 'vue';



export  default defineComponent({
    props: ['name', 'skill', 'testimonial']
})
</script>




<template>
    <div class=" flex flex-col gap-4 bg-white px-6 rounded-[10px] py-8 text-[13px] md:text-[15px] shadow-2xl shadow-gray-400">
       <div class="flex md:mx-0 mx-auto">
            <img src="../LandingPage/images/Star.svg" alt="">
            <img src="../LandingPage/images/Star.svg" alt="">
            <img src="../LandingPage/images/Star.svg" alt="">
            <img src="../LandingPage/images/Star.svg" alt="">
            <img src="../LandingPage/images/Star.svg" alt="">
       </div> 


       <div>
        <p class="text-[#98acbf] font-medium sm:text-left text-center">{{testimonial}}</p>
       </div>

       <div class="flex md:flex-row flex-col items-center gap-6 sm:mt-0 mt-4">
            <div>
                <img src="../LandingPage/images/testimonials-image.svg" alt="">
            </div>

            <div class="flex flex-col sm:text-left text-center">
                <P class="font-bold ">{{ name }}</P>
                <p>{{ skill }}</p>
            </div>
       </div>
    </div>
</template>



<style></style>