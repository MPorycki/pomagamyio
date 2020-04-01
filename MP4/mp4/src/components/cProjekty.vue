<template>
    <div class="body">
        <div class="proj_body" v-bind:key="projekt.id" v-for="projekt in projekty">
            <cProjekt class="proj_obj" v-bind:projekt="projekt"/>
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
    height: 90%;
    margin-left: 5%;
    margin-right: 5%;
    flex-basis: 350px;
    padding-top:2%;
    
}

.proj_obj {
    margin-left: 5px;
    margin-right: 10px;
}


</style>