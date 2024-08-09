<script>
import { defineComponent } from 'vue';


export default defineComponent({
    props: ['value']
})
</script>


<template>
    <button class="w-fit h-fit">{{ value }}</button>
</template>


<style></style>