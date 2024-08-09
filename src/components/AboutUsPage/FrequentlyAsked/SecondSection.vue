<script>
import { defineComponent } from 'vue';
import elementStores from '../../../stores/store';


export default defineComponent({
    components: {},
    props: [],
    data () {
        return {
            showRealFaqsAnswerOne: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerTwo: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerThree: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerFour: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerFive: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerSix: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerSeven: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerEight: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerNine: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerTen: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerEleven: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerTwelve: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerThirteen: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerFourteen: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerFifteen: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerSixteen: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerSeventeen: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerEighteen: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerNineteen: elementStores().$state.showAnswerInMainPage,
        }
    }
})
</script>


<template>
    <div class="md:w-[50%] md:px-0 px-6 md:mx-auto py-16 flex flex-col gap-12 font-sans">
        <div class="text-center">
            <p class="font-extrabold md:text-[40px] text-[25px]">Frequently asked questions</p>
            <p class="sm:text-[18px]">Everything you need to know about Dervac</p>
        </div>

        <div>
            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerOne = !this.showRealFaqsAnswerOne">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerOne" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>


                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerOne ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerOne ? 'text-left' : 'md:text-left text-center'">What Does Dervac Hub Do?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerOne">Dervac HUB is an initiative od Dervac Global Services Ltd non-profit partnership program that authorizes global universities and colleges to deliver industry-recognized Huawei Certification courses to students.</p>
                </div>
            </div>


            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerTwo = !this.showRealFaqsAnswerTwo">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerTwo" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerTwo ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerTwo ? 'text-left' : 'md:text-left text-center'">How Can I Enroll Into Dervac Hub Fellowship Program</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerTwo">To embark on the enlightening Dervac Hub Fellowship Program, visit their website and explore the dedicated enrollment section. Fill out the online application form with your personal details, academic background, and a compelling statement of purpose. Ensure you meet the eligibility criteria and submit your application before the specified deadline.</p>
                </div>
            </div>

            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerThree = !this.showRealFaqsAnswerThree">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerThree" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerThree ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerThree ? 'text-left' : 'md:text-left text-center'">What Next After Registration?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerThree">After registration, prepare for an incredible journey ahead. Stay tuned for program updates and instructions. Connect with fellow participants through provided communication channels. Be ready to engage in enriching activities and seize opportunities for personal and professional growth. Embrace the possibilities that await you on this exciting path.</p>
                </div>
            </div>

            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerFour = !this.showRealFaqsAnswerFour">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerFour" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerFour ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerFour ? 'text-left' : 'md:text-left text-center'">What Happens If I Don't Pass The Assessment?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="this.showRealFaqsAnswerFour">If you don't pass the assessment, fear not, for growth lies in resilience. Take the opportunity to reflect on areas for improvement. Seek guidance from mentors or resources provided by Dervac Hub. Embrace the chance to learn and reapply, for success often blooms from perseverance.</p>
                </div>
            </div>


            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerFive = !this.showRealFaqsAnswerFive">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerFive" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerFive ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerFive ? 'text-left' : 'md:text-left text-center'">When Will Class For The First Cohort Start?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerFive">The eagerly awaited first cohort classes will commence soon. Stay tuned for official announcements and program schedules. Keep an eye on your email or the Dervac Hub website for updates. Prepare yourself for an immersive learning experience that will ignite your journey toward greatness.</p>
                </div>
            </div>


            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerSix = !this.showRealFaqsAnswerSix">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerSix" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerSix ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerSix ? 'text-left' : 'md:text-left text-center'">How Long Is The Fellowship Program?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerSix">The Fellowship Program spans a transformative journey of eight months. Brace yourself for an intensive and rewarding experience. Engage in immersive learning, mentorship, and personal growth activities. Embrace the opportunity to delve deep into your field and emerge as a well-rounded professional.</p>
                </div>
            </div>



            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerSeven = !this.showRealFaqsAnswerSeven">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerSeven" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerSeven ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerSeven ? 'text-left' : 'md:text-left text-center'">If I Am Succesful, Can I Defer My Admission?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerSeven">Absolutely! If you are successful in the test and have been offered admission to our program, we understand that certain circumstances may require you to defer your admission. We encourage open communication, so if you find yourself in such a situation, please reach out to our admissions team.</p>
                </div>
            </div>




            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerEight = !this.showRealFaqsAnswerEight">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerEight" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerEight ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerEight ? 'text-left' : 'md:text-left text-center'">Will I Get A Certificate At The End Of The Training?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerEight">Yes, upon successful completion of the program, you will be awarded a certificate. Our program is designed to equip you with the necessary skills and knowledge to excel. The certificate will serve as a recognition of your dedication and hard work throughout the training.</p>
                </div>
            </div>




            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerNine = !this.showRealFaqsAnswerNine">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerNine" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerNine ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerNine ? 'text-left' : 'md:text-left text-center'">Are There Any Other Benefit That Comes With the Training?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerNine">Absolutely! Apart from receiving a certificate upon successful completion of the training, our program offers a range of additional benefits to enhance your learning experience and career prospects: Hands-On Projects, Experienced Instructors, Continuous Learning, Skill Growth.</p>
                </div>
            </div>




            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerTen = !this.showRealFaqsAnswerTen">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerTen" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerTen ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerTen ? 'text-left' : 'md:text-left text-center'">Do I Need To Have A background In Tech To Apply?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerTen">Not necessarily! Our program is designed to cater to individuals from diverse backgrounds, including those without prior experience in tech. While having some familiarity with technology can be helpful, it is not a mandatory requirement to apply.</p>
                </div>
            </div>




            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerEleven = !this.showRealFaqsAnswerEleven">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerEleven" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerEleven ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerEleven ? 'text-left' : 'md:text-left text-center'">What Qualifies Me To Get Accepted Into The Fellowship Program?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerEleven">The qualifications for acceptance into the Fellowship Program include but not limited to passing the test, having a good reputation (after investigation ).....</p>
                </div>
            </div>




            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerTwelve = !this.showRealFaqsAnswerTwelve">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerTwelve" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerTwelve ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerTwelve ? 'text-left' : 'md:text-left text-center'">How Much Is The Tuition Fee?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerTwelve">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est adipisci dignissimos eos earum voluptates quos esse neque! Doloremque veritatis amet possimus laborum tempore voluptates vel, earum id ex animi reprehenderit saepe cumque repellat explicabo! Suscipit laudantium quos eum vero hic dicta recusandae natus asperiores consectetur!</p>
                </div>
            </div>




            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerThirteen = !this.showRealFaqsAnswerThirteen">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerThirteen" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerThirteen ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerThirteen ? 'text-left' : 'md:text-left text-center'">Will I Receive Any Assistance In Securing A Job After I Graduate?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerThirteen">As much as we would love to assist all our graduates in securing a job, we do not provide direct job placement or guarantee employment after graduation. Our primary focus is to equip you with the knowledge, skills, and confidence to pursue a successful career in your chosen field.</p>
                </div>
            </div>




            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerFourteen = !this.showRealFaqsAnswerFourteen">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerFourteen" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerFourteen ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerFourteen ? 'text-left' : 'md:text-left text-center'">What Will I Learn In Classes During The Seven Months?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerFourteen">During the seven-month FrontEnd program, you will undergo a comprehensive and dynamic learning experience designed to equip you with the necessary skills and knowledge to become a proficient FrontEnd developer. Throughout the classes, you can expect to learn the following key areas: HTML and CSS Fundamentals, Responsive Web Design, JavaScript and ES6, FrontEnd Frameworks and Libraries, Version Control with Git, Project Work, ....</p>
                </div>
            </div>




            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerFifteen = !this.showRealFaqsAnswerFifteen">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerFifteen" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerFifteen ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerFifteen ? 'text-left' : 'md:text-left text-center'">Where Will The Class Take Place?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerFifteen">Certainly! The classes for the FrontEnd program will take place at 65 Shipeolu Street, which is located in Palmgroove, Lagos, Nigeria. Our state-of-the-art facility at this address is specifically designed to create an optimal learning environment for our students.</p>
                </div>
            </div>



            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerSixteen = !this.showRealFaqsAnswerSixteen">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerSixteen" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerSixteen ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerSixteen ? 'text-left' : 'md:text-left text-center'">How Will Application Run For?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerSixteen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam provident optio harum libero perspiciatis nesciunt autem impedit aliquam sint, sit vitae dolores quos quae nam modi laudantium mollitia nisi? Atque itaque, veniam molestias sapiente, laudantium facere, temporibus pariatur eum nisi nobis fugiat aspernatur ea. Ullam sit error aliquid adipisci.</p>
                </div>
            </div>



            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerSeventeen = !this.showRealFaqsAnswerSeventeen">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerSeventeen" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerSeventeen ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerSeventeen ? 'text-left' : 'md:text-left text-center'">How Can I Collaborate / Partner With Dervac?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerSeventeen">Thank you for your interest in collaborating or partnering with Dervac! We welcome opportunities to work together and explore mutually beneficial partnerships. You can reach out to us from any of our means of communication provided in the contact page or click the <q>Get in touch button below</q></p>
                </div>
            </div>



            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerEighteen = !this.showRealFaqsAnswerEighteen">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerEighteen" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerEighteen ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerEighteen ? 'text-left' : 'md:text-left text-center'">How Long Is The Fellowship Program?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerEighteen">The Fellowship Program is eight months in duration. Throughout these eight months, you will undergo an immersive and transformative learning experience that will equip you with valuable skills and knowledge in your chosen field. The program is designed to provide comprehensive training, hands-on projects, and opportunities for personal and professional growth. Our goal is to empower you to become a proficient and confident professional by the end of the eight-month journey.</p>
                </div>
            </div>




            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerNineteen = !this.showRealFaqsAnswerNineteen">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerNineteen" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerNineteen ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerNineteen ? 'text-left' : 'md:text-left text-center'">Holiday And Absence Policy?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerNineteen">The Holiday and Absence Policy for the Fellowship Program is designed to ensure a balance between the rigorous learning experience and the well-being of participants. Here are the key points of the policy: scheduled Holidays, Absence Notification, Maximum Allowed Abbsences, illness / Emergency</p>
                </div>
            </div>
        </div>

        <!-- <div class="text-center"> -->
            <!-- <button class="bg-gray-200 px-[1.5em] py-[0.5em] font-bold rounded-[5px]" >See more</button> -->
            <!-- <router-link to="/faqs"> -->
                <!-- <Button value="See more" class="bg-white px-[1.5em] py-5 rounded-[10px] border-[2px] border-gray-200"/> -->
            <!-- </router-link> -->

        <!-- </div> -->
    </div>
</template>




<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.font-sans {
    font-family: 'Inter', sans-serif;
}
</style>