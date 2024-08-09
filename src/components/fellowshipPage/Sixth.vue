<script>
import { defineComponent } from 'vue';
import SecSixth from './SecSixth.vue';

export default defineComponent({
    components: { SecSixth}

})
</script>
<template>
    <div class="py-[40px] bg-white px-[3.7rem] max-[464px]:px-[1rem]">
        <div class="flex justify-center flex-col items-center">
            <p class="text-[36px] text-[#224C75] font-semibold mb-4 text-center max-[320px]:text-[29px]">How the Admission Process Works</p>
            <p class="text-[20px] text-[#475467] max-w-[770px] text-center max-[524px]:text-[17px]">Unlock a world of opportunities in the realm of courses with our comprehensive admission process. Whether you're a tech enthusiast or an aspiring IT professional, our program is your gateway to mastering cutting-edge skills and advancing your career.Your journey starts here – let your aspirations meet our expertise.</p>
        </div>
        
        <div class="bg-white md:px-20 px-8 max-[464px]:px-[1rem]">
                <div class="grid grid-cols-3 relative gap-6 max-[948px]:grid-cols-2 max-[612px]:grid-cols-1">
                    <SecSixth heading="Fill and submit the application form" description="Begin by completing our user-friendly online application form. Share your essential details, educational background, and aspirations, allowing us to understand your unique journey. This form serves as your introduction to us and paves the way for your exciting academic adventure." steps="1" class="relative z-20"/>


                    <SecSixth class="relative z-20" heading="Educational details" description="We invite prospective students to provide their educational details, which will enable us to optimize your learning experience." steps="2"/>

                    <SecSixth class="relative z-20" heading="Take and pass all assessment tests" description="Put your skills to the test as you tackle a series of assessments designed to gauge your readiness for the program. Show us your potential by successfully completing these tests, showcasing your determination to excel in our computer-related courses." steps="3"/>

                
                    <SecSixth class="relative z-20" heading="Application Submission" description="By submitting your application, you've taken a significant step forward in the journey toward joining our program" steps="4"/>


                    <SecSixth class="relative z-20" heading="Application Review" description="Each application is thoughtfully reviewed by our admissions team to ensure that every candidate is given fair consideration." steps="5"/>


                    <SecSixth class="relative z-20" heading="Payments & Sponsporship" description="We offer flexible payment and sponsorship options to ensure that our education is accessible to all deserving students." steps="6"/>
                </div>
                <div class="w-[60%] mx-auto mt-6">
                    <SecSixth class="relative z-20" heading="Get Admitted" description="The admission process is meticulously crafted to curate a diverse and dynamic student cohort, fostering an enriching learning environment within our program. We seek individuals who exhibit not only academic excellence but also a passion for innovation, collaborative spirit, and a drive to excel. Join us to embark on a transformative educational journey that prepares you for success in the ever-evolving landscape of knowledge and opportunity." steps="7"/>
                </div>
        </div>



        <div class="flex items-center flex-col justify-center mt-12">
            <p class="text-[36px] text-[#224C75] font-semibold mb-8 text-center">Candidates' Attendance</p>
            <p class="text-[20px] text-[#475467] text-center max-w-[980px] text-center">Candidates are expected to be intentional about learning, be physically present at all classes, Monday to Thursday, from 9am – 2pm; take your lessons seriously and participate in all your assessments, assignments and projects which will enable them bridge their skill-gaps and stand a better chance accelerate your pace to secure a future in the tech space.</p>
        </div>
    </div>
    
</template>