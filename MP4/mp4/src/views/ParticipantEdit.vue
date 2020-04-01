<template>
        <form id="rola_form" @submit.prevent="update_participant" name="rola_form">
        <div class="truebody">
            <div class="titles">
                <h1>Działaj dalej w projekcie!</h1><br>
                <h3>Zmodyfikuj rolę, którą chcesz pełnić</h3>
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
    name: "ParticipantEdit",
    data(){
        return {
                role: "",
                project_id: 0,
                participant_id: ""
        }
    },
    mounted(){
        this.participant_id = this.$route.query.participant_id;
        this.project_id = this.$route.query.project_id;
    },
    methods: {
        update_participant(){
            const editedParticipant = {
                role: this.role,
                participant_id: this.participant_id
            }
            // Send up to parent
                if(this.validate_form()){
                    axios.patch("https://s15307pomagamy.herokuapp.com/participants/", editedParticipant).then(function(response){
                        window.location = '/#/projekt?project_id='+response.data;
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