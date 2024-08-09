<script>
import { defineComponent } from 'vue';
import FirstSection from '../FirstSectionToReuse.vue';
import LastSection from  '../LandingPage/TenthSection.vue';
import Button from '../Button.vue'



export default defineComponent({
    components: {FirstSection, LastSection, Button},
data(){
    return{
        policy: true,
        country: 'NG',
        number: +234
    }
},
methods: {
    submit(){
        if(!policy){
            this.policy = false
        }
    }
},
watch :{
    country(){
        if(this.country == 'NG'){
            this.number = +234
        }
        if(this.country == 'US'){
            this.number =  +1
        }
        if(this.country == 'AE'){
            this.number =  +971
        }
        if(this.country == 'GB'){
            this.number =  +44
        }
        if(this.country == 'MA'){
            this.number =  +212
        }
    }
}
})
</script>
<template>
<div class="bg-white pb-3">

    <!-- first section  -->
    <FirstSection  heading="We'd love to hear from you" caption="Our friendly team is always here to help you"/>


    <div class="bg-white px-[7rem] pt-[96px] pb-[64px]">
        <div>
            <iframe class="w-full rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.83478311593!2d3.3660175744806367!3d6.5425369229428885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dbcd0415555%3A0x41966d71e94e14b!2sDervac%20Global%20Services%20Ltd!5e0!3m2!1sen!2sng!4v1688124987635!5m2!1sen!2sng" height="400px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>


    <div class="grid lg:grid-cols-3 md:grid-cols-2 justify-between md:px-[10rem] gap-8 bg-white grid-cols-1">
        <div class="flex flex-col items-center text-center gap-4 md:col-span-2 lg:col-span-1">
            <div class="h-[48px] w-[48px] p-[12px] bg-[#E9EEF3] rounded-[28px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z" stroke="#224C75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <p class="text-[#101828] text-[20px]">Email</p>
            <p class="text-[#475467] text-[16px]">Our friendly team is here to help</p>
            <p class="text-[#224C75] text-[16px] font-semibold">hub@dervac.com</p>
            <p class="text-[#224C75] text-[16px] font-semibold">info@dervac.com</p>
        </div>


        <div class="flex flex-col items-center text-center gap-4">
            <div class="h-[48px] w-[48px] p-[12px] bg-[#E9EEF3] rounded-[28px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12.5C13.6569 12.5 15 11.1569 15 9.5C15 7.84315 13.6569 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5Z" stroke="#224C75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22C14 18 20 15.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 15.4183 10 18 12 22Z" stroke="#224C75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <p class="text-[#101828] text-[20px]">hub</p>
            <p class="text-[#475467] text-[16px]">Come to say hello at our office.</p>
            <p class="text-[#224C75] text-[16px] font-semibold">65, Shipeolu Street, Palmgroove,</p>
            <p class="text-[#224C75] text-[16px] font-semibold">Lagos, Nigeria</p>
        </div>


        <div class="flex flex-col items-center text-center gap-4">
            <div class="h-[48px] w-[48px] p-[12px] bg-[#E9EEF3] rounded-[28px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z" stroke="#224C75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <p class="text-[#101828] text-[20px]">Phone</p>
            <p class="text-[#475467] text-[16px]">Mon-Fri from 8am to 6pm.</p>
            <p class="text-[#224C75] text-[16px] font-semibold">0816 022 5365, 0802 694 4449,</p>
            <p class="text-[#224C75] text-[16px] font-semibold">0909 379 0787, 0903 448 3717</p>
        </div>
    </div>


    <div class="flex justify-center flex-col items-center p-4 bg-white py-24 md:py-[150px]">
        <div class="w-full md:w-[40%]">
            <div class="text-center mb-[64px]">
                <p class="text-[#101828] font-semibold text-[20px] md:text-[36px] mb-[20px]">Get in touch</p>
                <p class="text-[#475467] text-[20px] px-4 md:px-0">We'd love to hear from you. Please fill out this form.</p>
            </div>
            <form>
                <div class="flex flex-col gap-6 md:px-0 px-4">
                    <div class="flex md:flex-row flex-col gap-4 w-full">
                        <div class="text-[14px]  flex flex-col gap-2">
                            <label for="firstname" class="text-[#344054] font-[500] text-[14px]">First name</label> 
                            <input class="border-2 p-[10px] outline-none rounded-md w-full" placeholder="First name" type="text" id="firstname">
                        </div>
                        <div class="text-[14px]  flex flex-col gap-2">
                            <label for="lastname" class="text-[#344054] font-[500] text-[14px]">Last name</label>
                            <input class="border-2 p-[10px] outline-none rounded-md w-full" placeholder="Last name" type="text" id="lastname">
                        </div>
                    </div>
                    <div class="text-[14px] flex flex-col gap-2  md:w-full">
                        <label for="email" class="text-[#344054] font-[500] text-[14px]">Email</label>
                        <input class="border-2 p-[10px] outline-none rounded-md " placeholder="you@email.com" type="email" id="email">
                    </div>
                    <div class="text-[14px] flex flex-col gap-2 ">
                        <label for="number" class="text-[#344054] font-[500] text-[14px">Phone Number</label>
                        <div class="flex text-lg md:w-full">
                            <select v-model="country" name="" id="" class="border-2 p-[10px] rounded-r-[0px] outline-none rounded-md border-r-0">
                                <option value="NG">NG</option>
                                <option value="US">US</option>
                                <option value="AE">AE</option>
                                <option value="GB">GB</option>
                                <option value="MA">MA</option>
                            </select>
                            <input v-model="number" class="text-[16px] border-2 border-l-0 p-[10px] rounded-l-[0px] outline-none rounded-md w-full" type="number" id="number">
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 md:w-full ">
                        <label for="message" class="text-[#344054] text-[14px] font-[500] text-[14px]">Message</label>
                        <textarea placeholder="Leave us a message ..." class="border-2 p-[10px] outline-none rounded-md" name="" id="message" cols="10" rows="5"></textarea>
                    </div>


                    <div class="flex gap-3 items-center ">
                        <input type="checkbox" id="policy" class="w-[20px] h-[20px]" v-model="policy">
                        <label for="policy" class="text-[#667085] text-[16px]">You agree to our friendly privacy policy</label>
                    </div>


                    <div class="mt-[-16px]" v-if="!policy">
                        <p class="text-sm text-red-400 ">Agree to the privacy policy</p>
                    </div>


                    <div class="">
                        <button type="submit" @click.prevent="submit" class="w-full h-[60px] rounded-md text-white text-[16px] bg-gradient-to-b from-[#224C75] to-[#0B1927]"><a href="mailto:hub@dervac.com;">Send message</a></button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="flex md:flex-row flex-col items-center bg-[#f9fafb] gap-10 rounded-[10px] md:p-16 p-4 justify-between lg:mx-32 md:mx-28 mx-20">
        <div class="flex flex-col gap-4 md:text-left text-center">
            <p class="md:text-[30px] sm:text-[25px] font-bold">Join 2,000+ subscribers</p>
            <p class="md:text-[18px]">Stay in the loop with everything you need to know.</p>
        </div>

        <div class="flex lg:flex-row flex-col gap-4 md:h-[48px] md:w-fit w-full">
            <input type="email" class="block focus:border-none rounded-[8px] border-[2px] border-solid border-gray-300 px-[5px] py-[7px] md:w-[300px] w-full" placeholder="Enter your Email">
            <Button  value="Subscribe" class="bg-gradient-to-r from-[#132b42] to-[#1d4266] rounded-[5px] text-white py-3 px-5 md:w-fit w-full"/>
        </div>
    </div>

    <LastSection class=""/>
</div>
</template>