<template>
    <div class="body">
        <div class="proj_body" v-bind:key="projekt.id" v-for="projekt in projekty">
            <cProjekt v-bind:projekt="projekt"/>
        </div>
    </div>
</template>

<script>

import cProjekt from "./cProjekt.vue"

export default {
    name: "cProjekty",
    components:{
        cProjekt
    },
    props: ["projekty"]
}
</script>

<style scoped>
.body {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: space-between;
    height: 100%;
    margin: 2%;
    flex-basis: 200px;
}
</style>