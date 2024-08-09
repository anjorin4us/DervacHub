<script>
import { defineComponent } from 'vue';
import ButtonVue from '../Button.vue';


export default defineComponent({
    components: {ButtonVue}
})
</script>





<template>
    <div class="flex lg:flex-row flex-col relative text-center lg:text-left lg:gap-20 gap-4 bg-gradient-to-tl from-[#f2f6fb] to-[#f3e0e5] py-8 md:py-12 lg:pb-28 justify-between md:px-20 px-8 font-sans w-full items-center">
        <div class="flex flex-col gap-8 lg:w-[50%] w-full">
            <p class="md:text-[50px] font-extrabold sm:text-[40px] text-[30px] text-[#224c75]"><span class="text-[#224c75]">Collaborate</span> with us</p>

            <p class="text-[#224c75] md:text-[20px] text-[18px]">Interested in inspiring the next generation of top Tech talent? Collaborate with us.</p>

            <p class="text-[#224c75] md:text-[20px] text-[18px]">We are commited to help as many young people to kickstart a career in technology by providing them with access to quality technical education by the real world experts.</p>
            <div class="lg:block hidden z-30">
                <a href="https://forms.gle/CY3pgVqEwB6h6UM76" target="_blank">
                    <component is="ButtonVue" value="Collaborate" class="text-[15px] md:text-[18px] px-8 rounded-[10px] py-5 bg-[#102539] text-white"></component>
                </a>
            </div>
        </div>

        <div>
            <img src="./images/chair.svg" alt="" class="z-30 mb-0 relative">
            <img src="./images/blue-curve.svg" alt="" class="absolute right-0 top-0 lg:block hidden">
        </div>

        <div class="lg:hidden mb-32 w-full">
            <component is="ButtonVue" value="Collaborate" class="text-[15px] w-full px-8 rounded-[10px] py-5 bg-[#224c75] text-white">Collaborate</component>
        </div>

        <img src="./images/red-curve.svg" alt="" class="absolute bottom-0 lg:left-0">
    </div>
</template>





<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.font-sans {
    font-family: 'Inter', sans-serif;
}
</style>