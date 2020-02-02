<template>
    <div class="truebody">
            <h1>Zapraszamy do rejestracji</h1>
            <form name="register" @submit.prevent="register">
                <label class="namelebel" for="1">Login</label>
                <input type="text" id="1" name="login" v-model="login">
                <label class="lebel" id="login_error"></label> <br>

                <label class="namelebel" for="2">Email</label>
                <input type="text" id="2" name="email" v-model="email">
                <label class="lebel" id="email_error"></label> <br>

                <label class="namelebel" for="3">Imię</label>
                <input type="text" id="3" name="name" v-model="name">
                <label class="lebel" id="name_error"></label> <br>

                <label class="namelebel" for="4">Nazwisko</label>
                <input type="text" id="4" name="surname" v-model="surname">
                <label class="lebel" id="surname_error"></label> <br>

                <label class="namelebel" for="5">Hasło</label>
                <input type="password" id="pass" name="password" v-model="raw_password">
                <label class="lebel" id="password_error"></label> <br>

                <label class="namelebel" for="6">Powtórz hasło</label>
                <input type="password" id="pass_repeat" name="password_repeat">
                <label class="lebel" id="password_repeat_error"></label> <br>

                <input type="submit" value="Zarejestruj się">
            </form>
            
        </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
                login: "",
                raw_password: "",
                email: "",
                name: "",
                surname: ""
        }
    },
    methods: {
        add_error_text(element_name, text){
            var form = document.getElementById(element_name);
            form.textContent = text;
        },
        validate_form(){
            try {
            var val_login = this.validate_login();
            var val_email = this.validate_email();
            var val_name = this.validate_name();
            var val_surname = this.validate_surname();
            var val_password = this.validate_password();
            if (val_login && val_email && val_name && val_surname && val_password){
                return true;
            } else {
                return false;
            }
            } catch (err) {
                return false;
            }
        },
        validate_login(){
            var login_obj = document.forms["register"]["login"];
            var login = login_obj.value;
            if (login.length > 15) {
                login_obj.style.borderColor = "red";
                this.add_error_text("login_error", "Login jest za dlugi");
                return false;
            } else if ((login.replace(/\s/g, '')).length == 0) {
                login_obj.style.borderColor = "red";
                this.add_error_text("login_error", "Login jest wymagany.");
                return false;
            }
            login_obj.style.borderColor = "grey";
            this.add_error_text("login_error", "");
            return true;
        },
        validate_email(){
            var email_obj = document.forms["register"]["email"];
            var email = email_obj.value;
            var email_regex = /.*@.*\.[a-z]{2,}/;
            if (email.length > 254) {
                email_obj.style.borderColor = "red";
                this.add_error_text("email_error", "Email jest za dlugi");
                return false;
            } else if ((email.replace(/\s/g, '')).length == 0) {
                email_obj.style.borderColor = "red";
                this.add_error_text("email_error", "Email jest wymagany.");
                return false;
            } else if (!email_regex.test(email)){
                email_obj.style.borderColor = "red";
                this.add_error_text("email_error", "Niepoprawny format maila");
                return false;
            }
            email_obj.style.borderColor = "grey";
            this.add_error_text("email_error", "");
            return true;
        },
        validate_name(){
            var name_obj = document.forms["register"]["name"];
            var name = name_obj.value;
            var name_regex = /^[A-Z]?[a-z].*$/;
            if (name.length > 32) {
                name_obj.style.borderColor = "red";
                this.add_error_text("name_error", "Imię jest za dlugie");
                return false;
            } else if ((name.replace(/\s/g, '')).length == 0) {
                name_obj.style.borderColor = "red";
                this.add_error_text("name_error", "Imię jest wymagane.");
                return false;
            } else if (!name_regex.test(name)){
                name_obj.style.borderColor = "red";
                this.add_error_text("name_error", "Niedozwolone znaki w imieniu");
                return false;
            }
            name_obj.style.borderColor = "grey";
            this.add_error_text("name_error", "");
            return true;
        },
        validate_surname(){
            var surname_obj = document.forms["register"]["surname"];
            var surname = surname_obj.value;
            var surname_regex = /^[A-Z][a-z]*-?[A-Z]?[a-z]*/;
            if (surname.length > 64) {
                surname_obj.style.borderColor = "red";
                this.add_error_text("surname_error", "Nazwisko jest za dlugie");
                return false;
            } else if ((surname.replace(/\s/g, '')).length == 0) {
                surname_obj.style.borderColor = "red";
                this.add_error_text("surname_error", "Nazwisko jest wymagane.");
                return false;
            } else if (!surname_regex.test(surname)){
                surname_obj.style.borderColor = "red";
                this.add_error_text("surname_error", "Niepoprawny format nazwiska");
                return false;
            }
            surname_obj.style.borderColor = "grey";
            this.add_error_text("surname_error", "");
            return true;
        },
        validate_password(){
            var password_obj = document.forms["register"]["password"];
            var password = document.getElementById("pass").value;
            var password_repeat = document.getElementById("pass_repeat").value;
            if (password.length < 8) {
                password_obj.style.borderColor = "red";
                this.add_error_text("password_error", "Hasło jest za krótkie");
                return false;
            } else if ((password.replace(/\s/g, '')).length == 0) {
                password_obj.style.borderColor = "red";
                this.add_error_text("password_error", "Hasło jest wymagane.");
                return false;
            } else if (password != password_repeat){
                password_obj.style.borderColor = "red";
                this.add_error_text("password_error", "Hasła nie zgadzają się");
                this.add_error_text("password_repeat_error", "");
                return false;
            }
            password_obj.style.borderColor = "grey";
            this.add_error_text("password_error", "");
            return true;
        },
        register(){
            var data = {
                login: this.login,
                account_type: "user",
                raw_password: document.getElementById("pass").value,
                email: this.email,
                name: this.name,
                surname: this.surname
            }
            if (this.validate_form()){
                axios.post("https://s15307pomagamy.herokuapp.com/account/", data).then(res => this.register_success(res.data)).catch(error => this.handle_error(error.response.data));
            }
        },
        register_success(message){
            alert(message);
            this.$router.push({ name: 'logowanie', })
        },
        handle_error(error_data){
            if (error_data["username_taken"]){
                this.add_error_text("login_error", "Podany login juz istnieje");
            } 
            if (error_data["email_taken"]) {
                this.add_error_text("email_error", "Podany mail jest zajety");
            }
        }
    }
}
</script>

<style scoped>
.truebody {
    display: grid;
    grid-template-columns: 2fr 8fr 2fr;
    grid-template-rows: 1fr 4fr;
    width: 100%;
    align-items: center;
    justify-items: center;
    grid-row: 3;
}

.truebody form {
    grid-column: 2;
    grid-row: 2;
    display: grid;
    grid-template-columns: 2fr 3fr 2fr;
    width:75%
}
.truebody form label {
    text-align: center;
}

.namelebel {
    grid-column: 1;
    text-align: center;
}

.truebody form input {
    grid-column: 2;
}

.lebel {
    grid-column: 3;
    color: red;
    text-align: center;
}

.truebody form input[type=submit] {
    grid-column-start: 1;
    grid-column-end: 3;
    width: 50%;
    margin: 0 0 0 25%;
}

.truebody h1 {
    grid-row: 1;
    grid-column: 2;
}
</style>
