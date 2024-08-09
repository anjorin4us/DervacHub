<script>
import { defineComponent } from 'vue';
import FirstSection from '../../FirstSectionToReuse.vue';
import SecondSection from './SecondSection.vue';
import ThirdSection from './ThirdSection.vue';

export default defineComponent({
    components: { FirstSection, SecondSection, ThirdSection },
    props: [],
})
</script>


<template>

    <div class="bg-white pb-12">
        <FirstSection heading="We are here to help" caption="Have question(s)? We are here to help" />
        <SecondSection />
        <ThirdSection />
    </div>
</template>


<style></style>