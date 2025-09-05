<template>
    <KeepAlive include="ContentView"> 
        <component :is="current"></component>
    </KeepAlive>
</template>

<script setup>
import Homecontent from "@/components/Homearea/Homecontent.vue";
import { shallowRef } from 'vue';

const current = shallowRef(Homecontent);
</script>

<style scoped></style>