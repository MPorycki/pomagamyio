<template>
    <div class="header">
        <!--Probujemy zrobic unordered list!-->
        <ul>
            <li><router-link to="/" >Strona główna</router-link></li>
            <li><router-link to="/projekty" >Projekty</router-link></li>
            <li><router-link to="/myprojekty" >Moje Projekty</router-link></li>
            <li><router-link to="/ranking" >Ranking Serc</router-link></li>
            <li style="float:right"><router-link to="/login" >Logowanie/Rejestracja</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/*Paleta kolorow https://www.color-hex.com/color-palette/86658 
Zolty background https://www.color-hex.com/color-palette/10221*/
.header {
    background-color: #fffb96 ;
    height: 7%;
    margin: 0;
    padding: 0;
    width: 100%;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

li {
    float: left;
    height: 7%;
}

li a {
    display: block;
    text-align: center;
    padding: 16px;
    text-decoration: none;
    color: #4b41b1;
}

a:hover {
    color: white;
}

li:hover {
    display:block;
    background-color:#4b41b1;
}

.router-link-exact-active {
    background-color: #4b41b1;
    color: white;
}
</style>