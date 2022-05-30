<template>
  <div class="w-full h-screen flex flex-col md:flex-row bg-gradient-to-tr from-[#3B0057] to-[#6D0000]">
    <div class="md:basis-1/2">
      <welcomeHeader />
    </div>
    <div class="md:basis-1/2"></div>
  </div>
</template>

<script>
import welcomeHeader from "./components/welcome-header.vue";

export default {
  components: {
    welcomeHeader,
  },
};
</script>

<style></style>
