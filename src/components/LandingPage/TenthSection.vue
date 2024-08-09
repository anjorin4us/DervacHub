<script>
import { defineComponent } from 'vue';
import Button from '../Button.vue';


export default defineComponent({
    componets: {Button},
    data() {
        return {
            hovering: 0,
        }
    }
})
</script>




<template>
    <div class="bg-[#11263b] w-[80%] mx-auto relative mb-6 text-white text-center md:py-16 py-8 px-6 rounded-[10px] my-8 items-center flex flex-col gap-6">
        <p class="md:text-[40px] text-[23px] font-bold">Start your career</p>
        <p class="">Join over 500+ students already growing with Dervac</p>
        <div class="flex gap-4 md:flex-row flex-col md:w-fit w-full">
            <router-link to="/courses">
                <component is="Button" class="py-2 px-4 rounded-[5px]" value="Enroll for training" :class="hovering == 1? 'bg-[#102539] text-white' : 'bg-white text-[#224c75]'" @mouseover="hovering = 1" @mouseleave="hovering = 0">Enroll for training</component>
            </router-link>
            <router-link to="/career">
                <component is="Button" class="bg-[#224C75] py-2 px-4 rounded-[5px] md:w-fit w-full" value="Join Fellowship" :class="hovering == 0? 'bg-[#102539] text-white' : 'bg-white text-[#224c75]'">Join Fellowship</component>
            </router-link>
        </div>

        <img src="./images//left.svg" alt="" class="absolute top-0 left-0" />
        <img src="./images/right-curve.svg" alt="" class="absolute right-0 bottom-0">
    </div>
</template>



<style></style>