<template>
  <div class="min-h-screen flex justify-center items-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-500 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 12l2 2l4-4"></path>
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
      <p class="text-gray-600 mb-6">We have received your message. Our team will get back to you shortly.</p>
      <router-link to="/" class="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">Go Back Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThankYou"
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
