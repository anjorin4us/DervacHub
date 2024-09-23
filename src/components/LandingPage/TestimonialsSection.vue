<script>
import {defineComponent} from 'vue';
import elementStores from '../../stores/store';


export default defineComponent({
    data() {
        return {
            testimonials: elementStores().$state.testimonials,
            testifier: elementStores().$state.testifier,
            slide: 0,
        }
    },
    methods: {
        increment() {
            if (this.slide < this.testimonials.length - 1) {
                this.slide += 1;
            }
        },
        decrement() {
            if (this.slide > 0 ) {
                this.slide -= 1;
            }
        }
    },
    computed: {
        AllTestimonials() {
            return this.testimonials.reduce((acc, obj) => acc.concat(Object.values(obj)), []);
        }
    },
})
</script>


<template>
    <div class="bg-gradient-to-b from-[#11263B] to-[#132b42] text-center text-white py-5 px-12 relative">
        <h1 class="lg:text-5xl md:text-3xl sm:text-2xl text-lg font-bold">Testimonials</h1>
        <div v-for="(testimonial, index) in testimonials" :key="index" :class="slide === index ? 'block' : 'hidden' ">
            <img :src="testimonial.image" alt="" class="block mx-auto h-32 w-32 rounded-[50%] mt-4">
        
            <p class="mt-4 w-[90%] mx-auto">{{testimonial.speech}}</p>

            <hr class="sm:w-[500px] w-[100%] mx-auto mt-4">

            <h5 class="mt-3">Fellow {{testimonial.name}}</h5>

            <p><small class="text-red-700">FrontEnd Dev.</small></p>

            <div class="flex flex-row gap-2 w-fit mx-auto mt-5">
                <div class="h-[10px] w-[10px] rounded-[50%] border border-1 border-red-700" @click="slide = index" :class="slide === index ? 'bg-white' : 'bg-none' " v-for="(testimonial, index) in testimonials" :key="index"></div>
            </div>
        </div>

        <div class="absolute left-4 top-[50%] text-red-700" v-show="slide > 0">
            <i class="pi pi-chevron-left text-4xl" @click="decrement"></i>
        </div>

        <div class="absolute right-4 top-[50%] text-red-700" v-show="slide < testimonials.length - 1">
            <i class="pi pi-chevron-right text-4xl" @click="increment"></i>
        </div>
    </div>
</template>


<style></style>