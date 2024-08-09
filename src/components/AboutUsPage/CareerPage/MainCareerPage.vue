<script>
import { defineComponent } from 'vue';
import FirstSection from './FirstSection.vue';
import middle from './Middle.vue';
import LastSection from '../../LandingPage/TenthSection.vue';

export default defineComponent({
    components: { LastSection, middle, FirstSection },
    props: [],
})
</script>
<!-- #f2f9ff -->

<template>
    <div class="bg-white pb-8">
      <FirstSection class="bg-gradient-to-tr from-[#f3e3e8] to-[#f2f9ff]" />
      <middle />
      <LastSection class="" /> 
    </div>
</template>


<style></style>