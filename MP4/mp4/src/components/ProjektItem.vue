<template>
<div class="truebody">
    <div class="basic_project_data">
        <h4>Opis Projektu</h4>
        <div class="text_box">
            <h6>{{ProjektData.description}}</h6>
        </div>
        <div class="project_image">
            <img src="../assets/img/traj2.gif" alt="">
        </div>
    </div>
    <div class="address_and_likes">
        <h4>Lokalizacja</h4>
        <div class="text_box">
            <h2></h2>
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
            <button onclick="location.href='zapis.html';" name="Zapisz_się" id="1">Zapisz sie </button>
        </div>
        <div class="user_table">
            <table>
                <tr style="background-color: lightslategray">
                    <th>Uzytkownik</th>
                    <th>Rola</th>
                </tr>
                <tr v-bind:key="user.id" v-for="user in UsersProjekt">
                    <th >{{user.username}}</th>
                    <th>{{user.role}}</th>
                </tr>
            </table>
        </div>
    </div>

        <div class="comments">
            <!--TODO wyswietlanie mozliwosci edycji-->
            <div class="comments_header">
                <h2>Dyskusja</h2>
                <router-link :to="{path: '/skomentuj', query: {project_id: ProjektData.id, user_id: 1}}" tag="button">Skomentuj</router-link>
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
                    <th>{{find_username(comment.userId)}}</th>
                    <th>{{comment.text}}
                        <router-link :to="{path: 'edytujKomentarz', query: {comment_id: comment.id}}" ><img src="../assets/img/edit.png"  style="width:15px; height: 15px;" alt=""></router-link>
                        <img src="../assets/img/trash.png"  style="width:15px; height: 15px;" alt="" v-on:click="delete_comment(comment.id)">
                    </th>
                    <th>
                       <div class="up_downvote">
                            <img src="../assets/img/upvote.png" class="upvote_img" style="margin-right: 5px">
                            <p class="upvote_no">{{comment.upvotes}}</p>
                            <img src="../assets/img/downvote.png" class="downvote_img" alt="">
                            <p class="downvote_no">{{comment.downvotes}}</p>
                        </div>
                    </th>
                </tr>
            </table>
        </div>
</div>
</template>

<script>
export default {
    name: "ProjektItem",
    props: {
        ProjektData: Object,
        UsersProjekt: Array,
        CommentsProjekt: Array
    },
    methods: {
        find_username(userId){
            return this.UsersProjekt.filter(user => user.id == userId)[0].username;
        },
        delete_comment(comment_id) {
                this.$emit('delete-komentarz', comment_id);
                alert("Komentarz usuniety");
                this.key +=1;
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
    display: flex;
    text-align: justify;
    justify-content: center;
    align-items: center;
}

.project_image {
    grid-column: 3;
    display: flex;
    justify-content: center;
    align-items: center;
}

.project_image img{
    width: 300px;
    height: 200px;
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