<template>
    <div class="truebody">
        <div style="margin-top:30px;">
            <router-link :to="{path: '/edytujprojekt', query: {project_id:this.projekt.id}}" tag="button" style="margin-right: 10px">Edytuj projekt</router-link>
            <button v-on:click="delete_projekt">Usuń projekt</button>
        </div>
        <ProjektItem v-bind:ProjektData="this.projekt" v-bind:UsersProjekt="projektUsers" v-bind:CommentsProjekt="projektComments"
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
                axios.delete("https://s15307pomagamy.herokuapp.com/projects/" + this.$route.query.project_id ).then(function (){
                    alert("Projekt usuniety");
                    window.location = '/#/projekty';
                })
                
            },
            upvoteKomentarz(komentarz_id){
            this.$emit('upvote-komentarz', komentarz_id)
        },
            downvoteKomentarz(komentarz_id){
                this.$emit('downvote-komentarz', komentarz_id);
        }
        },
        mounted(){
            axios.get("https://s15307pomagamy.herokuapp.com/projects/" + this.$route.query.project_id ).then(res => this.projekt = res.data)
            axios.get("https://s15307pomagamy.herokuapp.com/participants/" + this.$route.query.project_id).then(res => this.projektUsers = res.data["participants"])
            axios.get("http://127.0.0.1:5000/comments/" + this.$route.query.project_id).then(res => this.projektComments = res.data["comments"])
        },
    data() {
        return {
            projekt: {

                },
            projektUsers: [
                
                ],
            projektComments: [
                
            ]
            } 
        }
    }
</script>

<style scoped>
</style>