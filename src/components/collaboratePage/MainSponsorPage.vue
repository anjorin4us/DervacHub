<script>
import { defineComponent } from 'vue';
import sectionTwoSponsor from './section-two.vue';
import Fourth from './Fourth.vue';
import FirstSection from './FirstSection.vue';


export default defineComponent({
    components: {sectionTwoSponsor, Fourth, FirstSection}
})
</script>





<template>
    <FirstSection />
    <sectionTwoSponsor class=""/>
    <Fourth />
</template>





<style></style>