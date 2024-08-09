<script>
import { defineComponent } from 'vue';
import Firstsection from './FirstSection.vue';
import SecondSection from './secondSection.vue';
import ThirdSection from './thirdsection.vue';
import Fourthsection from './FourthSection.vue';
import Sixth from './Sixth.vue';
import TenthSection from '../LandingPage/TenthSection.vue';
import FifthSection from './FifthSection.vue';


export default defineComponent({
    components: { Firstsection, ThirdSection, Fourthsection, Sixth, TenthSection,FifthSection, SecondSection }
})
</script>




<template>
    <Firstsection />
    <!-- <SecondSection /> -->
    <ThirdSection />
    <Fourthsection/>
    <FifthSection />
    <Sixth />
    <TenthSection />
</template>



<style></style>