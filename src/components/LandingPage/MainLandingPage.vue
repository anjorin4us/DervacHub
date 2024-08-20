<script>
import { defineComponent } from 'vue';
import fourth from './fourth.vue';
import FirstSection from './firstsection.vue';
import FifthSection from './FifthSection.vue';
import SixthSection from './SixthSection.vue';
import sectionTwo from "./section-two.vue";
import TenthSection from './TenthSection.vue';
import EightSection from './EightSection.vue';
import NinthSection from './NinthSection.vue';
import TestimonialsSectionVue from './TestimonialsSection.vue';


export default defineComponent({
    components:{FirstSection,fourth, FifthSection, SixthSection, sectionTwo, TenthSection, EightSection, NinthSection, TestimonialsSectionVue},
})
</script>




<template>
    <FirstSection />
    <sectionTwo />
    <fourth />
    <FifthSection />    
    <SixthSection />
    <TestimonialsSectionVue />
    <EightSection />
    <!-- <NinthSection /> -->
    <TenthSection  fellowship="Enroll for Fellowship"/>
</template>



<style></style>