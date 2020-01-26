<template>
    <div class="truebody">
        <div style="margin-top:30px;">
            <p> elo {{this.projektComments}}</p>
            <router-link :to="{path: '/edytujprojekt', query: {project_id:this.projekt.id}}" tag="button" style="margin-right: 10px">Edytuj projekt</router-link>
            <button v-on:click="delete_projekt">Usuń projekt</button>
        </div>
        <ProjektItem v-bind:ProjektData="this.projekt" v-bind:UsersProjekt="projektUsers" v-bind:CommentsProjekt="projektComments" v-on:delete-komentarz="delete_komentarz"
        v-on:upvote-komentarz="upvoteKomentarz" v-on:downvote-komentarz="downvoteKomentarz"/>  
    </div>
</template>

<script>
import ProjektItem from "../components/ProjektItem.vue"
import axios from 'axios'
export default {
    name: "projekt",
    components: {
        ProjektItem
        },
        props: {
            data: Object
        },
        methods: {
            load_comments(projekt_id){
                this.projektComments = this.data.comments.filter(komentarz => komentarz.projectId == projekt_id);
            },
            delete_projekt() {
                axios.delete("http://127.0.0.1:5000/projects/" + this.$route.query.project_id )
                alert("Projekt usuniety");
                window.location = '/#/myprojekty';
            },
            delete_komentarz(comment_id){
                this.$emit('delete-komentarz', comment_id)
                this.load_comments(this.projekt.id)
            },
            upvoteKomentarz(komentarz_id){
            this.$emit('upvote-komentarz', komentarz_id)
        },
            downvoteKomentarz(komentarz_id){
                this.$emit('downvote-komentarz', komentarz_id);
        }
        },
        mounted(){
            axios.get("http://127.0.0.1:5000/projects/" + this.$route.query.project_id ).then(res => this.projekt = res.data)
            axios.get("http://127.0.0.1:5000/comments/" + this.$route.query.project_id).then(res => this.projektComments = res.data["comments"])
        },
    data() {
        return {
            projekt: {

                },
            projektUsers: [
                {
                id: '0a99e58c3aba4cf89a36000ae5c7af02',
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