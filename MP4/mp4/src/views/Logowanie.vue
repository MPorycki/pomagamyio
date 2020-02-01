<template>
     <div class="truebody">
            <h1>Witamy! {{this.cookie}}</h1>
            <form class="form1" @submit.prevent="log_in">
                <label for="1">Login</label>
                <input type="text" id="login" name="input1" v-model="login"> <br>
                <label for="2">Hasło</label>
                <input type="password" id="pass" name="input2"> <br>
                <input type="submit" value="Zaloguj się">
                <router-link to="/rejestracja" tag="button">Nie mam konta</router-link>
            </form>
            
        </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            login: ""
        }
    },
    methods: {
        log_in(){
            var data = {
                login: this.login,
                raw_password: document.getElementById("pass").value
            }
            axios.post("http://127.0.0.1:5000/account/login", data).then(res => this.add_session_cookies(res.data["account_id"], res.data["session_id"]))
        },
        add_session_cookies(user_id, session_id){
            var d = new Date();
            d.setTime(d.getTime() + (7*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = "session-d=" + session_id + ";" + expires + ";path=/";
            document.cookie = "user-id=" +user_id +";" + expires + ";path=/";
            this.$router.push({ name: 'projekty', })
        }
    }
}
</script>

<style scoped>
.truebody {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-items: center;
}

.form1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
}
.form1 label {
    grid-column: 1;
    text-align: center;
}

.form1 input {
    grid-column: 2;
}

.form1 input[type=submit] {
    grid-column-start:1;
    grid-column-end: 3;
    margin: 5px;
    width: 50%;
}

.truebody h1 {
    grid-row: 1;
    grid-column: 2;
}

button {
    grid-column-start:1;
    grid-column-end: 3;
    margin: 5px;
    width: 50%;
}
</style>