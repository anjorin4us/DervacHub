<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: [ 'skill', 'caption'],
    data () {
      return {
        
      }
    }
})
</script>


<template>
    <div class=" border md:border-[#EAECF0] border-[#12283e] border-1 rounded-[16px] md:block flex flex-col items-center p-[24px] pb-[28px] mx-auto md:w-[768px] my-[20px]">
      <div class="flex justify-between py-[5px] w-[100%]">
        <div class="flex gap-2 justify-between md:w-fit w-[100%]">
            <p class="text-[#101828] md:font-[500] font-[900] sm:text-[18px]">{{ skill }}</p>

            <div class="bg-[#F0F9FF] py-[2px] px-[10px] rounded-[16px] flex items-center gap-[6px]">
              <div class="bg-[#026AA2] rounded-[50%] h-2 w-2"></div>
              <p class="text-[#026AA2]">Design</p>
            </div>
        </div>
        <button class="bg-gradient-to-r from-[#0B1927] to-[#224C75] text-white py-[2px] px-[10px] ps-[4px] rounded-[8px] md:block hidden">Apply Now</button>
      </div>
      <p class="font-[400] text-[#475467] md:mt-0 mt-4 sm:text-[15px] md:text-[17px] text-[13px]">{{ caption }}</p>
      <div class="flex gap-[30px] mt-[10px]">
         <div class="flex gap-2"><img src="./clock(2).svg" alt=""><p class="font-[400] sm:text-[15px] md:text-[17px] text-[13px] text-[#475467]">Full-time</p></div>
         <!-- <div class="flex gap-2"><img src="./currency-dollar-circle.svg" alt=""><p class="font-[400] sm:text-[15px] md:text-[17px] text-[13px] text-[#475467]">80k - 100k</p></div> -->
      </div>

      <router-link to="/Apply" class="w-full">
          <button class=" bg-gradient-to-r from-[#0B1927] to-[#224C75] text-white w-full rounded-[10px] md:hidden block mt-4 py-2">Apply Now</button>
      </router-link>
    </div>
</template>



<style>

</style>