<template>
    <div class="truebody">
            <h1>Edytuj projekt</h1>
            <form name="register" id="form" @submit.prevent="editProjekt">
                <label class="namelebel" for="1">Nazwa inicjatywy</label>
                <input type="text" id="1" v-model="title" name="name">
                <label class="lebel" id="name_error"></label> <br>

                <label class="namelebel" for="2">Opis</label>
                <textarea id="2" form="form" v-model="description" style="height: 100px;" name="description"></textarea>
                <label class="lebel" id="description_error" ></label> <br>

                <label class="namelebel" for="3">Ile osób jest potrzebnych?</label>
                <input type="text" id="3" v-model="people_req" name="people_req" value=3> 
                <label class="lebel" id="people_req_error"></label> <br>

                <label class="namelebel" for="4">Zdjęcie "profilowe"</label>
                <input type="file" id="4" name="profile_pic" onchange="check_img_width_profile(this);">
                <label class="lebel" id="profile_pic_error"></label> <br>

                <label class="namelebel" for="5">Zdjęcie w tle<br><i>Min. szerokość 1280px</i></label>
                <input type="file" id="5" name="background_pic" onchange="check_img_width_background(this);"> 
                <label class="lebel" id="background_pic_error"></label> <br>

                <h4>Lokalizacja</h4>

                <label class="namelebel" for="6">Miasto</label>
                <input type="text" id="6" v-model="city" name="city">
                <label class="lebel" id="city_error" ></label> <br>

                <label class="namelebel" for="7">Kod pocztowy</label>
                <input type="text" id="7" v-model="zip_code" name="zip_code">
                <label class="lebel" id="zip_error"></label> <br>

                <label class="namelebel" for="8">Ulica</label>
                <input type="text" id="8" v-model="street" name="street">
                <label class="lebel" id="street_error" ></label> <br>

                <label class="namelebel" for="9">Nr budynku</label>
                <input type="text" id="9" v-model="building_no" name="building_no">
                <label class="lebel" id="building_no_error"></label> <br>

                <label class="namelebel" for="6">Nr Mieszkania(opcjonalny)</label>
                <input type="text" id="10" v-model="flat_no" name="flat_no">
                <label class="lebel" id="flat_no_error"></label> <br>

                <h4>Czy jest to dokładna lokalizacja projektu czy punkt zbiórki</h4>
                <div class="radio">
                    <input type="radio" name="location" v-model="exact_location" value="true"> Dokładna lokalizacja
                    <input type="radio" name="location" v-model="exact_location" value="false" checked> Punkt zbiórki
                </div>
                <input type="submit" value="Zgłoś projekt">
            </form>
            
        </div>
</template>

<script>
export default {
    name:"projektCreate",
    props: {data: Object},
    data(){
        return {
            id: 0,
            title: "",
            description: "",
            people_req: 0,
            city: "",
            zip_code: "",
            street: "",
            building_no: "",
            flat_no: 0,
            exact_location: true,
            profile_pic_size_check: true
        }
    },
    methods: {
        load_project(projekt_id){
            var projekt = this.data.projects.filter(projekt => projekt.id == projekt_id)[0];
            this.id = projekt.id;
            this.title = projekt.title
            this.description = projekt.description;
            this.people_req = projekt.people_req;
            this.city = projekt.city;
            this.zip_code = projekt.zip_code;
            this.street = projekt.street;
            this.building_no = projekt.building_no;
            this.flat_no = projekt.flat_no;
            this.exact_location = projekt.exact_location;
        },
        add_error_text(element_name, text){
            var form = document.getElementById(element_name);
            form.textContent = text;
        },
        validate_name(){
            var name_obj = document.forms["register"]["name"];
            var name = name_obj.value;
            var name_regex = /[A-Z].*/;
            if (name.length > 24) {
                name_obj.style.borderColor = "red";
                this.add_error_text("name_error", "Nazwa jest za dluga");
                return false;
            } else if (name.length == 0) {
                name_obj.style.borderColor = "red";
                this.add_error_text("name_error", "Projekt musi miec nazwę");
                return false;
            } else if (!name_regex.test(name)){
                name_obj.style.borderColor = "red";
                this.add_error_text("name_error", "Nazwa musi zaczynac sie od duzej litery");
                return false;
            }
            name_obj.style.borderColor = "grey";
            this.add_error_text("name_error", "");
            return true;
        },
        validate_description(){
            var descr_obj = document.forms["register"]["description"];
            var descr = descr_obj.value;
            var regex = /[A-Z].*\. ?[A-Z].*\.?/
            if (descr.length == 0){
                descr_obj.style.borderColor = "red";
                this.add_error_text("description_error", "Projekt musi mieć opis");
                return false;
            } else if (descr.length > 2048) {
                descr_obj.style.borderColor = "red";
                this.add_error_text("description_error", "Opis jest za długi");
                return false;
            } else if (!regex.test(descr)){
                descr_obj.style.borderColor = "red";
                this.add_error_text("description_error", "Opis musi mieć conajmniej 2 zdania");
                return false;
            }
            descr_obj.style.borderColor = "grey";
            this.add_error_text("description_error", "");
            return true;
        },
        validate_people_req(){
            var ppl_req_obj = document.forms["register"]["people_req"];
            var ppl_req = ppl_req_obj.value;
            if (ppl_req != parseInt(ppl_req, 10)){
                ppl_req_obj.style.borderColor = "red";
                this.add_error_text("people_req_error", "Proszę podać liczbę");
                return false;
            } else if (ppl_req < 0) {
                ppl_req_obj.style.borderColor = "red";
                this.add_error_text("people_req_error", "Proszę podać liczbę dodatnią");
                return false;
            } else if (ppl_req > 12) {
                ppl_req_obj.style.borderColor = "red";
                this.add_error_text("people_req_error", "Projekt moze potrzebować max 12 czlonkow");
                return false;
            }
            ppl_req_obj.style.borderColor = "grey";
            this.add_error_text("people_req_error", "");
            return true;
        },
        validate_profile_pic(){
            var profile_pic_obj = document.forms["register"]["profile_pic"];
            var profile_pic = profile_pic_obj.files;
            var name_regex_png = /.*\.png/
            var name_regex_jpg = /.*\.jpg/
            if (profile_pic.length == 0){
                profile_pic_obj.style.borderColor = "red";
                this.add_error_text("profile_pic_error", "Zdjecie profilowe jest wymagane");
                return false;
            }
            else if (!(name_regex_jpg.test(profile_pic[0].name) || name_regex_png.test(profile_pic[0].name))){
                profile_pic_obj.style.borderColor = "red";
                this.add_error_text("profile_pic_error", "Zdjecie musi byc w formacie .png lub .jpg");
                return false;
            }
            if (document.getElementById("profile_pic_error").textContent.length != 0){
                return false;
            }
            return true;
        },
        check_img_width_profile(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function () {
                var img = new Image;
                    
                img.onload = function() {
                    if (img.width > img.height){
                        this.add_error_text("profile_pic_error", "Zdjecie musi miec wieksza wysokosc niz szerokosc");
                    } else {
                        this.add_error_text("profile_pic_error", "");
                    }
                };
                
                img.src = reader.result;
                };
                reader.readAsDataURL(input.files[0]);
            }
        },
        check_img_width_background(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function () {
                var img = new Image;
                    
                img.onload = function() {
                    if (img.width < 1280){
                            this.add_error_text("background_pic_error", "Min. szerokosc to 1280 px");
                        } else {
                            this.add_error_text("background_pic_error", "");
                        }
                };
                
                img.src = reader.result;
                };
                reader.readAsDataURL(input.files[0]);
                }
            },
        validate_background_pic(){
            var background_pic_obj = document.forms["register"]["background_pic"];
            var background_pic = background_pic_obj.files;
            var name_regex_png = /.*\.png/
            var name_regex_jpg = /.*\.jpg/
            if (background_pic.length == 0){
                background_pic_obj.style.borderColor = "red";
                this.add_error_text("background_pic_error", "Zdjecie w tle jest wymagane");
                return false;
            }
            else if (!(name_regex_jpg.test(background_pic[0].name) || name_regex_png.test(background_pic[0].name))){
                background_pic_obj.style.borderColor = "red";
                this.add_error_text("background_pic_error", "Zdjecie musi byc w formacie .png lub .jpg");
                return false;
            }
            if (document.getElementById("background_pic_error").textContent.length != 0){
                return false;
            }
            return true;
        },
        validate_city(){
            var city_obj = document.forms["register"]["city"];
            var city = city_obj.value;
            var city_regex = /^[A-Z].*/;
            var number_regex = /[0-9]/
            if (!city_regex.test(city)){
                city_obj.style.borderColor = "red";
                this.add_error_text("city_error", "Nazwa miasta musi zaczynać się na duza literę");
                return false;
            } else if (number_regex.test(city)) {
                city_obj.style.borderColor = "red";
                this.add_error_text("city_error", "W nazwie miasta nie moze znajdowac sie cyfra");
                return false;
            } else if (city.split(" ").length > 3) {
                city_obj.style.borderColor = "red";
                this.add_error_text("city_error", "Za duzo słów w nazwie miasta");
                return false;
            }
            city_obj.style.borderColor = "grey";
            this.add_error_text("city_error", "");
            return true;
        },
        validate_zip(){
            var zip_obj = document.forms["register"]["zip_code"];
            var zip = zip_obj.value;
            var zip_regex = /[0-9]{2}-[0-9]{3}/;
            if (zip.length == 0){
                zip_obj.style.borderColor = "red";
                this.add_error_text("zip_error", "Kod pocztowy jest wymagany");
                return false;
            } else if (!zip_regex.test(zip) || zip.length > 6){
                zip_obj.style.borderColor = "red";
                this.add_error_text("zip_error", "Niepoprawny format kodu pocztowego");
                return false;
            } 
            zip_obj.style.borderColor = "grey";
            this.add_error_text("zip_error", "");
            return true;
        },
        validate_street(){
            var street_obj = document.forms["register"]["street"];
            var street = street_obj.value;
            var street_regex = /^[A-Z].*/;
            if (street.length == 0){
                street_obj.style.borderColor = "red";
                this.add_error_text("street_error", "Ulica jest wymagana");
                return false;
            } else if (street.length > 32) {
                street_obj.style.borderColor = "red";
                this.add_error_text("street_error", "Za długa nazwa ulicy");
                return false;
            } else if (!street_regex.test(street)) {
                street_obj.style.borderColor = "red";
                this.add_error_text("street_error", "Ulica powinna zaczynać się od duzej litery");
                return false;
            }
            street_obj.style.borderColor = "grey";
            this.add_error_text("street_error", "");
            return true;
        },
        validate_building_no(){
            var building_no_obj = document.forms["register"]["building_no"];
            var building_no = building_no_obj.value;
            var building_no_regex = /^[0-9]{1,3}[a-z]?$/;
            if (building_no.length == 0){
                building_no_obj.style.borderColor = "red";
                this.add_error_text("building_no_error", "Nr budynku jest wymagany");
                return false;
            } else if (!building_no_regex.test(building_no)) {
                building_no_obj.style.borderColor = "red";
                this.add_error_text("building_no_error", "Zły format numeru ulicy");
                return false;
            }
            building_no_obj.style.borderColor = "grey";
            this.add_error_text("building_no_error", "");
            return true;
        },
        validate_flat_no(){
            var flat_no_obj = document.forms["register"]["flat_no"];
            var flat_no = flat_no_obj.value;
            var flat_no_regex = /^[0-9]{1,3}$/;
            if (flat_no.length > 0) {
                if (!flat_no_regex.test(flat_no)) {
                    flat_no_obj.style.borderColor = "red";
                    this.add_error_text("flat_no_error", "Zły format numeru mieszkania");
                    return false;
                    }
            }
            flat_no_obj.style.borderColor = "grey";
            this.add_error_text("flat_no_error", "");
            return true;
        },
        validate_form(){
            var val_name = this.validate_name();
            var val_description = this.validate_description();
            var val_people_req = this.validate_people_req();
            var val_profile_pic = this.validate_profile_pic();
            var val_background_pic = this.validate_background_pic();
            var val_city = this.validate_city();
            var val_zip = this.validate_zip();
            var val_street = this.validate_street();
            var val_building_no = this.validate_building_no();
            var val_flat_no = this.validate_flat_no()
            if (
            val_name &&
            val_description &&
            val_people_req &&
            val_profile_pic &&
            val_background_pic &&
            val_city &&
            val_zip &&
            val_street &&
            val_building_no &&
            val_flat_no) {
                return true;
            } else {
                return false;
            }
        },
        editProjekt() {
                const editedProjekt = {
                    id: this.id,
                    title: this.title,
                    description: this.description,
                    people_req: this.people_req,
                    city: this.city,
                    zip_code: this.zip_code,
                    street: this.street,
                    building_no: this.building_no,
                    flat_no: this.flat_no,
                    exact_location: this.exact_location
                }
                // Send up to parent
                if(!this.validate_form()){
                    this.$emit('edit-projekt', editedProjekt);
                    window.location = '/#/myprojekty';
                    //this.$router.push({ name: "/myprojekty"})
                }
        },
         
    },
    mounted(){
        this.load_project(this.$route.query.project_id);
    }
}
</script>

<style scoped>
.truebody {
    display: grid;
    grid-template-columns: 2fr 5fr 2fr;
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
    grid-template-columns: 4fr 4fr 2fr;
    width: 100%;
}
.truebody form label {
    text-align: center;
}

.namelebel {
    grid-column:1;
}
.truebody form input {
    grid-column: 2;
}

.lebel {
    grid-column: 3;
    color: red;
    text-align: center;
}

.radio{
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
}

.truebody h4 {
    grid-column-start: 1;
    grid-column-end: 3;
    text-align: center;
}

.truebody form input[type=submit] {
    grid-column-start: 1;
    grid-column-end: 3;
    width: 25%;
    margin: 0 0 0 40%;
}

.truebody h1 {
    grid-row: 1;
    grid-column: 2;
}
</style>