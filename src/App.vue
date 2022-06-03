<template>
  <div class="justify-end w-full h-screen flex flex-col md:flex-row bg-black bg-gradient-to-tr from-[#0b0417] to-[#1b091f]">
    <div class="md:basis-1/2 grow-0 transition-all duration-500" :class="{ 'md-basis-0 opacity-0': isActive }">
      <welcomeHeader @clicked="toggleActive()" />
    </div>
    <div class="md:basis-1/2 shrink-0 transition-all duration-500" :class="{ 'md:basis-full': isActive }">
      <Recegonizer :recegonizerExpanded="isActive" @collapse="toggleActive()" />
    </div>
  </div>
</template>

<script>
import welcomeHeader from "./components/welcome-header.vue";
import Recegonizer from "./components/Recegonizer.vue";

export default {
  components: {
    welcomeHeader,
    Recegonizer,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style></style>
