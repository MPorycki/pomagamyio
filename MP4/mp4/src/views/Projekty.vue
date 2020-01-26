<template>
    <div class="truebody">
        <router-link to="/stworzprojekt" class="stworzProjekt"></router-link>
        <cProjekty v-on:upvote-projekt="upvoteProjekt" v-on:downvote-projekt="downvoteProjekt"  v-bind:projekty="this.projects"/>
    </div>
</template>

<script>
import cProjekty from "../components/cProjekty.vue"
import axios from 'axios'
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
    data(){
        return {
            projects: []
        }
    },
    mounted() {
        axios.get("https://s15307pomagamy.herokuapp.com/projects")
        .then(res => this.projects = res.data["Projects"])
    }
}
</script>

<style scoped>
.truebody {
    margin-top: 10px;
}
</style>