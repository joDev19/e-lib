<template>
    <div class="bg-blue-700 p-2 flex justify-between mb-2">

        <p class="text-lg text-white font-bold">
            <FontAwesomeIcon :icon="faChevronLeft" />
        </p>
        <p class="text-lg text-white font-bold">Bibliothèque</p>
        <p class="text-lg text-white font-bold">
            <FontAwesomeIcon :icon="faGear" />
        </p>
    </div>
</template>

<script setup lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGear, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
</script>

<style scoped>

</style>