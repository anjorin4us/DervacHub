<script>
import { defineComponent } from 'vue';
import TestimonialCard from './TestimonialCard.vue';
import TenthSection from '../LandingPage/TenthSection.vue';
import FirstSectionToReuse from '../FirstSectionToReuse.vue';


export default defineComponent({
    components: {TestimonialCard, TenthSection, FirstSectionToReuse},
})
</script>




<template>
    <div class="pb-16 bg-white">
        <!-- This is the div for the first section. Start the first section here -->
        <div>
            <FirstSectionToReuse  heading="Testimonials" caption="Hear from some of our amazing students"/>
        </div>



        <!-- Second section begins here -->
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-12 mx-4 min-[175px]:mx-8 md:mx-16 lg:mx-28 pt-20 bg-white">
            <TestimonialCard  name="Fellow Olatunji" skill="FrontEnd Dev." testimonial="I would like to use this medium to thank DERVAC for their wonderful contribution. I just wanted to share a quick note and let you know that  DERVAC is the best place to learn.   I'm so glad that I am part of the team. I always thought that Web Dev is hard to learn but you prove me wrong. Thanks, Jaza kumu lahu khairan. I'm immensely grateful for the opportunity. Joining DervacHub was a pivotal moment in my career journey."/>
            <TestimonialCard  name="Fellow Luqman" skill="FrontEnd dev." testimonial="Joining DervacHub was a pivotal moment in my career journey. The guidance and mentorship I received there were instrumental in shaping me into a competent and confident developer. The hands-on approach to learning, coupled with real-world projects, enabled me to apply theoretical concepts to practical situations.Thanks to DervacHub, I now possess the skills and knowledge needed to thrive in the ever-evolving tech industry."/>
            <TestimonialCard  name="Fellow Emmanuel" skill="FrontEnd dev." testimonial="Enrolling in DervacHub was a decision I'll forever cherish. Their comprehensive program transformed my passion for technology into tangible skills. The practical projects and real-world simulations equipped me to navigate the dynamic landscape of development. I'm immensely grateful for the opportunity and confident in recommending DervacHub to anyone seeking a transformative learning experience." />



            <!-- <TestimonialCard  name="Fellow Esther" skill="BackEnd., Google"/>
            <TestimonialCard  name="Fellow Balkis" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow David" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Fawwaz" skill="FrontEnd."/>
            <TestimonialCard  name="Fellow Abd-Azeez" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Zakariyyah" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Sanni" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Olawale" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Abd-Rahman" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Sodiq" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Joshua" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Ahmad" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Lawal" skill="ComputerEngineering"/>
            <TestimonialCard  name="Fellow Tella" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Yuusuf" skill="Networking"/> -->

        </div>


        <!-- The fourth section starts here -->
            <TenthSection class="w-[83%]"/>
    </div>


</template>



<style></style>
