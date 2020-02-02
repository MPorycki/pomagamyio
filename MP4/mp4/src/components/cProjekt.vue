<template>
        <div class="cprojekt">
            <router-link :to="{path: '/projekt', query: {project_id: projekt.id}}"><h4>{{projekt.name}}</h4></router-link>
            <h6>{{shorten_desc(projekt.Description)}}</h6>
            <div class="votes">
                <div class="upvotes" grid-column:1 style="display:flex; background-color: lightgreen">
                    <img src="../assets/img/upvote.png" v-on:click="vote(1)"  alt="Oceń projekt pozytywnie">
                    <p>{{projekt.upvotes}}</p>
                </div>
                <div class="downvotes" grid-column:2 style="display:flex; background-color:indianred">
                    <img src="../assets/img/downvote.png" v-on:click="vote(0)" alt="Oceń projekt negatywnie">
                    <p>{{projekt.downvotes}}</p>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "cProjekt",
    props: ["projekt"],
    methods: {
        vote(is_upvote){
            if (this.get_user().length == 0){
                alert("Zaloguj sie, aby glosować")
                return ""
            }
            var data = {
                user_id: this.get_user(),
                type: "project",
                object_id: this.projekt.id,
                is_upvote: is_upvote
            };
            axios.post("https://s15307pomagamy.herokuapp.com/votes/", data).then(res => this.vote_fe(res.status, is_upvote))
            .catch(error => alert(error.response.data));
        },
        vote_fe(status, is_upvote){
            if (status == 200){
                if (is_upvote){
                    this.projekt.upvotes += 1
                } else {
                    this.projekt.downvotes += 1;
                }
            }
        },
        shorten_desc(Description){
            if (Description.length > 200) {
                return Description.substring(0, 200) + "..."
            } else {
                return Description;
            }
        },
        get_cookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
                }
            }
            return "";
            },
            get_user(){
                var owner_id = this.get_cookie("user-id")
                if (owner_id.length == 32) {
                    return owner_id;
                } else {
                    return ""
                }
            }
    }
}

</script>


<style scoped>

.cprojekt h6 {
    margin-bottom: 40px;
    display: block;
}
.cprojekt {
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    width: 300px;
    min-height: 190px;
    position: relative;
}

.votes {
    display: flex;
    position: absolute;
    bottom:0;
    width: 100%;
}

.votes p {
    font-size: 20px;
    margin: 0;
    margin-top: 5%;
}

.votes div {
    width: 50%;
}

.votes img {
    height:30px; 
    margin-right:20%; 
    padding-left:20%;
    margin-top:2px;
}
</style>