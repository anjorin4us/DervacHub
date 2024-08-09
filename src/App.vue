<script>
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
import router from './routes';
import elementStores from './stores/store';


export default defineComponent({
  components: {Navbar, Footer}, 
  data() {
    return {
      isAboutPage: elementStores().$state.ApplyPageShow,
      dontScroll: elementStores().$state.disableScroll,
      showUpButton: elementStores().$state.showButton,
      showDownButton: elementStores().$state.showButton
    }
  },
  methods: {
    goUp() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    confirmScroll() {
      this.showUpButton = window.scrollY > 200;
    },
    goDown() {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    },
    checkScroll() {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      this.showDownButton = !scrolledToBottom;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.confirmScroll);
    window.addEventListener("scroll", this.checkScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.confirmScroll);
    window.removeEventListener("scroll", this.checkScroll);
  },

})
</script>

<template>
  <div id="main" class="bg-gradient-to-tl from-[#f2f6fb] to-[#f3e0e5] 2xl:container 2xl:mx-auto mb-0">
    <Navbar class="sticky top-0 mx-auto left-0 w-[95%] mx-auto z-40 shadow-2xl" />
    <router-view></router-view>
    <Footer />
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" v-if="showUpButton" @click="goUp" class="p-4 border border-[#102539] border-2 fixed bottom-8 right-10 bg-white rounded-full w-fit z-50 shadow-2xl" viewBox="0 0 24 24">
        <path fill="currentColor" d="M8 11h3v10h2V11h3l-4-4l-4 4zM4 3v2h16V3H4z"/>
      </svg>
  </div>
</template>


<style></style>