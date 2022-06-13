<template>
  <div class="py-10 px-5 flex flex-col justify-center items-center w-full h-full transition duration-500">
    <h1 class="mb-4 ml-5 text-5xl xl:text-7xl text-white">Znajdowarka</h1>
    <p class="text-xl text-white whitespace-nowrap">Find rzeczy, return Krupniok get szpajza with AI 🤖</p>
    <button
      class="p-0.5 mt-10 bg-gradient-to-r from-[#3B0057] to-[#6D0000] shadow-xl hover:shadow-md transition duration-300 rounded-full"
      @click="emitClick()"
    >
      <span
        class="block w-full h-full px-5 py-2.5 bg-[#0b0417]/80 hover:bg-[#0b0417]/90 transition duration-300 rounded-full uppercase text-xl xl:text-2xl text-white"
      >
        Get started
      </span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    emitClick() {
      this.$emit("clicked", true);
    },
  },
};
</script>

<style></style>
