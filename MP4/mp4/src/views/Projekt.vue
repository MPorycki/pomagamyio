<template>
    <div class="truebody">
        <div style="margin-top:30px;">
            <router-link :to="{path: '/edytujprojekt', query: {project_id:this.projekt.id}}" tag="button" style="margin-right: 10px">Edytuj projekt</router-link>
            <button v-on:click="delete_projekt">Usuń projekt</button>
        </div>
        <ProjektItem v-bind:ProjektData="this.projekt" v-bind:UsersProjekt="projektUsers" v-bind:CommentsProjekt="projektComments" v-on:delete-komentarz="delete_komentarz"/>  
    </div>
</template>

<script>
import ProjektItem from "../components/ProjektItem.vue"

export default {
    name: "projekt",
    components: {
        ProjektItem
        },
        props: {
            data: Object
        },
        methods: {
            load_project(projekt_id){
                this.projekt = this.data.projects.filter(projekt => projekt.id == projekt_id)[0];
            },
            load_comments(projekt_id){
                this.projektComments = this.data.comments.filter(komentarz => komentarz.projectId == projekt_id);
            },
            delete_projekt() {
                this.$emit('delete-projekt', this.projekt.id);
                alert("Projekt usuniety");
                window.location = '/#/myprojekty';
            },
            delete_komentarz(comment_id){
                this.$emit('delete-komentarz', comment_id)
                this.load_comments(this.projekt.id)
            }
        },
        mounted(){
            this.load_project(this.$route.query.project_id);
            this.load_comments(this.$route.query.project_id);
        },
    data() {
        return {
            projekt: {

                },
            projektUsers: [
                {
                id: 1,
                username: "JKowalski92",
                role: "Twórca"
                },
                {
                id: 2,
                username: "KNowak12",
                role: "Grafik"
                },
                {
                id: 3,
                username: "Zjanczak",
                role: "Stolarz"
                }
                ],
            projektComments: [
                
            ]
            } 
        }   
    }
</script>

<style scoped>
</style>