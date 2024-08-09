<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['heading' , 'description' ,'steps']
})
</script>
<template>
            <div class="flex flex-col items-center justify-center">
                <p class="text-[24px] mb-8 p-3 font-bold px-6 w-fit rounded-[50%] text-center bg-[#E9EEF3] text-[#000000]">{{ steps }}</p>
                <p class="text-[20px] mb-2 text-[#101828] font-bold text-center">{{ heading }}</p>
                <p class="text-[16px] text-center text-[#475467]">{{ description }}</p>
            </div>
</template>