<template>
  <div class="w-full h-full flex">
    <!-- TODO: FIX RWD -->
    <div class="basis-[250px] grow-0">
      <button
        class="group mt-10 text-xl text-white p-1 ml-4 transition duration-500"
        :class="{ 'opacity-0 pointer-events-none': !recegonizerExpanded || recognitionWorking }"
        @click="collapse()"
      >
        <span class="inline-block gradient-text mr-2 text-3xl font-extrabold group-hover:-translate-x-2 transition duration-200" v-html="'<'"> </span>
        <span>nazot</span>
      </button>
    </div>
    <div class="shrink-0 grow p-10 flex justify-center items-center h-full">
      <div
        class="h-full max-h-[500px] relative mx-auto transition duration-500 aspect-square rounded-xl border-2 border-solid border-white/50 overflow-hidden justify-center flex items-center"
        :class="{ 'group hover:bg-[#3B0057]/10': !fileSelected && recegonizerExpanded }"
      >
        <div class="absolute inset-0 transition duration-500" :class="{ 'opacity-0': recegonizerExpanded }">
          <RecegonizerPlaceholder />
        </div>
        <div
          class="absolute scanning z-20 inset-0 -top-10 -bottom-5 transition duration-500 pointer-events-none"
          :class="{ 'opacity-0': !recegonizerExpanded || !recognitionWorking }"
        >
          <div class="w-full h-24 bg-gradient-to-b from-[#6D0000]/50 to-transparent top-0 left-0"></div>
        </div>
        <input
          v-if="!fileSelected"
          class="block absolute inset-0 opacity-0 z-10"
          type="file"
          id="file"
          accept="image/*"
          ref="file"
          @change="imageSelect()"
          :class="recegonizerExpanded ? 'cursor-pointer ' : 'pointer-events-none'"
        />
        <img
          ref="image"
          class="block absolute inset-0 w-full h-full transition duration-300"
          src=""
          :class="
            fileSelected && recegonizerExpanded
              ? recognitionWorking
                ? 'opacity-100'
                : recognitionCompleted
                ? 'opacity-100'
                : 'opacity-20'
              : 'opacity-0'
          "
        />
        <div
          class="relative w-[158px] flex flex-col justify-center items-center z-20 transition duration-300"
          :class="recegonizerExpanded ? (fileSelected ? '' : 'pointer-events-none ') : 'pointer-events-none opacity-0'"
        >
          <div
            class="w-28 h-28 relative transition-all duration-500 pointer-events-none overflow-hidden"
            :class="{ 'scale-150 opacity-0 blur-sm': fileSelected }"
          >
            <svg
              class="w-28 h-28 transition duration-200 fill-white/50 group-hover:fill-white pointer-events-none"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0" fill="none" width="24" height="24" />
              <g>
                <path
                  d="M23 4v2h-3v3h-2V6h-3V4h3V1h2v3h3zm-8.5 7c.828 0 1.5-.672 1.5-1.5S15.328 8 14.5 8 13 8.672 13 9.5s.672 1.5 1.5 1.5zm3.5 3.234l-.513-.57c-.794-.885-2.18-.885-2.976 0l-.655.73L9 9l-3 3.333V6h7V4H6c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2v-7h-2v3.234z"
                />
              </g>
            </svg>
          </div>
          <div
            class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center transform transition duration-300"
            :class="fileSelected && !recognitionWorking && !recognitionCompleted ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'"
          >
            <button
              type="button"
              class="group text-white transition-all duration-300 hover:shadow-2xl shadow-[#6F0000] px-5 py-2.5 bg-gradient-to-r from-[#3B0057] to-[#6D0000] uppercase rounded-full cursor-pointer overflow-hidden"
              @click="uploadImage"
            >
              Find śrubki <span class="inline-block transform transition duration-300 group-hover:rotate-12 group-hover:translate-x-1">🔍</span>
            </button>
            <button
              type="button"
              class="text-white/60 group transition-all py-2 mt-5 border duration-300 px-2.5 text-xs border-solid border-[#3B0057] bg-gray-700/30 hover:bg-gray-700/60 uppercase rounded-full cursor-pointer overflow-hidden"
              @click="imageUnselect"
            >
              Remove image <span class="inline-block transform transition duration-300 group-hover:rotate-90">❌</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex basis-[250px] grow-0 py-5 overflow-hidden transition duration-500" :class="{ 'opacity-0': !recegonizerExpanded }">
      <div class="w-0.5 h-full bg-gradient-to-b from-[#3B0057] to-[#6D0000]/50"></div>
      <div class="w-full h-full flex flex-col justify-between">
        <div class="ml-5 mt-5 whitespace-nowrap">
          <p class="transition duration-300 text-xl text-white font-light" :class="!recognitionWorking ? 'opacity-0' : 'animate-pulse'">
            Please wait ...
          </p>

          <div class="transition duration-300" :class="{ 'opacity-0': !recognitionTime }">
            <p class="text-xl text-white font-light">Elapsed time:</p>
            <p class="text-2xl text-white">~ {{ recognitionTime }}</p>
          </div>
        </div>
        <div
          class="mx-5 w-full min-w-[206px] transition-all duration-300"
          :class="recegonizerExpanded && !fileSelected ? '' : 'opacity-0 pointer-events-none'"
        >
          <p class="text-white overflow-hidden w-full">
            To run Recegonizer upload an image by clicking
            <svg class="inline w-5 h-5 fill-white" width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" fill="none" width="24" height="24" />
              <g>
                <path
                  d="M23 4v2h-3v3h-2V6h-3V4h3V1h2v3h3zm-8.5 7c.828 0 1.5-.672 1.5-1.5S15.328 8 14.5 8 13 8.672 13 9.5s.672 1.5 1.5 1.5zm3.5 3.234l-.513-.57c-.794-.885-2.18-.885-2.976 0l-.655.73L9 9l-3 3.333V6h7V4H6c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2v-7h-2v3.234z"
                />
              </g>
            </svg>
            icon or by dragging an image into the container.
          </p>
        </div>
        <button
          class="w-24 mx-auto text-white transition-all duration-300 hover:shadow-2xl shadow-[#6F0000] px-5 py-2.5 bg-gradient-to-r from-[#3B0057] to-[#6D0000] uppercase rounded-full cursor-pointer overflow-hidden"
          :class="!recognitionCompleted || !recegonizerExpanded ? 'opacity-0 pointer-events-none' : 'opacity-80 hover:opacity-100'"
          @click="clear()"
        >
          Clear
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import RecegonizerPlaceholder from "./recegonizer-placeholder.vue";

import httpService from "../data_access/http.service";
export default {
  props: {
    recegonizerExpanded: false,
  },
  components: {
    RecegonizerPlaceholder,
  },

  data() {
    return {
      fileSelected: false,
      recognitionWorking: false,
      recognitionCompleted: false,
      recognitionTime: "",
    };
  },

  methods: {
    emitCollapse() {
      this.$emit("collapse", true);
    },
    collapse() {
      this.emitCollapse();
    },
    imageSelect() {
      this.fileSelected = this.$refs.file.files[0];
      this.$refs.image.src = URL.createObjectURL(this.fileSelected);
    },
    imageUnselect() {
      this.fileSelected = false;
      this.$refs.image.src = "";
    },
    async uploadImage() {
      this.recognitionWorking = true;
      this.recognitionTime = "";
      const file = this.fileSelected;
      if (file == undefined) {
        console.error("Problem while posting image...");
        (this.recognitionCompleted = false), (this.recognitionWorking = false);
        return;
      }
      await httpService.post(file);

      var response = await httpService.get();
      console.log(response.data.image);
      if (response.data.success == true) {
        this.$refs.image.src = "data:image/png;base64," + response.data.image;
        this.recognitionCompleted = true;
        this.recognitionWorking = false;
        this.recognitionTime = response.time;
      } else {
        this.recognitionCompleted = false;
        this.recognitionWorking = false;
        this.recognitionTime = "";
      }
    },
    clear() {
      this.recognitionTime = "";
      this.recognitionCompleted = false;
      this.imageUnselect();
    },
  },
};
</script>

<style>
@keyframes scanningAnimation {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(100%);
  }
}

.scanning {
  animation: scanningAnimation 2s alternate infinite ease-in-out;
}
</style>
