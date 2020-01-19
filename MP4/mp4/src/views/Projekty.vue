<template>
    <div class="truebody" v-on:add-projekt="addProjekt">
        <router-link to="/stworzprojekt" class="stworzProjekt"></router-link>
        <cProjekty v-on:upvote-projekt="upvoteProjekt" v-on:downvote-projekt="downvoteProjekt"  v-bind:projekty="data.projects"/>
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
    methods: {
        upvoteProjekt(project_id){
            this.$emit('upvote-projekt', project_id)
        },
        downvoteProjekt(projekt_id){
            this.$emit('downvote-projekt', projekt_id);
        }
    },
}
</script>

<style scoped>
.truebody {
    margin-top: 10px;
}
</style>