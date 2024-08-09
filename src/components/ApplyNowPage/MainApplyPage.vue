<script>
import { defineComponent } from 'vue';
import elementStores from '../../stores/store';
import First from './Firstsection.vue';
import Second from './SecondSection.vue';
import Third from './ThirdSection.vue'
import Button from '../Button.vue'


export default defineComponent({
    components: {First, Button, Second, Third},
    data() {
        return {
            // firstPage: elementStores().$state.onPage,
            secondPage: elementStores().$state.onPage,
            thirdPage: elementStores().$state.onPage,
            fourthPage: elementStores().$state.onPage,

            secondPageNext: elementStores().$state.nextPage,
            thirdPageNext: elementStores().$state.nextPage,
            fourthPageNext: elementStores().$state.nextPage,

            thirdPageUpper: elementStores().$state.nextAfterPage,
            fourthPageUpper: elementStores().$state.nextAfterPage,
            currentPage: elementStores().$state.Apply,
        }
    }
})
</script>



<template>
    <div class="md:grid md:grid-cols-2 hidden">
        <div id="leftSide" class="bg-[#214970] text-white font-sans lg:px-28 px-12 pb-28 pt-20 flex flex-col gap-24">
            <div class=" flex flex-col items-left gap-4">
                <div>
                    <img src="./images/dervachub-logo.svg" alt="">
                </div>
                <p class="text-[35px]">Steps to turn your dream into reality.</p>

                <div class="flex lg:flex-row flex-col-reverse items-center gap-4">
                    <div class="flex">
                        <img src="./images/Avatar.svg" alt="">
                        <img src="./images/Avatar(1).svg" alt="" class="ml-[-15px]">
                        <img src="./images/Avatar(2).svg" alt="" class="ml-[-15px]">
                        <img src="./images/Avatar(3).svg" alt="" class="ml-[-15px]">
                        <img src="./images/Avatar(4).svg" alt="" class="ml-[-15px]">
                    </div>

                    <p>Join 40,000+ students</p>
                </div>
            </div>

            <div>
                <div class="flex items-center gap-4">
                    <div class="flex flex-col items-center">
                        <img src="./images/check-on-page.svg" alt="">
                        <img src="./images/Connector.svg" alt="">
                    </div>

                    <div>
                        <p>Programme | Type</p>
                        <p>Select your programme type</p>
                    </div>
                </div>


                <div class="flex items-center gap-4">
                    <div class="flex flex-col items-center">
                        <div>
                            <img src="./images/check-on-page.svg" alt="" v-if="currentPage >= 2">
                            <img src="./images/dot-next-page.svg" alt="" v-else>
                        </div>
                        <img src="./images/Connector.svg" alt="">
                    </div>

                    <div>
                        <p>Personal details</p>
                        <p>Provide your personal details</p>
                    </div>
                </div>



                <div class="flex items-center gap-4">
                    <div class="flex flex-col items-center">
                        <div>
                            <img src="./images/check-on-page.svg" alt="" v-if="currentPage >= 3">
                            <img src="./images/dot-next-page.svg" alt="" v-if="currentPage == 2">
                            <img src="./images/dot-not-yet-there.svg" alt="" v-show="currentPage == 1">
                        </div>
                        <img src="./images/Connector.svg" alt="">
                    </div>

                    <div>
                        <p>Payments & Sponsorships</p>
                        <p>Select payment mode</p>
                    </div>
                </div>



                <div class="flex items-center gap-4">
                    <div class="flex flex-col items-center">
                        <div>
                            <img src="./images/check-on-page.svg" alt="" v-if="currentPage == 4">
                            <img src="./images/dot-next-page.svg" alt="" v-if="currentPage == 3">
                            <img src="./images/dot-not-yet-there.svg" alt="" v-show="currentPage < 3">
                        </div>
                        <!-- <img src="./images/Connector.svg" alt=""> -->
                    </div>

                    <div>
                        <p>Application submission</p>
                        <p>Submit your application</p>
                    </div>
                </div>
            </div>
        </div>

        <div id="rightSide" class="lg:px-40 px-20 pb-32 pt-12 flex flex-col gap-16 bg-white">
            <div class="flex flex-col gap-10">
                <div class="flex justify-between text-blue-400  text-[20px]">
                    <input type="button" value="Prev" v-show="currentPage > 1" @click="currentPage--">
                    <input type="button" value="Next" @click="currentPage++" v-show="currentPage < 5">
                </div>

                <div class="flex justify-between align-center">
                    <div class="h-[7px] w-[23%] rounded-[8px]" :class="currentPage == 1 ? 'bg-blue-400' : 'bg-gray-300'"></div>
                    <div class="h-[7px] w-[23%] rounded-[8px]" :class="currentPage == 2 ? 'bg-blue-400' : 'bg-gray-300'"></div>
                    <div class="h-[7px] w-[23%] rounded-[8px]" :class="currentPage == 3 ? 'bg-blue-400' : 'bg-gray-300'"></div>
                    <div class="h-[7px] w-[23%] rounded-[8px]" :class="currentPage == 4 ? 'bg-blue-400' : 'bg-gray-300'"></div>
                </div>
            </div>

            <!-- import firstSection -->
            <!-- import secondsection -->
            <!-- import thirdsection -->
            <!-- import fourthsection -->

            <div>
                <First v-show="currentPage == 1"/>
                <Second v-show="currentPage == 2"/>
                <Third v-show="currentPage == 3"/>
            </div>


            <Button value="Continue" v-show="currentPage <= 4" class="bg-gradient-to-tr from-[#17334f] text-white to-[#1c3e5f] w-full py-4 text-medium text-[17px] rounded-[8px]" @click="currentPage++"/>
            <input type="submit" value="" class="bg-gradient-to-tr from-[#17334f] text-white to-[#1c3e5f] w-full py-4 text-medium text-[17px] rounded-[8px]" v-show="currentPage == 5">
        </div>
    </div>

    <div class="md:hidden">
        <header>
            <nav id="navbar" class="bg-[#214970] text-white items-center font-sans flex-col px-6 py-4 flex">
                <div class=" flex flex-col gap-4">
                    <div>
                        <img src="./images/dervachub-logo.svg" alt="">
                    </div>
                    <p class="text-[14px] font-semibold">Steps to turn your dream into reality.</p>

                    <div class="flex items-center flex-col gap-4">
                        <div class="flex">
                            <img src="./images/Avatar.svg" alt="">
                            <img src="./images/Avatar(1).svg" alt="" class="ml-[-15px]">
                            <img src="./images/Avatar(2).svg" alt="" class="ml-[-15px]">
                            <img src="./images/Avatar(3).svg" alt="" class="ml-[-15px]">
                            <img src="./images/Avatar(4).svg" alt="" class="ml-[-15px]">
                        </div>

                        <p>Join 40,000+ students</p>
                    </div>
                </div>

                <div class="grid sm:grid-cols-2 grid-cols-1 sm:gap-0 gap-y-4 items-center">
                    <div class="flex items-center gap-4">
                        <div class="flex flex-col items-center">
                            <img src="./images/check-on-page.svg" alt="">
                            <img src="./images/Connector.svg" alt="">
                        </div>

                        <div>
                            <p>Programme | Type</p>
                            <p>Select your programme type</p>
                        </div>
                    </div>


                    <div class="flex items-center gap-4">
                        <div class="flex flex-col items-center">
                            <div>
                                <img src="./images/check-on-page.svg" alt="" v-if="currentPage >= 2">
                                <img src="./images/dot-next-page.svg" alt="" v-else>
                            </div>
                            <img src="./images/Connector.svg" alt="">
                        </div>

                        <div>
                            <p>Personal details</p>
                            <p>Provide your personal details</p>
                        </div>
                    </div>



                    <div class="flex items-center gap-4">
                        <div class="flex flex-col items-center">
                            <div>
                                <img src="./images/check-on-page.svg" alt="" v-if="currentPage >= 3">
                                <img src="./images/dot-next-page.svg" alt="" v-if="currentPage == 2">
                                <img src="./images/dot-not-yet-there.svg" alt="" v-show="currentPage == 1">
                            </div>
                            <img src="./images/Connector.svg" alt="">
                        </div>

                        <div>
                            <p>Payments & Sponsorships</p>
                            <p>Select payment mode</p>
                        </div>
                    </div>



                    <div class="flex items-center gap-4">
                        <div class="flex flex-col items-center">
                            <div>
                                <img src="./images/check-on-page.svg" alt="" v-if="currentPage >= 4">
                                <img src="./images/dot-next-page.svg" alt="" v-if="currentPage == 3">
                                <img src="./images/dot-not-yet-there.svg" alt="" v-show="currentPage < 3">
                            </div>
                            <img src="./images/Connector.svg" alt="">
                        </div>

                        <div>
                            <p>Application submission</p>
                            <p>Submit your application</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <div id="rightSide" class="lg:px-40 px-20 pb-32 pt-12 flex flex-col gap-16 bg-white">
            <div class="flex flex-col gap-10">
                <div class="flex justify-between text-blue-400  text-[20px]">
                    <input type="button" value="Prev" v-show="currentPage > 1" @click="currentPage--">
                    <input type="button" value="Next" @click="currentPage++" v-show="currentPage < 5">
                </div>

                <div class="flex justify-between align-center">
                    <div class="h-[7px] w-[23%] rounded-[8px]" :class="currentPage == 1 ? 'bg-blue-400' : 'bg-gray-300'"></div>
                    <div class="h-[7px] w-[23%] rounded-[8px]" :class="currentPage == 2 ? 'bg-blue-400' : 'bg-gray-300'"></div>
                    <div class="h-[7px] w-[23%] rounded-[8px]" :class="currentPage == 3 ? 'bg-blue-400' : 'bg-gray-300'"></div>
                    <div class="h-[7px] w-[23%] rounded-[8px]" :class="currentPage == 4 ? 'bg-blue-400' : 'bg-gray-300'"></div>
                </div>
            </div>

            <!-- import firstSection -->
            <!-- import secondsection -->
            <!-- import thirdsection -->
            <!-- import fourthsection -->

            <div>
                <First v-show="currentPage == 1"/>
                <Second v-show="currentPage == 2"/>
                <Third v-show="currentPage == 3"/>
            </div>


            <Button value="Continue" v-show="currentPage <= 4" class="bg-gradient-to-tr from-[#17334f] text-white to-[#1c3e5f] w-full py-4 text-medium text-[17px] rounded-[8px]" @click="currentPage++"/>
            <input type="submit" value="" class="bg-gradient-to-tr from-[#17334f] text-white to-[#1c3e5f] w-full py-4 text-medium text-[17px] rounded-[8px]" v-show="currentPage == 5">
        </div>
    </div>
</template>



<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.font-sans {
    font-family: 'Inter', sans-serif;
}
</style>