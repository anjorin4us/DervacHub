<template>
  <div class="md:px-24 px-8 py-[96px] bg-white">
    <div class="flex md:flex-row flex-col justify-between items-center">
      <p class="text-center sm:text-start text-[24px] lg:text-[30px] font-[600] text-[#224C75] h-fit leading-6">Dervac HUB Training Products</p>
      <router-link to="/courses">
        <button class="my-4 py-[12px] md:text-[16px] text-white md:my-0 px-[20px] bg-[#224C75] rounded-[15px]" >View all courses</button>
    </router-link>

    </div>
      <p class="text-[#475467] text-[20px] md:py-[20px] text-center sm:text-start">Discover our range of courses and select the one that best suits your needs and interests.</p>

      
      <div class="my-[20px] grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:my-2">
        <a href="http://enroll.dervac.com" target="_blank">
          <div class="px-[21px] py-2 border border-gray-300 rounded-[15px] hover:border-0 hover:shadow-xl">
            <img src="../../assets/others/digitalLiteracy.png" alt="" class="rounded-[10px] w-[100%]">
            <div class="flex justify-between items-center pt-[30px]">
              <p class="text-red-600 bg-[#F0F9FF] py-[2px] px-[10px] rounded-[16px]">Module 1</p>
              <p class="text-red-600 text-[14px] font-[600]">4 Weeks</p>
            </div>
            <h1 class="text-[#224C75] text-[24px] font-[600] leading-6 my-2">Digital Literacy</h1>
            <p class="text-[#475467] text-[16px] font-[400]">Embark on a journey of digital literacy with our comprehensive course. Develop a solid understanding of essential computer fundamentals and data processing concepts. Learn to navigate the digital landscape confidently, from mastering basic computer operations to exploring data manipulation techniques.Gain practical skills in utilizing software</p>
            <div class="flex justify-between items-center text-[#344054] hover:text-white hover:bg-[#142c45] transition duration-500 mt-[24px] w-[161px] border border-gray-300 rounded-[15px] py-[12px] px-[16px]">
              <p class=" text-[18px] font-[400]">Enroll</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m11.93 5l2.83 2.83L5 17.59L6.42 19l9.76-9.75L19 12.07V5h-7.07Z"/></svg>
            </div>
          </div>
        </a>

        <a href="http://enroll.dervac.com" target="_blank">
          <div class="p-[21px] border border-gray-300 rounded-[15px] hover:border-0 hover:shadow-xl">
            <img src="../../assets/others/webDevFund.png" alt="" class="rounded-[10px] w-[100%]">
            <div class="flex justify-between items-center pt-[30px]">
              <p class="text-red-600 bg-[#F0F9FF] py-[2px] px-[10px] rounded-[16px]">Module 2</p>
              <p class="text-red-600 text-[14px] font-[600]">6 Weeks</p>
            </div>
            <h1 class="text-[#224C75] text-[24px] font-[600] leading-6 my-2">Web Development fundamentals</h1>
            <p class="text-[#475467] text-[16px] font-[400]">Discover the fundamentals of web development in our introductory course. Learn HTML, CSS, and JavaScript essentials to build and style web pages. Acquire foundational skills for creating interactive and responsive websites. Perfect for beginners and those looking to grasp the basics of web development.</p>
            <div class="flex justify-between items-center text-[#344054] hover:text-white hover:bg-[#142c45] transition duration-500 mt-[24px] w-[161px] border border-gray-300 rounded-[15px] py-[12px] px-[16px]">
              <p class=" text-[18px] font-[400]">Enroll</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m11.93 5l2.83 2.83L5 17.59L6.42 19l9.76-9.75L19 12.07V5h-7.07Z"/></svg>
            </div>
          </div>
        </a>


        <a href="http://enroll.dervac.com" target="_blank">
          <div class="p-[21px] border border-gray-300 rounded-[15px] hover:border-0 hover:shadow-xl">
            <img src="../../assets/others/fullstack.png" alt="" class="rounded-[10px] w-[100%]">
            <div class="flex justify-between items-center pt-[30px]">
              <p class="text-red-600 bg-[#F0F9FF] py-[2px] px-[10px] rounded-[16px]">Module 3</p>
              <p class="text-red-600 text-[14px] font-[600]">6 Months</p>
            </div>
            <h1 class="text-[#224C75] text-[24px] font-[600] leading-6 my-2">Full-Stack</h1>
            <p class="text-[#475467] text-[16px] font-[400]">Discover the full range of web development in our Fullstack Web Development Mastery course. Seamlessly blend frontend and backend expertise to become a versatile developer creating holistic web solutions. Excel in FrontEnd tools for captivating interfaces, while exploring server-side technologies, APIs, databases, and security in depth.</p>
            <div class="flex justify-between items-center text-[#344054] hover:text-white hover:bg-[#142c45] transition duration-500 mt-[24px] w-[161px] border border-gray-300 rounded-[15px] py-[12px] px-[16px]">
              <p class=" text-[18px] font-[400]">Enroll</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m11.93 5l2.83 2.83L5 17.59L6.42 19l9.76-9.75L19 12.07V5h-7.07Z"/></svg>
            </div>
          </div>
        </a>
        
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
// import VueCarousel from 'vue-carousel';
import TrainingSection from '../TrainingSection.vue';
import Button from '../Button.vue';


export default defineComponent({
  components: {TrainingSection, Button,},
  data() {
    return {
      // slides: [
      //   { field: 'Frontend development', desc: 'Explore the core aspects of frontend web development in this hands-on course. Learn web design tools to create engaging and responsive user interfaces. Develop the skills to build and style web content, add interactivity, and ensure optimal user experiences across devices. Perfect for beginners and those looking to strengthen their frontend skills.' },

      //   { field: 'Backend development', desc: "Dive into the world of backend web development with our comprehensive course. Discover the backend's crucial role in powering web applications, databases, and server-side logic.Gain hands-on experience in building robust and scalable backend systems, making you proficient in delivering efficient and secure web solutions."},

      //   { field: 'Fullstack development', desc: 'Discover the full range of web development in our Fullstack Web Development Mastery course. Seamlessly blend frontend and backend expertise to become a versatile developer creating holistic web solutions. Excel in FrontEnd tools for captivating interfaces, while exploring server-side technologies, APIs, databases, and security in depth.'},

      //   { field: 'Devops engineering', desc: 'Explore DevOps engineering essentials in our comprehensive course. Master tools for seamless software delivery, CI/CD, automation, and cloud tech. Gain hands-on experience in creating efficient, collaborative development environments. Ideal for aspiring DevOps engineers and those seeking to elevate their modern software development skills.'},

      //   { field: 'Product Design', desc: 'Explore the art and science of product design in our comprehensive course. Master design thinking, user-centered design, prototyping, and iterative development. Gain hands-on experience crafting innovative, user-friendly products. Ideal for aspiring designers and those passionate about creating impactful user experiences.'},

      //   { field: 'Product management', desc: "Explore product management's dynamic realm in our insightful course. Master end-to-end lifecycles, from ideation to launch, with effective communication and agile techniques. Gain practical skills for successful product leadership. Ideal for aspiring product managers and professionals aiming to elevate their strategic expertise."},
      // ]
    }
  }
})
</script>

<style scoped>

</style>