<template>
  <div class="w-full h-full flex">
    <div class="basis-[250px]">
      <button
        class="group mt-10 text-xl text-white p-1 ml-4 transition duration-500"
        :class="{ 'opacity-0': !recegonizerExpanded }"
        @click="collapse()"
      >
        <span class="inline-block gradient-text mr-2 text-3xl font-extrabold group-hover:-translate-x-2 transition duration-200" v-html="'<'"> </span>
        <span>nazot</span>
      </button>
      <!-- clearfix -->
    </div>
    <div class="flex-1 p-10 flex justify-center items-center h-full">
      <div class="h-full max-h-[500px] mx-auto aspect-square rounded-xl border-2 border-solid border-white/50 justify-center flex items-center" >
       <div 
    :class="{ 'opacity-0': !recegonizerExpanded }"
    @click="collapse()">
    <input type="file" id="file" accept="image/*">
    <label for="file" class="text-white px-5 py-2.5 bg-gradient-to-r from-[#3B0057] to-[#6D0000] uppercase rounded-full mt-5 cursor-pointer">Choose photo</label>
    </div>
      </div>
    </div>
    <div class="flex basis-[250px] py-5">
      <div
        class="w-0.5 h-full bg-gradient-to-b from-[#3B0057] to-[#6D0000]/50 transition duration-500"
        :class="{ 'opacity-0': !recegonizerExpanded }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recegonizerExpanded: false,
  },
  methods: {
    emitCollapse() {
      this.$emit("collapse", true);
    },
    collapse() {
      this.emitCollapse();
    },
  },
};
</script>

<style></style>
