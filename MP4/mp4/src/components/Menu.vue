<template>
    <div class="header">
        <!--Probujemy zrobic unordered list!-->
        <ul>
            <li><router-link to="/" >Strona główna</router-link></li>
            <li><router-link to="/projekty" >Projekty</router-link></li>
            <li><router-link to="/ranking" >Ranking Lajków</router-link></li>
            <li style="float:right" v-if="this.session_id.length == 0"><router-link to="/logowanie" >Logowanie/Rejestracja</router-link></li>
            <li style="float:right" v-else v-on:click="logout()"><a>Wyloguj</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user_id: "",
            session_id : ""
        }
    },
    methods: {
        get_session(){
      this.user_id = this.get_cookie("user-id")
      this.session_id = this.get_cookie("session-id")
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
     logout(){
        document.cookie = "session-id=;"
        document.cookie = "user-id=;" 
        location.reload()
    }
    },
    
    mounted(){
        this.get_session()
    }
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