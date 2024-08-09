<script>
import { defineComponent } from 'vue';
import elementStore from '../stores/store';


export default defineComponent({
    data() {
        return {
            currentYear: new Date().getFullYear(),
        }
    }
})
</script>


<template>
    <footer class="text-[#224c75] flex flex-col gap-0 items-center bg-blue-100 font-sans">

        <div class="md:py-8 lg:py-12 md:px-12 lg:px-20 w-full flex justify-between">
            <!-- this is for the logo, social-media handle and the copywright for desktop view. This will show only on desktop width upward-->
            
            <div class="md:block hidden w-[210px]">
                <!-- logo -->
                <router-link to="/">
                    <div id="logo" class="flex space-x-[3px] items-center" @click="() => { drop = false;}">
                        <img src="../assets/images/dervac-main-logo.png" alt="" class="">
                        <p class="font-[bimini] sm:text-[25px] sm:block hidden text-[#224c75] font-semibold">dervac<span class="text-red-600">HUB</span></p>
                    </div>
                </router-link>
                <p class=""> <span class="font-[bimini]"> dervac</span> ICT Hub is a technology skills platform that nurtures technology startups with global aspirations with a Co-Working Space Provision. We are situated in Palmgroove, Lagos, Nigeria</p>
            </div>

            <ul class="flex flex-col justify-between md:text-left text-center">
                <li class="md:text-[18px] text-[22px] font-bold"> <span class="font-[bimini]">dervac</span>  Core</li>
                <li><router-link to="/coWorkSpace">Co-Working Space</router-link></li>
                <li> <a href="https://dervac.com" target="_blank">Software and Web Dev</a></li>
                <li><a href="https://dervac.com">Enterprise Infrastructure</a></li>
                <li><a href="https://dervac.com"> Educational Technology </a> </li>
                <li class=""><a href="https://dervac.com">IT support & Hardware </a> </li>
                <li class=""> <router-link to="/courses"> Training Services </router-link > </li>
            </ul>
    

            <ul class="flex flex-col justify-between md:text-left text-center">
                <li class="md:text-[18px] text-[22px] font-bold">Partner with Us</li>
                <li><a href="https://forms.gle/rjoe8dELSjDTyzVr6" target="_blank">Hire an intern</a></li>
                <li> <router-link to="/collaborate">Sponsor a student</router-link> </li>
                <li> <a href="https://forms.gle/R3MeuvwJDTfn67T76">Become a volunteer</a></li>
                <li> <a href="https://dervac.com"> Startup Incubation </a></li>
                <!-- 
6.	 -->
                <li> <a href="https://dervac.com"> <span class="font-[bimini]">dervac</span> community</a></li>
                <li>Resource Center</li>
            </ul>

            <ul class="flex flex-col justify-between md:text-left text-center">
                <li class="md:text-[18px] text-[22px] font-bold">Grow with <span class="font-[bimini]">dervac</span> </li>
                <li><router-link to="/fellow">Become a Fellow</router-link></li>
                <li><router-link to="/courses">Available Trainings</router-link></li>
                <li> <a href="https://academy.hub.dervac.com/" target="_blank">dervac Academy </a></li>
                <li><a href="https://dervac.com">Projects</a></li>
                <li> <a href="https://dervac.com"> <span class="font-[bimini]">dervac</span> Products</a></li>
                <li> <router-link to="/career">Job Opportunities</router-link> </li>
            </ul>

            <div class="lg:mx-0 mx-auto md:text-start text-center md:mt-0 mt-4 ">
                <!-- social-media-links -->
                <p class="md:text-[18px] text-[22px] font-bold">Connect With Us</p>
                <div class="flex flex-col justify-between gap-y-2">
                    <div class="flex space-x-2 items-center">
                        <!-- href="tel:+1234567890" -->

                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="m18 11l5-5l-5-5v3h-4v4h4v3zm2 4.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
                        <div>
                            <p class=""> <a href="tel:+2348160225365"> 08 16 02 25 365</a>,</p>
                            <p><a href="tel:+2348026944449">08 02 69 44 449</a></p>
                        </div>
                    </div>


                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M21.03 6.29L12 .64L2.97 6.29C2.39 6.64 2 7.27 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-.73-.39-1.36-.97-1.71M20 18H4v-8l8 5l8-5v8m-8-5L4 8l8-5l8 5l-8 5Z"/></svg>
                        <div>
                            <a href="mailto:hub@dervac.com"><p>hub@dervac.com<span class="font-[bimini]"></span></p></a>
                            <a href="mailto:info@dervac.com"><p>info@dervac.com<span class="font-[bimini]"></span></p></a>
                        </div>
                    </div>


                    <div class="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5" fill="currentColor"/></svg>
                        <div>
                            <p>65, Shipeolu Street,</p>
                            <p>Palmgroove, Lagos</p>
                        </div>
                    </div>


                    <div class="flex space-x-4 justify-between">
                        <a href="https://wa.me/+2348026944449" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsWhatsappFill0)"><path fill="currentColor" fill-rule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967c-.272-.099-.47-.148-.669.15c-.198.296-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52c.149-.174.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01c-.198 0-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413c.247-.694.247-1.289.173-1.413c-.074-.124-.272-.198-.57-.347Zm-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.993c-.002 5.45-4.436 9.885-9.884 9.885Zm8.412-18.297A11.815 11.815 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.864 11.864 0 0 0 1.587 5.945L0 24l6.304-1.654a11.881 11.881 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.821 11.821 0 0 0-3.48-8.413" clip-rule="evenodd"/></g><defs><clipPath id="akarIconsWhatsappFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
                        </a>

                        <a href="https://twitter.com/Dervachub" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"/></svg>
                        </a>
                       
                        <a href="https://www.linkedin.com/company/dervac-global/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></g></svg>
                        </a>

                        <a href="https://www.facebook.com/dervac" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm8 191.63V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32 32 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.63a88 88 0 1 1 16 0Z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <router-link to="/">
            <div id="logo" class="flex space-x-[3px] items-center md:hidden " @click="() => { drop = false;}">
                <img src="../assets/images/dervac-main-logo.png" alt="" class="">
                <p class="font-[Bimini] sm:text-[25px] sm:block hidden text-[#224c75] font-semibold">dervac<span class="text-red-600">HUB</span></p>
            </div>
        </router-link>
        <div class="w-full bg-[#102539] text-white flex items-center p-2">
            <p class="mx-auto w-fit">Copyright © {{currentYear}} ~ <span class="font-[bimini]">dervac</span>. All Rights Reserved.</p>
            <a href="https://wa.me/+2348026944449" target="_blank">
                <div class="bg-[#dbeafe] rounded-[15px] w-fit p-[2px] flex items-center gap-[2px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" class="text-green-600" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsWhatsappFill0)"><path fill="currentColor" fill-rule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967c-.272-.099-.47-.148-.669.15c-.198.296-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52c.149-.174.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01c-.198 0-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413c.247-.694.247-1.289.173-1.413c-.074-.124-.272-.198-.57-.347Zm-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.993c-.002 5.45-4.436 9.885-9.884 9.885Zm8.412-18.297A11.815 11.815 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.864 11.864 0 0 0 1.587 5.945L0 24l6.304-1.654a11.881 11.881 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.821 11.821 0 0 0-3.48-8.413" clip-rule="evenodd"/></g><defs><clipPath id="akarIconsWhatsappFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
                    <p class="text-black">Chat with us</p>
                </div>
            </a>
        </div>
    </footer>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

    @font-face {
        font-family: 'Bimini';
        src: url('./bimini/BiminiNormal.ttf') format('truetype');
             /* url('./bimini/BIMINI__.TTF') format('TTF'); */
        /* You can add more formats if needed */
        font-weight: normal;
        font-style: normal;
    }

    .font-sans {
        font-family: 'Inter', sans-serif;
    }
</style>