<template>
    <form id="kom_form" @submit.prevent="addKomentarz" name="kom_form">
        <div class="kombody">
                <h1>Dodaj swój komentarz</h1>
                <textarea form="kom_form" id="komentarz" v-model="text" name="komentarz"></textarea>
                <input type="submit" id="skomentuj"  value="Skomentuj">
                <label class="lebel" id="kom_error"></label>
        </div>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    name: "komCreate",
    data(){
        return {
                userId: 0,
                projectId: 0,
                text: ""
        }
    },
    mounted(){
        this.userId = this.get_owner();
        this.projectId = this.$route.query.project_id;
    },
    methods: {
        addKomentarz(){
            const newKomentarz = {
                user_id: this.userId,
                project_id: this.projectId,
                text: this.text,
            }
            // Send up to parent
                if(this.validate_form()){
                    axios.post('https://s15307pomagamy.herokuapp.com/comments',
                        newKomentarz).then(function(response){
                            window.location = '/#/projekt?project_id='+response.data["project_id"]
                        }
                        )
                }
        },
        add_error_text(element_name, text){
            var form = document.getElementById(element_name);
            form.textContent = text;
        },
        validate_comment() {
            var kom_obj = document.forms["kom_form"]["komentarz"];
            var kom = kom_obj.value;
            var aggressive_regex = /!/
            if (kom.length > 4096) {
                kom_obj.style.borderColor = "red";
                this.add_error_text("kom_error", "Komentarz jest za dlugi");
                return false;
            } else if ((kom.replace(/\s/g, '')).length == 0) {
                kom_obj.style.borderColor = "red";
                this.add_error_text("kom_error", "Komentarz jest wymagany.");
                return false;
            } else if (aggressive_regex.test(kom)){
                kom_obj.style.borderColor = "red";
                this.add_error_text("kom_error", "Nie krzycz!");
                return false;
            }
            kom_obj.style.borderColor = "grey";
            this.add_error_text("kom_error", "");
            return true;
        },
        validate_form(){
            try {
                var vali_kom = this.validate_comment();
                if (vali_kom) {
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
        height: 100%;
        width: 100%;
    }

    #skomentuj {
        grid-column-start: 2;
        grid-row-start: 4;
        width: 35%;
        justify-items: center;
    }

    .lebel {
        grid-column-start: 2;
        grid-row-start: 3;
        color: red;
    }
    .kombody {
        display: grid;
        grid-template-rows: 3fr 3fr 1fr 3fr;
        grid-template-columns: 4fr 3fr 4fr;
        width: 100%;
        align-items: center;
        justify-items: center;
        grid-row: 3;
    }
    .kombody h1 {
        grid-column-start: 2;
        grid-row-start: 1;
        text-align: center;
    }

    .kombody h4 {
        grid-column-start: 2;
        grid-row-start: 2;
        text-align: center;
    }
</style>