<script>
   import { defineComponent } from 'vue'
   import elementStores from '../../stores/store';

   export default defineComponent({
    data(){
        return{
            showSummer: elementStores().$state.showSummer,
            showWeekend: elementStores().$state.showWeekend,
            showWeekday: elementStores().$state.showWeekday,
            showExecutive: elementStores().$state.showExecutive
        }
    },
    methods: {
        summerSessionPlus() {
            this.showSummer = true;
            this.showWeekend = false;
            this.showWeekday = false;
            this.showExecutive = false;
        },
        weekendSessionPlus() {
            this.showSummer = false;
            this.showWeekend = true;
            this.showWeekday = false;
            this.showExecutive = false;
        },
        weekdaySessionPlus() {
            this.showSummer = false;
            this.showWeekend = false;
            this.showWeekday = true;
            this.showExecutive = false;
        },
        executiveSessionPlus() {
            this.showSummer = false;
            this.showWeekend = false;
            this.showWeekday = false;
            this.showExecutive = true;
        }
    }
   })
</script>

<template>
    <section id="fifth-section" class="h-fit lg:px-24 md:px-10 px-8 py-20  w-full">
        <div class="space-y-6">
            <div class="space-y-4 lg:w-[70%] md:w-full">
                <p class="lg:text-5xl md:text-4xl text-sm text-red-600 font-bold">Training Schedules</p>
                <p class="lg:text-xl md:text-xl text-sm text-gray-700">We offer carefully organized training schedules that are tailored to meet the availability of our students and learners</p>
            </div>
            <div class="flex flex-col gap-20 md:flex-row items-center">
                <img src="./images/gentle-coder-in-training-schedule-section.svg" class="image md:w-[50%] z-0" alt="">

                <div class="w-full flex flex-col gap-8 md:gap-6">
                    <!-- first trainingSchedules -->
                    <div class="w-full space-y-4 p-6" :class="showSummer ? 'bg-[#FEF3F2] p-6 rounded-xl' : 'bg-transparent'">
                        <div class="w-full flex justify-between">
                            <p class="font-semibold text-lg lg:text-xl md:text-md" >Summer Session</p>
                            <div class="flex">
                                <svg v-if="!showSummer" @click="summerSessionPlus" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#D92D20" d="M11 13v3q0 .425.288.713T12 17q.425 0 .713-.288T13 16v-3h3q.425 0 .713-.288T17 12q0-.425-.288-.713T16 11h-3V8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8v3H8q-.425 0-.713.288T7 12q0 .425.288.713T8 13h3Zm1 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"/></svg>
                                <svg v-else @click="showSummer = false" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#D92D20" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7 13h10v-2H7"/></svg>
                            </div>
                        </div>
                        <div v-show="showSummer">
                            <p class="text-gray-500">Our Summer Academy is an intensive program that is designed to provide student with an immersive learning experience over the summer.  <a href="http://enroll.dervac.com" target="_blank" class="text-gray-300">Apply</a></p>
                        </div>
                    </div>
                    <!-- second trainingSchedules -->
                    <div class="w-full space-y-4 p-6" :class="showWeekend ? 'bg-[#FEF3F2] p-6 rounded-xl' : 'bg-transparent'">
                        <div class="w-full flex justify-between">
                            <p class="font-semibold text-lg lg:text-xl md:text-md">Weekend Session</p>
                            <div class="flex">
                                <svg v-if="!showWeekend" @click="weekendSessionPlus" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#D92D20" d="M11 13v3q0 .425.288.713T12 17q.425 0 .713-.288T13 16v-3h3q.425 0 .713-.288T17 12q0-.425-.288-.713T16 11h-3V8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8v3H8q-.425 0-.713.288T7 12q0 .425.288.713T8 13h3Zm1 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"/></svg>
                                <svg v-else @click="showWeekend = false" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#D92D20" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7 13h10v-2H7"/></svg>
                            </div>
                        </div>
                        <div v-show="showWeekend">
                            <p class="text-gray-500">Our Weekend Session is designed to accommodate the schedules of busy students who may not have the time to attend classes during the week. <a href="http://enroll.dervac.com" target="_blank" class="text-gray-300">Apply</a></p>
                        </div>
                    </div>

                    <!-- fourth trainingSchedules -->
                    <div class="w-full space-y-4 p-6" :class="showWeekday ? 'bg-[#FEF3F2] p-6 rounded-xl' : 'bg-transparent'">
                        <div class="w-full flex justify-between">
                            <p class="font-semibold text-lg lg:text-xl md:text-md">Weekday Sessions</p>
                            <div class="flex">
                                <svg v-if="!showWeekday" @click="weekdaySessionPlus" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#D92D20" d="M11 13v3q0 .425.288.713T12 17q.425 0 .713-.288T13 16v-3h3q.425 0 .713-.288T17 12q0-.425-.288-.713T16 11h-3V8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8v3H8q-.425 0-.713.288T7 12q0 .425.288.713T8 13h3Zm1 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"/></svg>
                                <svg v-else @click="showWeekday = false" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#D92D20" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7 13h10v-2H7"/></svg>
                            </div>
                        </div>
                        <div v-show="showWeekday">
                            <p class="text-gray-500">Our Weekdays Session is designed for students who have a more flexible schedule during the week.  <a href="http://enroll.dervac.com" target="_blank" class="text-gray-300">Apply</a></p>
                        </div>
                    </div>



                    
                    <!-- fifth trainingSchedules -->
                    <div class="w-full space-y-4 p-6" :class="showExecutive ? 'bg-[#FEF3F2] p-6 rounded-xl' : 'bg-transparent'">
                        <div class="w-full flex justify-between">
                            <p class="font-semibold text-lg lg:text-xl md:text-md">Executive Class</p>
                            <div class="flex">
                                <svg v-if="!showExecutive" @click="executiveSessionPlus" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#D92D20" d="M11 13v3q0 .425.288.713T12 17q.425 0 .713-.288T13 16v-3h3q.425 0 .713-.288T17 12q0-.425-.288-.713T16 11h-3V8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8v3H8q-.425 0-.713.288T7 12q0 .425.288.713T8 13h3Zm1 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"/></svg>
                                <svg v-else @click="showExecutive = false" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#D92D20" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7 13h10v-2H7"/></svg>
                            </div>
                        </div>

                        <div v-show="showExecutive" class="space-y-4">
                            <p class="text-gray-500">Our Executive class is specifically designed for busy profesionals who require training that fits their demanding schedules.</p>
                            <div class="flex flex-row md:items-center gap-8">
                            <div class="flex items-center gap-4">
                                <svg class="w-[20px] md:w-[32px]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="lightgreen" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>

                                <a href="https://academy.hub.dervac.com" target="_blank"><p class="text-gray-500 text-[15px] md:text-md">Physical @ <span class="font-[Bimini]">dervacHUB</span></p></a> 
                            </div>
                            <div class="flex items-center gap-4">
                                <svg class="w-[20px] md:w-[32px]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="lightgreen" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                                <a href="https://academy.hub.dervac.com/"><p class="text-gray-500 text-[15px] md:text-md">Virtual</p> </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- needed svgs -->
    
</template>

<style scoped>
  .image{
    transform: rotateY(180deg);
  }


  @font-face {
        font-family: 'Bimini';
        src: url('./bimini/BiminiNormal.ttf') format('truetype');
             /* url('./bimini/BIMINI__.TTF') format('TTF'); */
        /* You can add more formats if needed */
        font-weight: normal;
        font-style: normal;
    }
</style>