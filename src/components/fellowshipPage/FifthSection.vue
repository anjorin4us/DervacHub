<script>
import { defineComponent } from 'vue';
import Button from '../Button.vue';

export default defineComponent({
    components: {Button}
})
</script>

<template>
        <div class="grid md:grid-cols-2 grids-rows-2 items-center py-6 px-20 md:px-4 space-y-12 md:space-y-0">
            <div class="space-y-8 py-[2em] px-[4em] w-full">
                <p class="text-red-600 text-[40px] md:text-left text-center font-bold">Who can Apply?</p>
                <p class="font-bold text-gray-500 md:text-left text-center">Requirements CheckList</p>
                <div class="space-y-6">
                    <div class="bullet flex gap-[1em]">
                        <img src="./images/Check-icon.svg" class="" alt="">
                        <p class="font-bold text-gray-500">Must be between the ages of 17 and 45</p>
                    </div>

                    <div class="bullet flex gap-[1em]">
                        <img src="./images/Check-icon.svg" class="" alt="">
                        <p class="font-bold text-gray-500">Must demonstrate a willingness and readiness to learn</p>
                    </div>

                    <div class="bullet flex gap-[1em]">
                        <img src="./images/Check-icon.svg" class="" alt="">
                        <p class="font-bold text-gray-500">Must be a dedicated tech enthusiast.</p>
                    </div>

                    <div class="bullet flex gap-[1em]">
                        <img src="./images/Check-icon.svg" class="" alt="">
                        <p class="font-bold text-gray-500">Must be able to attend classes on thrice (weekdays), onsite for a period of 6 months.</p>
                    </div>

                    <div class="bullet flex gap-[1em]">
                        <img src="./images/Check-icon.svg" class="" alt="">
                        <p class="font-bold text-gray-500">Must have access to a working Laptop.</p>
                    </div>

                    <div class="bullet flex gap-[1em]">
                        <img src="./images/Check-icon.svg" class="" alt="">
                        <p class="font-bold text-gray-500">Must have explored the payment plan and know the right option for me.</p>
                    </div>

                    <div class="bullet flex gap-[1em]">
                        <img src="./images/Check-icon.svg" class="" alt="">
                        <p class="font-bold text-gray-500">Must have atleast two guarantors, one relative and one non-relative (for flexible pay only).</p>
                    </div>

                </div>

                <Button value="Apply Now" class="md:block hidden p-3 hover:bg-[#224c75]  hover:border-white hover:text-white transition duration-500 ease-in-out border-red-300 border-[2px] text-red-400 rounded-[10px]"/>

            </div>

            <div>
                <img src="./images/bowl-on-laptop.svg" alt="">
            </div>

            <Button value="Apply Now" class="md:hidden border-red-300 border-[2px] text-red-400 rounded-[10px]"/>

        </div>
</template>