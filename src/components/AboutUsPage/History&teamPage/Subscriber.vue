<script>
import {defineComponent} from 'vue';
import Button from '../../Button.vue';

export default defineComponent({
    

})
</script>
<template>
       <div class="flex md:flex-row flex-col items-center bg-[#f9fafb] gap-10 rounded-[10px] md:p-16 p-10 justify-between my-[100px] md:my-24">
            <div class="flex flex-col gap-4 md:text-left text-center">
                <p class="md:text-[30px] text-[25px] font-bold">Join 2,000+ subscribers</p>
                <p class="md:text-[18px]">Stay in the loop with everything you need to know.</p>
            </div>

            <div class="flex lg:flex-row flex-col gap-4 md:h-[48px]">
                <input type="email" class="block focus:border-none rounded-[8px] border-[2px] border-solid border-gray-300 px-[5px] py-[7px] lg:w-[350px]" placeholder="Enter your Email">
                <input  value="Subscribe" class="bg-gradient-to-r from-[#132b42] to-[#1d4266] rounded-[5px] text-white py-3 px-5 md:w-fit w-full"/>
            </div>
        </div>
</template>