<script>
import { defineComponent } from 'vue';
import Button from './Button.vue';
import elementStore from '../stores/store';
// import elementStores from '../../stores/store';



export default defineComponent({
    components: {Button},
    data() {
        return {
            drop: false,
            dropAboutUsOptions: false,
            Hire: elementStore().$state.changeHireColor,
            hovering: 0,
        }
    }, 
})
</script>


<template>
    <header class="bg-white sm:px-8 py-4 rounded-xl font-sans">
            <nav class="flex sm:flex-row flex-col justify-between items-center text-center sm:space-y-0 space-y-2 lg:space-x-24 relative lg:static">  
            <!-- dervac Logo -->

                <router-link to="/">
                    <div id="logo" class="flex space-x-[3px] items-center" @click="() => { drop = false;}">
                        <img src="./dervac_logo.png" alt="" class="w-[40px]">
                        <p class="font-[Bimini] sm:text-[25px] sm:block hidden text-[#224c75] font-semibold">dervac<span class="text-red-600">HUB</span></p>
                    </div>
                </router-link>



                <!-- links to other pages -->

                <div id="links" class="lg:flex list-none justify-between text-[14px] lg:gap-8 font-medium text-[#224c75] lg:relative lg:top-[0px] lg:left-[0px] absolute top-[70px] w-full lg:bg-white bg-[#f4dde2] rounded-xl lg:rounded-[0] z-50" :class="!drop ? 'left-[-1400px]' : 'left-[0]'" transition-right duration-900>

                
                    <li class="py-4 md:text-[18px]"><router-link to="/fellow" @click="() => { dropAboutUsOptions = false}">Fellowship</router-link></li>
                    <li class="py-4 md:text-[18px]"><router-link to="/courses" @click="() => { dropAboutUsOptions = false}">Courses</router-link></li>
                    <li class="py-4 md:text-[18px]"><router-link to="/collaborate" @click="() => { dropAboutUsOptions = false}">Collaborate</router-link></li>


                    <li class="py-4  relative" @click="() => { dropAboutUsOptions = !dropAboutUsOptions}">
                        <div class="flex gap-4 w-fit mx-auto items-center cursor-pointer">
                            <p  class="md:text-[18px]" :class="dropAboutUsOptions ? 'text-red-600' : 'text-[#224c75]'">About us</p>
                            <img src="../assets/images/collaborate-arrow.svg" alt="" v-show="!dropAboutUsOptions">
                            <img src="../assets/images/red-drop-arrow.svg" v-show="dropAboutUsOptions" /> 
                        </div>
                    </li>



                    
                    <!-- subdivision of the about page -->
                    
                    <div class="bg-[#f7f7f7] flex flex-col justify-between lg:absolute md:left-[500px] top-[68px] lg:rounded-xl sm:p-4 px-2" v-show="dropAboutUsOptions">
                        <router-link to="/profile">
                            <div class="flex justify-between gap-4 sm:py-4 py-2 text-black sm:rounded-xl hover:bg-blue-100 sm:px-4 ">
                                <div class="flex gap-2 items-center" @click="() => { dropAboutUsOptions = !dropAboutUsOptions}">
                                    <div class="bg-gray-200 p-2 rounded-[50%] sm:block hidden">
                                        <div>
                                            <img src="../assets/images/history-icon.svg" alt="">
                                        </div>
                                    </div> 
                                    
                                    <p class="">Profile</p>
                                </div>

                                <img src="../assets/images/forward-arrow-in-collaborate.svg" alt="">
                            </div>
                        </router-link>

                        <div class="w-full h-[2px] bg-black opacity-30"></div>

                        <router-link to="/profile">
                            <div class="flex justify-between gap-4 sm:py-4 py-2 text-black sm:rounded-xl hover:bg-blue-100 sm:px-4 ">
                                <div class="flex gap-2 items-center" @click="() => { dropAboutUsOptions = !dropAboutUsOptions}">
                                    <div class="bg-gray-200 p-2 rounded-[50%] sm:block hidden">
                                        <div>
                                            <img src="../assets/images/Team-icon.svg" alt="">
                                        </div>
                                    </div> 
                                        
                                    <p class="">Team</p>
                                </div>

                                <img src="../assets/images/forward-arrow-in-collaborate.svg" alt="">
                            </div>
                        </router-link>

                        <div class="w-full h-[2px] bg-black opacity-30"></div>


                        <router-link to="/faqs">
                            <div class="flex justify-between gap-4 sm:py-4 py-2 text-black sm:rounded-xl hover:bg-blue-100 sm:px-4 ">
                                <div class="flex gap-2 items-center" @click="() => { dropAboutUsOptions = !dropAboutUsOptions}">
                                    <div class="bg-gray-200 p-2 rounded-[50%] sm:block hidden">
                                        <div>
                                            <img src="../assets/images/Faqs-icon.svg" alt="">
                                        </div>
                                    </div> 
                                    
                                    <p class="">FAQS</p>
                                </div>

                                <img src="../assets/images/forward-arrow-in-collaborate.svg" alt="">
                            </div>
                        </router-link>

                        <div class="w-full h-[2px] bg-black opacity-30"></div>



                        <router-link to="/career">
                            <div class="flex justify-between gap-4 sm:py-4 py-2 text-black sm:rounded-xl hover:bg-blue-100 sm:px-4 ">
                                <div class="flex gap-2 items-center" @click="() => { dropAboutUsOptions = !dropAboutUsOptions}">
                                    <div class="bg-gray-200 p-2 rounded-[50%] sm:block hidden">
                                        <div>
                                            <img src="../assets/images/career-icon.svg" alt="">
                                        </div>
                                    </div> 
                                    
                                    <p class="">Career</p>
                                </div>

                                <img src="../assets/images/forward-arrow-in-collaborate.svg" alt="">
                            </div>
                        </router-link>

                        <div class="w-full h-[2px] bg-black opacity-30"></div>



                        <router-link to="/testimonials">
                            <div class="flex justify-between gap-4 sm:py-4 py-2 text-black sm:rounded-xl hover:bg-blue-100 sm:px-4 ">
                                <div class="flex gap-2 items-center" @click="() => { dropAboutUsOptions = !dropAboutUsOptions}">
                                    <div class="bg-gray-200 p-2 rounded-[50%] sm:block hidden">
                                        <div>
                                            <img src="../assets/images/testimonial-icon.svg" alt="">
                                        </div>
                                    </div> 
                                    
                                    <p class="">Testimonials</p>
                                </div>

                                <img src="../assets/images/forward-arrow-in-collaborate.svg" alt="">
                            </div>
                        </router-link>
                    </div>




                    <!-- Navbar continues  -->
                    <li class="py-4 md:text-[18px]"><router-link to="/contact" @click="() => { dropAboutUsOptions = false}">Contact Us</router-link></li>

                <!-- hire and apply now button -->

                    <div id="buttons" class="lg:flex gap-8 space-x-8 space-y-4 lg:space-y-0 lg:space-x-0 py-4 lg:py-0 items-center" @click="() => { dropAboutUsOptions = false}">
                        <a href="https://forms.gle/xrLRkPCv5n5adXqo7" target="_blank">
                            <component is="Button" value="Hire" class="rounded-[8px] py-3 px-6 md:text-[18px]" :class="hovering == 1? 'bg-[#102539] text-white' : 'border border-1 border-gray-300 text-[#224c75]'" @mouseover="hovering = 1" @mouseleave="hovering = 0"></component>
                        </a>

                        <a href="https://fellow.dervac.com" target="_blank">
                            <component is="Button" value="Apply Now" class="relative left-[-15px] rounded-[8px] py-3 px-6 md:text-[18px]" :class="hovering == 0? 'bg-[#102539] text-white' : 'border border-1 border-gray-300 text-[#224c75]'"></component>
                        </a>

                        <!-- #102539 -->
                        <!-- bg-gradient-to-tl from-[#102539] to-[#193959] -->
                        <!--  -->
                    </div>
                </div>


                

                <!-- hamburger and close button  -->

                <div id="hamburger-and-close-button" class="flex lg:hidden items-center justify-between" @click="() => { drop = !drop;}">
                    <svg v-if="!drop" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M20 7H4"/><path d="M20 12H4" opacity=".5"/><path d="M20 17H4"/></g></svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/></svg>
                </div>
            </nav>

            <div class="lg:hidden absolute bg-black h-screen w-screen left-[-14px] opacity-40 top-16" v-show="drop" @click="() => drop = !drop"></div>


            <!-- The black background for the about sub links in the navbar -->
        <div class="w-screen left-[-15px] top-[86px] h-screen mx-auto absolute bg-gray-50 opacity-30" v-show="dropAboutUsOptions" @click="() => { dropAboutUsOptions = !dropAboutUsOptions}"></div>
    </header>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

    .font-sans {
        font-family: 'Inter', sans-serif;
    }

    @font-face {
        font-family: 'Bimini';
        src: url('./bimini/BiminiNormal.ttf') format('truetype');
             /* url('./bimini/BIMINI__.TTF') format('TTF'); */
        /* You can add more formats if needed */
        font-weight: normal;
        font-style: normal;
    }

    .router-link-active {
        color: red;
    }    
</style>