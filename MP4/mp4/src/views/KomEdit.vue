<template>
    <form id="kom_form" action="kom_dodany.html" @submit.prevent="editKomentarz" name="kom_form">
        <div class="kombody">
                <h1>Edytuj swój komentarz</h1>
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
                id: 0,
                text: "",
                project_id: 0
        }
    },
    props: {data: Object},
    mounted(){
        this.id = this.$route.query.comment_id;
        axios.get("https://s15307pomagamy.herokuapp.com/comment/" + this.id).then( res => this.load_komentarz(res.data));
    },
    methods: {
        load_komentarz(input_data){
            this.text = input_data["comment"]["text"]
            this.project_id = input_data["comment"]["id_project"]
        },
        editKomentarz(){
            const editedKomentarz = {
                id: this.id,
                text: this.text
            }
            // Send up to parent
                if(this.validate_form()){
                    axios.patch("https://s15307pomagamy.herokuapp.com/comments", editedKomentarz).then(this.$router.push({ name: 'projekt', query:{project_id: this.project_id}}))
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
        get_date(){
            var currentdate = new Date(); 
            var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
            return datetime
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