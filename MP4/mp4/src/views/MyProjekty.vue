<template>
    <div class="truebody" v-on:add-projekt="addProjekt">
        <router-link to="/stworzprojekt" class="stworzProjekt">Stwórz projekt</router-link>
        <cProjekty v-on:upvote-projekt="upvoteProjekt" v-on:downvote-projekt="downvoteProjekt"  v-bind:projekty="this.my_projects"/>
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
    data() {
        return {
            my_projects : this.data.projects.filter(projekt => projekt.id == 1)
        }
    }
}
</script>

<style scoped>
.truebody {
    margin-top: 10px;
}
</style>