<script>
import { defineComponent } from 'vue';
import Button from '../../Button.vue';


export default defineComponent({
    components: {Button},
    props: [],
    data () {
        return {
            
        }
    }
})
</script>


<template>
    <div class="font-sans bg-[#f9fafb] mx-32 rounded-[10px] py-10 text-center flex flex-col gap-8 items-center">
        <div class="flex">
            <img src="../images/Avatar.svg" alt="" class="">
            <img src="../images/Avatar(1).svg" alt="" class="ml-[-15px] z-10 mt-[-8px]">
            <img src="../images/Avatar(2).svg" alt="" class="ml-[-15px]">
        </div>

        <div class="flex flex-col items-center gap-4">
            <p class="font-bold text-[20px] text-[#4a515d]">Still have questions?</p>
            <p class="text-[#8a929e] text-[18px]">Can't find the answer you are looking for? Please contact us.</p>
            <router-link to="/contact">
                <Button value="Get in touch" class="bg-gradient-to-r from-[#132b42] to-[#1d4266] rounded-[5px] text-white py-3 px-5" />
            </router-link>
        </div>
    </div>
</template>




<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.font-sans {
    font-family: 'Inter', sans-serif;
}
</style>