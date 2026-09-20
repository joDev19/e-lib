<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Livres from './views/Livres.vue';
</script>

<template>
  <header>
    <div class="h-screen bg-gray-100">
     
      <Livres />
   
    </div>
  </header>

  <!-- <RouterView /> -->
</template>

<style scoped>

</style>
