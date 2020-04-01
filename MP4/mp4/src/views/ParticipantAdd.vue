<template>
        <form id="rola_form" @submit.prevent="add_participant" name="rola_form">
        <div class="truebody">
            <div class="titles">
                <h1>Zapisz się do projektu!</h1><br>
                <h3>Podaj rolę, którą chcesz pełnić</h3>
            </div>
                <input type="text" form="rola_form" id="komentarz" v-model="role" name="rola">
                <input type="submit" id="skomentuj" value="Zapisz sie">
                <label class="lebel" id="rola_error"></label>
        </div>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    name: "ParticipantAdd",
    data(){
        return {
                role: "",
                project_id: 0
        }
    },
    mounted(){
        this.project_id = this.$route.query.project_id;
    },
    methods: {
        add_participant(){
            const newParticipant = {
                project_id: this.project_id,
                role: this.role,
                user_id: this.get_owner()
            }
            // Send up to parent
                if(this.validate_form()){
                    axios.post("https://s15307pomagamy.herokuapp.com/participants/", newParticipant).then(function(response){
                        window.location = '/#/projekt?project_id='+response.data["project_id"]
                    }).catch(function(){
                        alert("Masz juz role w tym projekcie");
                        history.back();
                    })
                }
        },
        add_error_text(element_name, text){
            var form = document.getElementById(element_name);
            form.textContent = text;
        },
        validate_role(){
            var role_obj = document.forms["rola_form"]["rola"];
            var role = role_obj.value;
            var role_regex = /[0-9]/
            if (role_regex.test(role)){
                role_obj.style.borderColor = "red";
                alert("Twoja rola nie moze zawierac cyfr");
                return false;
            }
            role_obj.style.borderColor = "grey";
            this.add_error_text("rola_error", "");
            return true;
        },
        validate_form(){
            try {
                var vali_role = this.validate_role();
                if (vali_role) {
                    return true;
                } else {
                    return false;
                }
                } catch (err) {
                    return false;
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
            get_owner(){
                var owner_id = this.get_cookie("user-id")
                if (owner_id.length == 32) {
                    return owner_id;
                } else {
                    return "0a99e58c3aba4cf89a36000ae5c7af02"
                }
            }
    }
}
</script>

<style scoped>
    #komentarz {
    grid-column-start: 2;
    grid-row-start: 2;
    text-align: center;
}

#skomentuj {
    grid-column-start: 2;
    grid-row-start: 3;
    width: 35%;
    justify-items: center;
}

.lebel {
    grid-column-start: 2;
    grid-row-start: 2;
    color: red;
}
.truebody {
    display: grid;
    grid-template-rows: 3fr 1fr 1fr;
    grid-template-columns: 4fr 3fr 4fr;
    width: 100%;
    align-items: center;
    justify-items: center;
    grid-row: 3;
}
.titles {
    grid-column-start: 2;
    grid-row-start: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
}

.truebody h4 {
    grid-column-start: 2;
    grid-row-start: 2;
    text-align: center;
}
</style>