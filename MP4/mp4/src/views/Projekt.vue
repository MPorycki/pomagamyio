<template>
    <div class="truebody">
            <div class="basic_project_data">
                    <h4>Opis Projektu</h4>
                    <div class="text_box">
                        <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</h6>
                    </div>
                    <div class="project_image">
                        <img src="../assets/img/traj2.gif" alt="">
                    </div>
            </div>
            <div class="address_and_likes">
                <h4>Lokalizacja</h4>
                <div class="text_box">
                    <h2>Krucza 6 05-222 Warszawa</h2>
                </div>
                <div class="votes">
                    <div class="upvotes" grid-column:1 style="display:flex; background-color: lightgreen">
                        <img src="../assets/img/upvote.png" alt="Oceń projekt pozytywnie">
                        <p>{{projekt.upvotes}}</p>
                    </div>
                    <div class="downvotes" grid-column:2 style="display:flex; background-color:indianred">
                        <img src="../assets/img/downvote.png" alt="Oceń projekt negatywnie">
                        <p>{{projekt.downvotes}}</p>
                    </div>
                </div>
            </div>
        

        <div class="signin_users">
            <div class="signup_button">
                <button onclick="location.href='zapis.html';" name="Zapisz_się" id="1">Zapisz sie </button>
            </div>
            <div class="user_table">
                <table>
                    <tr style="background-color: lightslategray">
                        <th>Uzytkownik</th>
                        <th>Rola</th>
                    </tr>
                    <tr>
                        <th>JKowalski92</th>
                        <th>Tworca</th>
                    </tr>
                    <tr>
                        <th>KNowak12</th>
                        <th>Grafik</th>
                    </tr>
                    <tr>
                        <th>Zjanczak</th>
                        <th>Stolarz</th>
                    </tr>
                </table>
            </div>
        </div>

        <div class="comments">
            <div class="comments_header">
                <h2>Dyskusja</h2>
                <form action="skomentuj.html">
                    <input type="submit" value="Skomentuj">
                </form>
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
                <tr>
                    <th>17.10.2019 15:00</th>
                    <th>JKowlaski92</th>
                    <th>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <a href="skomentuj_edycja.html"><img src="img/edit.png"  style="width:15px; height: 15px;" alt=""></a>
                    </th>
                    <th>
                       
                    </th>
                </tr>
                <tr>
                    <th>18.10.2019 8:45</th>
                    <th>KNowak15</th>
                    <th>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</th>
                    <th>
                        <div class="up_downvote">
                            <img src="img/upvote.png" class="upvote_img" alt="">
                            <p class="upvote_no">5</p>
                            <img src="img/downovote.png" class="downvote_img" alt="">
                            <p class="downvote_no">0</p>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>19.10.2019 21:37</th>
                    <th>Zjanczak</th>
                    <th>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</th>
                    <th>
                        <div class="up_downvote">
                            <img src="img/upvote.png" class="upvote_img" alt="">
                            <p class="upvote_no">5</p>
                            <img src="img/downovote.png" class="downvote_img" alt="">
                            <p class="downvote_no">0</p>
                        </div>
                    </th>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "projekt",
    data() {
        return {
            projekt: {
                    id: 1,
                    title: "Ciekawa Inicjatywa 1",
                    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                    logo: "../img/traj2.gif",
                    upvotes: 14,
                    downvotes: 2
                }
            }
        }   
    }
</script>

<style scoped>
.truebody {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
    grid-row: 3;
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
}

.comments_header form {
    display: flex;
    align-items: center;
    margin-top: 20px;
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