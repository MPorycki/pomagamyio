<template>
<div class="truebody">
    <div class="basic_project_data">
        <h4>Opis Projektu</h4>
        <div class="text_box">
            <h6>{{ProjektData.Description}}</h6>
        </div>
        <div class="req_participants">
            <h3>Potrzebna liczba uczestników:</h3>
            <h2>{{ProjektData.requested_participants}}</h2>
        </div>
    </div>
    <div class="address_and_likes">
        <h4>Lokalizacja</h4>
        <div class="text_box" style="display:inline">
            <h2>{{build_adress()}}</h2><br>
            <h2>Dokładna lokalizacja:  {{render_exact_location(this.ProjektData.exact_location)}}</h2>
        </div>
        <div class="votes">
            <div class="upvotes" grid-column:1 style="display:flex; background-color: lightgreen">
                <img src="../assets/img/upvote.png" alt="Oceń projekt pozytywnie">
                <p>{{ProjektData.upvotes}}</p>
            </div>
            <div class="downvotes" grid-column:2 style="display:flex; background-color:indianred">
                <img src="../assets/img/downvote.png" alt="Oceń projekt negatywnie">
                <p>{{ProjektData.downvotes}}</p>
            </div>
        </div>
    </div>
    <div class="signin_users">
        <div class="signup_button">
            <!--TODO dodać wyświetlanie czy obecny user sie jeszcze moze zapisac czy juz jest-->
            <router-link :to="{path: '/participantAdd', query: {project_id: ProjektData.id, user_id: '0a99e58c3aba4cf89a36000ae5c7af02'}}" tag="button">Zapisz się</router-link>
        </div>
        <div class="user_table">
            <table>
                <tr style="background-color: lightslategray">
                    <th>Uzytkownik</th>
                    <th>Rola</th>
                </tr>
                <tr v-bind:key="user.id_participant" v-for="user in UsersProjekt">
                    <th >{{user.username}}
                        <img src="../assets/img/trash.png"  style="width:15px; height: 15px;" alt="" v-on:click="delete_participant(user.id)">
                    </th>
                    <th>{{user.role}}
                        <router-link :to="{path: '/participantEdit',  query: {project_id: ProjektData.id, participant_id: user.id}}" ><img src="../assets/img/edit.png"  style="width:15px; height: 15px;" alt=""></router-link>
                    </th>
                </tr>
            </table>
        </div>
    </div>

        <div class="comments">
            <div class="comments_header">
                <h2>Dyskusja</h2>
                <router-link :to="{path: '/skomentuj', query: {project_id: ProjektData.id}}" tag="button">Skomentuj</router-link>
            </div>
            <table> 
                <colgroup>
                    <col span="1" style="width: 9%;">
                    <col span="1" style="width: 9%;">
                    <col span="1" style="width: 70%;">
                    <col span="1" style="width: 12%;">
                </colgroup>
                <tr style="background-color: lightslategray">
                    <th>Data</th>
                    <th>Uzytkownik</th>
                    <th style="width: 75%">Komentarz</th>
                    <th>Ocena</th>
                </tr>
                <tr v-bind:key="comment.id" v-for="comment in CommentsProjekt">
                    <th>{{comment.created_at}}</th>
                    <th>{{comment.login}}</th>
                    <th>{{comment.text}}
                        <router-link :to="{path: 'edytujKomentarz',  query: {comment_id: comment.id}, params: {data: comment}}" ><img src="../assets/img/edit.png"  style="width:15px; height: 15px;" alt=""></router-link>
                        <img src="../assets/img/trash.png"  style="width:15px; height: 15px;" alt="" v-on:click="delete_comment(comment.id)">
                    </th>
                    <th>
                       <div class="up_downvote">
                            <img src="../assets/img/upvote.png" class="upvote_img" style="margin-right: 5px" v-on:click="vote(1, comment.id)">
                            <p class="upvote_no">{{comment.upvotes}}</p>
                            <img src="../assets/img/downvote.png" class="downvote_img" v-on:click="vote(0, comment.id)">
                            <p class="downvote_no">{{comment.downvotes}}</p>
                        </div>
                    </th>
                </tr>
            </table>
        </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "ProjektItem",
    props: {
        ProjektData: Object,
        UsersProjekt: Array,
        CommentsProjekt: Array
    },
    methods: {
        delete_comment(comment_id) {
            axios.delete("https://s15307pomagamy.herokuapp.com/comments/" + comment_id)
            alert("Komentarz usuniety");
            this.CommentsProjekt = this.CommentsProjekt.filter(comment => comment.id != comment_id)
            },
        delete_participant(participant_id){
            axios.delete("https://s15307pomagamy.herokuapp.com/participants/"+participant_id)
            alert("Uzytkownik usuniety z projektu")
            this.UsersProjekt = this.UsersProjekt.filter(user => user.id != participant_id)
        },
        build_adress(){
            var flat_number = "";
            if (this.ProjektData.flat_no != 0){
                flat_number = "/" + this.ProjektData.flat_no;
            }
            return (this.ProjektData.street + " " + this.ProjektData.building_no + flat_number+  ", " + this.ProjektData.zip_code + " " + this.ProjektData.city )
        },
        render_exact_location(location_bool){
            if (location_bool){
                return "Tak"
            } else {
                return "Nie"
            }
        },vote(is_upvote, comment_id){
            if (this.get_user().length == 0){
                alert("Zaloguj sie, aby glosować")
                return ""
            }
            var data = {
                user_id: this.get_user(),
                type: "comment",
                object_id: comment_id,
                is_upvote: is_upvote
            };
            axios.post("https://s15307pomagamy.herokuapp.com/votes/", data).then(res => this.vote_fe(res.status, is_upvote, comment_id))
            .catch(error => alert(error.response.data));
        },
        vote_fe(status, is_upvote, comment_id){
            if (status == 200){
                if (is_upvote){
                    this.CommentsProjekt.filter(comment => comment.id == comment_id)[0].upvotes += 1
                } else {
                    this.CommentsProjekt.filter(comment => comment.id == comment_id)[0].downvotes += 1;
                }
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
.truebody {
    width:95%;
    padding-right: 10%;
    margin-bottom: 2%;
}

.basic_project_data {
    height: 200px;
    display: grid;
    grid-template-columns: 3fr 10fr 4fr;
    margin-top: 50px;
}


.basic_project_data h4 {
    display: flex;
    grid-column: 1;
    justify-content: center;
    align-items: center;
}

.text_box{
    grid-column: 2;
    margin-right: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.req_participants {
    grid-column: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.address_and_likes {
    display: grid;
    margin-top: 50px;
    grid-template-columns: 3fr 5fr 5fr 4fr;
}

.address_and_likes h2 {
    display: flex;
    grid-column: 1;
    justify-content: center;
    align-items: center;
}

.up_downvote {
    grid-column: 4;
    margin-left: 15px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    height: 100px;
}

.up_downvote img {
    width: 30px;
    height: 30px;
}

.upvote_no {
    grid-row: 3;
    grid-column: 1; 
    text-align: center;
    margin-left: 25%;
    margin-right: 25%;
}

.upvote_img {
    grid-row: 2;
    grid-column: 1;
    align-items: center;
}

.downvote_img {
    grid-row: 2;
    grid-column: 2;
}

.downvote_no {
    grid-row: 3;
    grid-column: 2; 
    text-align: center;
    margin-left: 25%;
    margin-right: 25%;
}

.signin_users {
    display: grid;
    grid-template-columns: 7fr 3fr;
    width: 90%;
    margin-top: 50px;
}

.signup_button {
    grid-column: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.user_table {
    grid-column: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.user_table table {
    border: 3px solid black;
    width: 80%;
    
}

.user_table table th{
    border: 1px solid black;
}

.comments {
    display: flex;
    flex-direction: column;
    width: 95%;
    margin-left: 5%;

}

.comments_header {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.comments_header button {
    display: flex;
    height: 33%;
    margin-left: 25px;
}

.comments table {
    border: 3px solid black;
    width: 100%;
}

.comments table th {
    border: 1px solid black;
}


/**/ 
.votes {
    display: flex;
    width: 60%;
    grid-column: 4;
    height: 40px;
    margin-left:15%
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