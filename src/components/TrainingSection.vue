<script>
import { defineComponent } from 'vue';



export default defineComponent({
    props: ['field', 'desc', 'Module', 'time', 'courseImage'],
    components: {},

})
</script>




<template>
  <a href="http://enroll.dervac.com" target="_blank">
    <div class="p-[21px] border border-gray-300 rounded-[15px] hover:border-0 hover:shadow-xl">
      <img :src="courseImage" alt="" class="mx-auto">
      <div class="flex justify-between items-center pt-[30px]">
        <p class="text-red-600 bg-[#F0F9FF] py-[2px] px-[10px] rounded-[16px]">{{Module}}</p>
        <p class="text-red-600 text-[14px] font-[600]">{{ time }}</p>
      </div>
      <h1 class="text-[#224C75] text-[24px] font-[600] leading-6 my-2">{{ field }}</h1>
      <p class="text-[#475467] text-[16px] font-[400]">
        {{desc}}
      </p>
      <div class="flex justify-between items-center text-[#344054] hover:text-white hover:bg-[#142c45] transition duration-500 mt-[24px] w-[161px] border border-gray-300 rounded-[15px] py-[12px] px-[16px]">
        <p class=" text-[18px] font-[400]">Enroll</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m11.93 5l2.83 2.83L5 17.59L6.42 19l9.76-9.75L19 12.07V5h-7.07Z"/></svg>
      </div>
    </div>
  </a>
</template>



<style></style>