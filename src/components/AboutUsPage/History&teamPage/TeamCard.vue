<script>
import { defineComponent } from 'vue';


export default defineComponent({
    props: {
        name: {
            type: String,
            required: true,
        },
        expertise:{
            type: String,
            required: true,
        },
        teamImage: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        twitter: {
            type: String,
            required: true,
        },
        linkedIn: {
            type: String,
            required: true,
        },
        website: {
            type: String,
            required: true,
        },
    }
    
})
</script>


<template>
    <div class="bg-[#f9fafb] w-fit py-4 px-6 flex flex-col gap-2 items-center text-center sm:text-[16px] text-[10px] font-sans">
        <div>
            <img class="w-[70px] h-[70px] rounded-[50%]" :src="image" alt="">
        </div>
        <p class="font-bold sm:text-[19px] text-[12px]">{{ name }}</p>
        <p class="text-[#8da3b7] sm:text-[16px] mb-4">{{ expertise }}</p>

        <div class="flex gap-6 w-fit">
            <a :href="twitter" target="_blank"><img src="../images/Twitter.svg" alt=""></a>
            <a :href="linkedIn" target="_blank"><img src="../images/Linkeden.svg" alt=""></a>
            <a :href="website" target="_blank"><img src="../images/WebLogo.svg" alt=""></a>
        </div>
    </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.font-sans {
    font-family: 'Inter', sans-serif;
}
</style>