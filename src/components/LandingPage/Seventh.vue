<script>
import { defineComponent } from 'vue';
import elementStores from '../../stores/store';

export default defineComponent({
    data(){
        return{
            testimonials: elementStores().$state.testimonials,
            testifier: elementStores().$state.testifier
        }
    }
})
</script>
<template>
    <div class="bg-gradient-to-b from-[#11263B] to-[#132b42] py-2 relative px-12 max-[447px]:px-[10px]">
        
        <div class="text-white text-center">
            <p class="text-[48px] mb-3 font-semibold">Testimonials</p>
            <!-- <p class="text-[25px] text-[#FF0000]">Hear from some of our amazing Students.</p> -->
        </div>
        <template v-for="(testimonial,index) in testimonials" :key="testimonial">
            <div v-if="index === testifier">
                <div class="w-fit mx-auto relative">
                    <img :src="testimonial.image" class="w-[150px] h-[150px] rounded-[50%]" :alt="testimonial.name">
                </div>
                <div class="text-[18px] mx-auto text-center text-white max-w-[900px] max-[460px]:text-xl mb-6">   
                    <p>{{ testimonial.speech }}</p>
                </div>


                <div class="flex justify-center items-center flex-col mb-6">
                    <p class="w-[350px] h-[1px] bg-gray-600"></p>
                    <p class="text-white text-[22px]">{{ testimonial.name }}</p>
                    <p class="text-[#FF0000] text-[14px]">{{ testimonial.occupation }}</p>
                </div>




                <div class="flex items-center justify-center gap-4">
                    <p class="w-[15px] h-[15px] rounded-[50%] border-2 border-[#FF0000]" @click="testifier = 0" :class="testifier === 0? ['bg-white','p-[3px]']:''"></p>
                    <p class="w-[15px] h-[15px] rounded-[50%] border-2 border-[#FF0000]" @click="testifier = 1" :class="testifier === 1? ['bg-white','p-[3px]']:''"></p>
                    <p class="w-[15px] h-[15px] rounded-[50%] border-2 border-[#FF0000]" @click="testifier = 2" :class="testifier === 2? ['bg-white','p-[3px]']:''"></p>
                    <p class="w-[15px] h-[15px] rounded-[50%] border-2 border-[#FF0000]" @click="testifier = 3" :class="testifier === 3? ['bg-white','p-[3px]']:''"></p>
                </div>


                <div v-if="testifier < testimonials.length-1" class="w-fit text-white absolute right-[4rem] top-[40%] max-[325px]:right-[2rem]" @click="testifier++">
                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 20 20"><g fill="currentColor"><path d="M11.732 9.36a1 1 0 1 1 1.536 1.28l-5 6a1 1 0 1 1-1.536-1.28l5-6Z"/><path d="M6.732 4.64a1 1 0 0 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28l-5-6Z"/></g></svg>
                </div>


                <div v-if="index >= 1" class="w-fit text-white absolute left-[4rem] top-[40%] max-[325px]:left-[2rem]" @click="testifier--">
                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 20 20"><g fill="currentColor"><path d="M6.732 10.64a1 1 0 1 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28l-5-6Z"/><path d="M8.268 10.64a1 1 0 1 1-1.536-1.28l5-6a1 1 0 1 1 1.536 1.28l-5 6Z"/></g></svg>
                </div>
            </div>
        </template>
    </div>
</template>