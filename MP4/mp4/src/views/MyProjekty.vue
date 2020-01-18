<template>
    <div class="truebody" v-on:add-projekt="addProjekt">
        <router-link to="/stworzprojekt" class="stworzProjekt">Stwórz projekt</router-link>
        <cProjekty v-bind:projekty="data.projects"/>
    </div>
</template>

<script>
import cProjekty from "../components/cProjekty.vue"
export default {
    name: "Projekty",
    components: {
        cProjekty
    },
    props: ["data"],
}
</script>

<style scoped>
.truebody {
    margin-top: 10px;
}
</style>