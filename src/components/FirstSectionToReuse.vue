<script>
import { defineComponent } from 'vue';


export default defineComponent({
    props: ['heading', 'caption']
})
</script>



<template>
    <!-- #f3dee3 -->
    <!-- #f2f9ff -->
    <div class="relative w-screen py-40 md:px-32 px-4 text-center bg-gradient-to-l from-[#f2f9ff] via-[#f2f7fd] to-[#f3dee3]">
        <p class="md:text-[50px] text-[30px] font-bold z-30">{{ heading }}</p>
        <p class="md:text-[20px] text-[15px] text-[#475467] z-30 mt-2">{{ caption }}</p>
        <img src="../assets/images/blue-curve-to-re-use.svg" alt="" class="absolute right-0 top-0">
        <img src="../assets/images/red-curve-to-re-use.svg" alt="" class="absolute left-0 bottom-0">
    </div>
</template>


<style></style>