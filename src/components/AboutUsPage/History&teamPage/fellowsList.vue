<script>
import { defineComponent } from 'vue'
import elementStores from '../../../stores/store';
import TeamCard from './TeamCard.vue';

export default defineComponent({
    components: {TeamCard},
    data(){
        return{
            fellows: elementStores().$state.fellows
        }
    },
    computed:{
        filterFellows23(){
            return this.fellows.filter(people => people.year == 2023);
        },
        filterFellows22(){
            return this.fellows.filter(people => people.year == 2022);
        },
        filterFellows21(){
            return this.fellows.filter(people => people.year == 2021);
        },
    }
})
</script>
<template>
    <section class="bg-white sm:px-24 px-8 pt-20 font-sans pb-16">
        <div class="text-center flex flex-col items-center gap-8 ">
            <div class="sm:w-[60%] w-full">
                <p class="font-bold sm:text-[35px] text-[25px]">Our esteemed fellows</p>
                <p class="mt-6 sm:text-[19px] text-[14px] text-[#475467]">Our philosophy is simple - hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.</p>
            </div>

            <div>
                <div class="pb-12">
                    <p class="text-[25px] text-[#102539] font-bold mb-4">2023 Fellows</p>
                    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-8">
                        <TeamCard v-for="people in filterFellows23" :key="people.id" :expertise="people.based"  :name="people.name" :image="people.imageUrl" class="w-full"/>
                    </div>
                </div>


                <div class="pb-12">
                    <p class="text-[25px] text-[#102539] font-bold mb-4">2022 Fellows</p>
                    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-8">
                        <TeamCard v-for="people in filterFellows22" :key="people.id" :expertise="people.based"  :name="people.name" :image="people.imageUrl" class="w-full"/>
                    </div>
                </div>


                <div class="pb-12">
                    <p class="text-[25px] text-[#102539] font-bold mb-4">2021 Fellows</p>
                    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-8">
                        <TeamCard v-for="people in filterFellows21" :key="people.id" :expertise="people.based"  :name="people.name" :image="people.imageUrl" class="w-full"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>