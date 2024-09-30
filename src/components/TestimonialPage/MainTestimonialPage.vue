<script>
import { defineComponent } from 'vue';
import TestimonialCard from './TestimonialCard.vue';
import TenthSection from '../LandingPage/TenthSection.vue';
import FirstSectionToReuse from '../FirstSectionToReuse.vue';
import elementStores from '../../stores/store';


export default defineComponent({
    components: {TestimonialCard, TenthSection, FirstSectionToReuse},
    data(){
        return {
            testimonials: elementStores().$state.testimonialsPage,
        }
    }
})
</script>




<template>
    <div class="pb-16 bg-white overflow-x-hidden">
        <!-- This is the div for the first section. Start the first section here -->
        <div>
            <FirstSectionToReuse  heading="Testimonials" caption="Hear from some of our amazing students"/>
        </div>



        <!-- Second section begins here -->
        <div class="container h-[510px] flex gap-4 mx-4 min-[175px]:mx-8 md:mx-16 lg:mx-28 pt-20 bg-white">
            <div v-for="(testimonial, index) in testimonials" :key="index">
                <testimonialCard :name=testimonial.name :skill=testimonial.occupation :testimonial=testimonial.testimony :image=testimonial.image />
            </div>

        </div>


        <!-- The fourth section starts here -->
            <TenthSection class="w-[83%]"/>
    </div>


</template>



<style>
.container {
    animation-name: testimonial;
    animation-duration: 35s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
}

@keyframes testimonial {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-270%);
    }
}


</style>
