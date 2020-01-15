<template>
    <div class="body">
        <div class="projekt">
            <img :src="projekt.logo">
            <router-link to="/projekt"><h4>{{projekt.title}}</h4></router-link>
            <h6>{{projekt.description}}</h6>
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
    </div>
</template>

<script>
export default {
    name: "cProjekt",
    props: ["projekt"]
}

</script>


<style scoped>
.body {
    /* Chce zeby body jednego projektu zawsze dostawalo 25% width, 50% height przestrzeni zaalokowanej na projekty */ 
    height: 350px;
    width: 300px;
}
.projekt {
    border-style: solid;
    border-color: black;
    border-width: 1px;
    width: 100%;
    height: 100%;
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