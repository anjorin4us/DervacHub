<script>
import { defineComponent } from 'vue';
import elementStores from '../../stores/store';
import Button from '../Button.vue';


export default defineComponent({
    components: {Button},
    data () {
        return {
            showFaqsAnswerOne: elementStores().$state.showAnswer,
            showFaqsAnswerTwo: elementStores().$state.showAnswer,
            showFaqsAnswerThree: elementStores().$state.showAnswer,
            showFaqsAnswerFour: elementStores().$state.showAnswer,
            showFaqsAnswerFive: elementStores().$state.showAnswer,
            showFaqsAnswerSix: elementStores().$state.showAnswer,
        }
    },
    methods: {
        displayOne() {
            this.showFaqsAnswerOne = true;
            this.showFaqsAnswerTwo = false;
            this.showFaqsAnswerThree = false;
            this.showFaqsAnswerFour = false;
            this.showFaqsAnswerFive = false;
            this.showFaqsAnswerSix = false;
        },
        displayTwo() {
            this.showFaqsAnswerOne = false;
            this.showFaqsAnswerTwo = true;
            this.showFaqsAnswerThree = false;
            this.showFaqsAnswerFour = false;
            this.showFaqsAnswerFive = false;
            this.showFaqsAnswerSix = false;
        },
        displayThree() {
            this.showFaqsAnswerOne = false;
            this.showFaqsAnswerTwo = false;
            this.showFaqsAnswerThree = true;
            this.showFaqsAnswerFour = false;
            this.showFaqsAnswerFive = false;
            this.showFaqsAnswerSix = false;
        },
        displayFour() {
            this.showFaqsAnswerOne = false;
            this.showFaqsAnswerTwo = false;
            this.showFaqsAnswerThree = false;
            this.showFaqsAnswerFour = true;
            this.showFaqsAnswerFive = false;
            this.showFaqsAnswerSix = false;
        },
        displayFive() {
            this.showFaqsAnswerOne = false;
            this.showFaqsAnswerTwo = false;
            this.showFaqsAnswerThree = false;
            this.showFaqsAnswerFour = false;
            this.showFaqsAnswerFive = true;
            this.showFaqsAnswerSix = false;
        },
        displaySix() {
            this.showFaqsAnswerOne = false;
            this.showFaqsAnswerTwo = false;
            this.showFaqsAnswerThree = false;
            this.showFaqsAnswerFour = false;
            this.showFaqsAnswerFive = false;
            this.showFaqsAnswerSix = true;
        },
    }
})
</script>

<template>
    <!-- <section class="py-[2em] px-[4em] w-[700px] mx-auto">
        <div class="text-center py-[2em] space-y-2">
            <p class="text-[2em] font-bold">Frequently asked questions</p>
            <p class="">Everything you need to know about Dervac</p>
        </div>
        <div class="bullet-features">
            <div class="space-y-14 ">
                <div class="bullet flex gap-[2em]">
                    <img src="./images/minus-icon-gray-color.svg" class="" alt="">

                    <div>
                        <p class="font-bold">What Does Dervac HUB Do?</p>
                        <p>Dervac HUB is an initiative od Dervac Global Services Ltd non-profit partnership program that authorizes global universities and colleges to deliver industry-recognized Huawei Certification courses to students.</p>
                    </div>
                    
                </div>

                <div class="bullet flex gap-[2em]">
                    <img src="./images/minus-icon-gray-color.svg" class="" alt="">
                    <p class="font-bold">How Can I Enroll Into dervac HUB fellowship programs?</p>
                </div>

                <div class="bullet flex gap-[2em]">
                    <img src="./images/minus-icon-gray-color.svg" class="" alt="">
                    <p class="font-bold">What Next, After Registration?</p>
                </div>

                <div class="bullet flex gap-[2em]">
                    <img src="./images/minus-icon-gray-color.svg" class="" alt="">
                    <p class="font-bold">What Happens If I Don’t Pass The Assessment?</p>
                </div>

                <div class="bullet flex gap-[2em]">
                    <img src="./images/minus-icon-gray-color.svg" class="" alt="">
                    <p class="font-bold">When Will Classes For The First Cohort Start?</p>
                </div>

                <div class="bullet flex gap-[2em]">
                    <img src="./images/minus-icon-gray-color.svg" class="" alt="">
                    <p class="font-bold">How Long Is The Fellowship Program?</p>
                </div>

                
            </div>

            <div class="text-center pt-[4em]">
                <button class="bg-gray-200 px-[1.5em] py-[0.5em] font-bold rounded-[5px]" >See more</button>
            </div>
        </div>
    </section> -->

    <div class="md:w-[50%] md:px-0 px-6 md:mx-auto pt-16 flex flex-col gap-12 font-sans">
        <div class="text-center">
            <p class="font-extra8old md:text-[40px] text-[25px]">Frequently Asked Questions</p>
            <p class="sm:text-[15px]">Everything you need to know about Dervac</p>
        </div>

        <div>
            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit">
                    <img src="./images/plus-icon-gray-color.svg" v-if="!showFaqsAnswerOne" alt="" @click="displayOne">
                    <img src="./images/minus-icon-gray-color.svg" v-else alt="" @click="showFaqsAnswerOne = false">
                </div>


                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showFaqsAnswerOne ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-semibold text-[13px] sm:text-[18px]" :class="showFaqsAnswerOne ? 'text-left' : 'md:text-left text-center'">What Does Dervac Hub Do?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showFaqsAnswerOne">Dervac HUB is an initiative od Dervac Global Services Ltd non-profit partnership program that authorizes global universities and colleges to deliver industry-recognized Huawei Certification courses to students.</p>
                </div>
            </div>


            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" >
                    <img src="./images/plus-icon-gray-color.svg" v-if="!showFaqsAnswerTwo" alt="" @click="displayTwo">
                    <img src="./images/minus-icon-gray-color.svg" v-else alt="" @click="showFaqsAnswerTwo = false">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showFaqsAnswerTwo ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-semibold text-[13px] sm:text-[18px]" :class="showFaqsAnswerTwo ? 'text-left' : 'md:text-left text-center'">How Can I Enroll Into Dervac Hub Fellowship Program</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showFaqsAnswerTwo">To embark on the enlightening Dervac Hub Fellowship Program, visit their website and explore the dedicated enrollment section. Fill out the online application form with your personal details, academic background, and a compelling statement of purpose. Ensure you meet the eligibility criteria and submit your application before the specified deadline.</p>
                </div>
            </div>

            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit">
                    <img src="./images/plus-icon-gray-color.svg" v-if="!showFaqsAnswerThree" alt="" @click="displayThree">
                    <img src="./images/minus-icon-gray-color.svg" v-else alt="" @click="showFaqsAnswerThree = false">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showFaqsAnswerThree ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-semibold text-[13px] sm:text-[18px]" :class="showFaqsAnswerThree ? 'text-left' : 'md:text-left text-center'">What Next After Registration?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showFaqsAnswerThree">After registration, prepare for an incredible journey ahead. Stay tuned for program updates and instructions. Connect with fellow participants through provided communication channels. Be ready to engage in enriching activities and seize opportunities for personal and professional growth. Embrace the possibilities that await you on this exciting path.</p>
                </div>
            </div>

            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit">
                    <img src="./images/plus-icon-gray-color.svg" v-if="!showFaqsAnswerFour" alt="" @click="displayFour">
                    <img src="./images/minus-icon-gray-color.svg" v-else alt="" @click="showFaqsAnswerFour = false">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showFaqsAnswerFour ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-semibold text-[13px] sm:text-[18px]" :class="showFaqsAnswerFour ? 'text-left' : 'md:text-left text-center'">What Happens If I Don't Pass The Assessment?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="this.showFaqsAnswerFour">If you don't pass the assessment, fear not, for growth lies in resilience. Take the opportunity to reflect on areas for improvement. Seek guidance from mentors or resources provided by Dervac Hub. Embrace the chance to learn and reapply, for success often blooms from perseverance.</p>
                </div>
            </div>


            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit">
                    <img src="./images/plus-icon-gray-color.svg" v-if="!showFaqsAnswerFive" alt="" @click="displayFive">
                    <img src="./images/minus-icon-gray-color.svg" v-else alt="" @click="showFaqsAnswerFive = false">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showFaqsAnswerFive ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-semibold text-[13px] sm:text-[18px]" :class="showFaqsAnswerFive ? 'text-left' : 'md:text-left text-center'">When Will Class For The First Cohort Start?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showFaqsAnswerFive">The eagerly awaited first cohort classes will commence soon. Stay tuned for official announcements and program schedules. Keep an eye on your email or the Dervac Hub website for updates. Prepare yourself for an immersive learning experience that will ignite your journey toward greatness.</p>
                </div>
            </div>


            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit">
                    <img src="./images/plus-icon-gray-color.svg" v-if="!showFaqsAnswerSix" alt="" @click="displaySix">
                    <img src="./images/minus-icon-gray-color.svg" v-else alt="" @click="showFaqsAnswerSix = false">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showFaqsAnswerSix ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-semibold text-[13px] sm:text-[18px]" :class="showFaqsAnswerSix ? 'text-left' : 'md:text-left text-center'">How Long Is The Fellowship Program?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showFaqsAnswerSix">The Fellowship Program spans a transformative journey of eight months. Brace yourself for an intensive and rewarding experience. Engage in immersive learning, mentorship, and personal growth activities. Embrace the opportunity to delve deep into your field and emerge as a well-rounded professional.</p>
                </div>
            </div>
        </div>

        <div class="text-center">
            <!-- <button class="bg-gray-200 px-[1.5em] py-[0.5em] font-bold rounded-[5px]" >See more</button> -->
            <router-link to="/faqs">
                <Button value="See more" class="bg-white px-[1.5em] py-5 rounded-[10px] border-[2px] border-gray-200 hover:bg-[#11263b] transition duration-500 hover:text-white " />
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