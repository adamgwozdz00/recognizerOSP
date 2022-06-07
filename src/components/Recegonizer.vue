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
    </div>
    <div class="flex" style="flex-direction: column;">
      <div >
        <input type="file" id="file" accept="image/*" ref="file">
        <label for="file" class="text-white px-5 py-2.5 bg-gradient-to-r from-[#3B0057] to-[#6D0000] uppercase rounded-full mt-5 cursor-pointer">Choose photo</label>
        <button type='button' class="text-white px-5 py-2.5 bg-gradient-to-r from-[#3B0057] to-[#6D0000] uppercase rounded-full mt-5 cursor-pointer" @click="uploadImage">upload</button>
      </div>
        <span class="text-white text-3xl font-extrabold uppercase rounded-full mt-5 cursor-pointer">{{recognitionResult}}</span>
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
import httpService from "../data_access/http.service"
export default {
  props: {
    recegonizerExpanded: false,
   
  },

  data() {
    return{
      recognitionResult: ""
    }
  },
  
  methods: {
    emitCollapse() {
      this.$emit("collapse", true);
    },
    collapse() {
      this.emitCollapse();
    },
    async uploadImage(){
      const file  = this.$refs.file.files[0];
      if(file == undefined) {
        console.error("Problem while posting image...")
        return;
      }
      const response = await httpService.post(file);
      
      if(!response.data["success"]){
        return;
      }

      this.recognitionResult = response.data["recognition"] + " accuracy: " + response.data["percentage"];

    }
  },
};
</script>

<style></style>
