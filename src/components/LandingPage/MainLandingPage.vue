<script>
import { defineComponent } from 'vue';
import fourth from './fourth.vue';
import FirstSection from './firstsection.vue';
import FifthSection from './FifthSection.vue';
import SixthSection from './SixthSection.vue';
import Seventh from './Seventh.vue';
import sectionTwo from "./section-two.vue";
import TenthSection from './TenthSection.vue';
import EightSection from './EightSection.vue';
import NinthSection from './NinthSection.vue';


export default defineComponent({
    components:{FirstSection,fourth, FifthSection, SixthSection,Seventh, sectionTwo, TenthSection, EightSection, NinthSection},
})
</script>




<template>

    <!-- all section are completed here, the section two that looks like it is missing is due to ABDULAZEEZ doing the two section giving to him in a section -->

    
    <FirstSection />
    <sectionTwo />
    <fourth />
    <FifthSection />    
    <SixthSection />
    <Seventh/>
    <EightSection />
    <!-- <NinthSection /> -->
    <TenthSection  fellowship="Enroll for Fellowship"/>
</template>



<style></style>