<script>
import { defineComponent } from 'vue';


export default defineComponent({
    props: [''],
    components: {},
    data() {
        return {
            page: 1,
        }
    },
    methods: {

    }
})
</script>


<template>
    <div class="pt-8 bg-white w-full">
        <div class="bg-purple-200 mb-4">
            <ul class="flex justify-between py-3 px-16">
                <li class="cursor-pointer">
                    <div class="flex items-center gap-x-1" @click="page = 1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10M1 7h22M4 10h16m-6 4h6m0-7v10M14 7v10m3-7v1m0 3v1"/></svg>
                        <p>Dedicated Desk</p>
                    </div>
                    <div class="bg-red-700 w-[95%] h-[2px] mx-auto mt-3" v-if="page == 1"></div> 
                </li>

                <li class="cursor-pointer">
                    <div class="flex items-center gap-x-1" @click="page = 2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#888888" d="M6 21q-1.65 0-2.825-1.175T2 17q0-1.65 1.175-2.825T6 13q1.65 0 2.825 1.175T10 17q0 1.65-1.175 2.825T6 21Zm12 0q-1.65 0-2.825-1.175T14 17q0-1.65 1.175-2.825T18 13q1.65 0 2.825 1.175T22 17q0 1.65-1.175 2.825T18 21Zm-6-10q-1.65 0-2.825-1.175T8 7q0-1.65 1.175-2.825T12 3q1.65 0 2.825 1.175T16 7q0 1.65-1.175 2.825T12 11Z"/></svg>
                        <p>Co Workspace</p>
                    </div>
                    <div class="bg-red-700 w-[95%] h-[2px] mx-auto mt-3" v-if="page == 2"></div>
                </li>

                <li class="cursor-pointer">
                    <div class="flex items-center gap-x-1" @click="page = 3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#888888" d="M12 5a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 12 12a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 12 5m0 2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 10a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 7M5.5 8A2.5 2.5 0 0 0 3 10.5c0 .94.53 1.75 1.29 2.18c.36.2.77.32 1.21.32c.44 0 .85-.12 1.21-.32c.37-.21.68-.51.91-.87A5.42 5.42 0 0 1 6.5 8.5v-.28c-.3-.14-.64-.22-1-.22m13 0c-.36 0-.7.08-1 .22v.28c0 1.2-.39 2.36-1.12 3.31c.12.19.25.34.4.49a2.482 2.482 0 0 0 1.72.7c.44 0 .85-.12 1.21-.32c.76-.43 1.29-1.24 1.29-2.18A2.5 2.5 0 0 0 18.5 8M12 14c-2.34 0-7 1.17-7 3.5V19h14v-1.5c0-2.33-4.66-3.5-7-3.5m-7.29.55C2.78 14.78 0 15.76 0 17.5V19h3v-1.93c0-1.01.69-1.85 1.71-2.52m14.58 0c1.02.67 1.71 1.51 1.71 2.52V19h3v-1.5c0-1.74-2.78-2.72-4.71-2.95M12 16c1.53 0 3.24.5 4.23 1H7.77c.99-.5 2.7-1 4.23-1Z"/></svg>
                        <p>Executive (Team) Room</p>
                    </div>
                    <div class="bg-red-700 w-[95%] h-[2px] mx-auto mt-3" v-if="page == 3"></div> 
                </li>

                <li class="cursor-pointer">
                    <div class="flex items-center gap-x-1" @click="page = 4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2" ry="2" /><circle cx="7" cy="8" r="1" /><circle cx="17" cy="8" r="1" /><line x1="7" y1="14" x2="17" y2="14" /><line x1="12" y1="15" x2="12" y2="19" /></svg>
                        <p>Training Lounge</p>
                    </div>
                    <div class="bg-red-700 w-[95%] h-[2px] mx-auto mt-3" v-if="page == 4"></div> 
                </li>

                <li class="cursor-pointer">
                    <div class="flex items-center gap-x-1" @click="page = 5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 16h-4v-4h4v4zm4 0h-4v-4h4v4zm0-6h-4v-4h4v4zm2-4v-4h-4v4h4z"/>
</svg>
                        <p>Virtual Office</p>
                    </div>
                    <div class="bg-red-700 w-[95%] h-[2px] mx-auto mt-3" v-if="page == 5"></div> 
                </li>
            </ul>
        </div>

        <div class="allset">
            <ul class="relative">
                <li  class="text-[24px] absolute top-[5px] left-[10px] bg-gray-50 px-2"  :class=" page == 1 ? 'text-red-900' : 'text-black'"> <span class="">.</span> Dedicated Desk</li>
                <li  class="text-[24px] absolute top-[85px] left-[240px] bg-gray-50 px-2"  :class=" page == 2 ? 'text-red-900' : 'text-black'"> <span class="">.</span> Co-Workspace</li>
                <li  class="text-[24px] absolute top-[165px] left-[500px] bg-gray-50 px-2"  :class=" page == 3 ? 'text-red-900' : 'text-black'"> <span class="">.</span> Executive (Team) Room</li>
                <li  class="text-[24px] absolute top-[245px] left-[800px] bg-gray-50 px-2"  :class=" page == 4 ? 'text-red-900' : 'text-black'"> <span class="">.</span> Training Lounge</li>
                <li  class="text-[24px] absolute top-[325px] left-[1020px] bg-gray-50 px-2"  :class=" page == 5 ? 'text-red-900' : 'text-black'"> <span class="">.</span> Virtual Office</li>
            </ul>
        </div>
    </div>
</template>


<style>
.allset {
    background-image: url('../../assets/others/bigAvatar.jpg');

    
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center; 
    width: 95%;
    height: 450px;
    margin: 0 auto;
    border-radius: 15px;
}
</style>