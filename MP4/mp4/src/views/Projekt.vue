<template>
    <div class="truebody">
        <div style="margin-top:30px;">
            <router-link :to="{path: '/edytujprojekt', query: {project_id:this.projekt.id}}" tag="button" style="margin-right: 10px">Edytuj projekt</router-link>
            <button v-on:click="delete_projekt">Usuń projekt</button>
        </div>
        <ProjektItem v-bind:ProjektData="this.projekt" v-bind:UsersProjekt="projektUsers" v-bind:CommentsProjekt="projektComments"/>  
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
            delete_projekt() {
                this.$emit('delete-projekt', this.projekt.id);
                alert("Projekt usuniety");
                window.location = '/#/myprojekty';
            }
        },
        mounted(){
            this.load_project(this.$route.query.project_id);
        },
    data() {
        // TODO do ogarniecia wczytywanie tego z App.vue
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
                id: 1,
                username: "Zjanczak",
                role: "Stolarz"
                }
                ],
            projektComments: [
                {
                    id: 1,
                    date: "17.10.2019 15:00",
                    text: "ABC TEST",
                    upvotes: 5,
                    downvotes: 2,
                    userId : 1   
                },
                {
                    id: 2,
                    date: "17.10.2019 15:02",
                    text: "ABC2 TEST",
                    upvotes: 5,
                    downvotes: 2,
                    userId : 2   
                },
                {
                    id: 1,
                    date: "17.10.2019 15:05",
                    text: "ABC3 TEST",
                    upvotes: 5,
                    downvotes: 2,
                    userId : 3   
                }
            ]
            } 
        }   
    }
</script>

<style scoped>
</style>