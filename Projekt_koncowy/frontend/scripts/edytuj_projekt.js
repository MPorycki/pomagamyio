var profile_pic_size_check = true;
function validate_form(){
    var val_name = validate_name();
    var val_description = validate_description();
    var val_people_req = validate_people_req();
    var val_profile_pic = validate_profile_pic();
    var val_background_pic = validate_background_pic();
    var val_city = validate_city();
    var val_zip = validate_zip();
    var val_street = validate_street();
    var val_building_no = validate_building_no();
    var val_flat_no = validate_flat_no
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
        alert("Edycja projektu przebiegła pomyślnie!");
        return true;
    } else {
        return false;
    }
}

function add_error_text(element_name, text){
    var form = document.getElementById(element_name);
    form.textContent = text;
}

function validate_name(){
    var name_obj = document.forms["register"]["name"];
    name = name_obj.value;
    var name_regex = /[A-Z].*/;
    if (name.length > 24) {
        name_obj.style.borderColor = "red";
        add_error_text("name_error", "Nazwa jest za dluga");
        return false;
    } else if (name.length == 0) {
        name_obj.style.borderColor = "red";
        add_error_text("name_error", "Projekt musi miec nazwę");
        return false;
    } else if (!name_regex.test(name)){
        name_obj.style.borderColor = "red";
        add_error_text("name_error", "Nazwa musi zaczynac sie od duzej litery");
        return false;
    }
    name_obj.style.borderColor = "grey";
    add_error_text("name_error", "");
    return true;
}

function validate_description(){
    var descr_obj = document.forms["register"]["description"];
    var descr = descr_obj.value;
    var regex = /[A-Z].*\. ?[A-Z].*\.?/
    if (descr.length == 0){
        descr_obj.style.borderColor = "red";
        add_error_text("description_error", "Projekt musi mieć opis");
        return false;
    } else if (descr.length > 2048) {
        descr_obj.style.borderColor = "red";
        add_error_text("description_error", "Opis jest za długi");
        return false;
    } else if (!regex.test(descr)){
        descr_obj.style.borderColor = "red";
        add_error_text("description_error", "Opis musi mieć conajmniej 2 zdania");
        return false;
    }
    descr_obj.style.borderColor = "grey";
    add_error_text("description_error", "");
    return true;
}

function validate_people_req(){
    var ppl_req_obj = document.forms["register"]["people_req"];
    var ppl_req = ppl_req_obj.value;
    if (ppl_req != parseInt(ppl_req, 10)){
        ppl_req_obj.style.borderColor = "red";
        add_error_text("people_req_error", "Proszę podać liczbę");
        return false;
    } else if (ppl_req < 0) {
        ppl_req_obj.style.borderColor = "red";
        add_error_text("people_req_error", "Proszę podać liczbę dodatnią");
        return false;
    } else if (ppl_req > 12) {
        ppl_req_obj.style.borderColor = "red";
        add_error_text("people_req_error", "Projekt moze potrzebować max 12 czlonkow");
        return false;
    }
    ppl_req_obj.style.borderColor = "grey";
    add_error_text("people_req_error", "");
    return true;
}

function validate_profile_pic(){
    var profile_pic_obj = document.forms["register"]["profile_pic"];
    var profile_pic = profile_pic_obj.files;
    var name_regex_png = /.*\.png/
    var name_regex_jpg = /.*\.jpg/
    if (profile_pic.length != 0){
    if (!(name_regex_jpg.test(profile_pic[0].name) || name_regex_png.test(profile_pic[0].name))){
        profile_pic_obj.style.borderColor = "red";
        add_error_text("profile_pic_error", "Zdjecie musi byc w formacie .png lub .jpg");
        return false;
    }
    if (document.getElementById("profile_pic_error").textContent.length != 0){
        return false;
    }
    }
    return true;
}

function check_img_width_profile(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
        var img = new Image;
            
        img.onload = function() {
            if (img.width > img.height){
                add_error_text("profile_pic_error", "Zdjecie musi miec wieksza wysokosc niz szerokosc");
            } else {
                add_error_text("profile_pic_error", "");
            }
        };
        
        img.src = reader.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
    }

    function check_img_width_background(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
        var img = new Image;
            
        img.onload = function() {
            if (img.width < 1280){
                    add_error_text("background_pic_error", "Min. szerokosc to 1280 px");
                } else {
                    add_error_text("background_pic_error", "");
                }
        };
        
        img.src = reader.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
    }

function validate_background_pic(){
    var background_pic_obj = document.forms["register"]["background_pic"];
    var background_pic = background_pic_obj.files;
    var name_regex_png = /.*\.png/
    var name_regex_jpg = /.*\.jpg/
    if (background_pic.length != 0){
    if (!(name_regex_jpg.test(background_pic[0].name) || name_regex_png.test(background_pic[0].name))){
        background_pic_obj.style.borderColor = "red";
        add_error_text("background_pic_error", "Zdjecie musi byc w formacie .png lub .jpg");
        return false;
    }
    if (document.getElementById("background_pic_error").textContent.length != 0){
        return false;
    }
    }
    return true;
    
}

function validate_city(){
    var city_obj = document.forms["register"]["city"];
    var city = city_obj.value;
    var city_regex = /^[A-Z].*/;
    var number_regex = /[0-9]/
    if (!city_regex.test(city)){
        city_obj.style.borderColor = "red";
        add_error_text("city_error", "Nazwa miasta musi zaczynać się na duza literę");
        return false;
    } else if (number_regex.test(city)) {
        city_obj.style.borderColor = "red";
        add_error_text("city_error", "W nazwie miasta nie moze znajdowac sie cyfra");
        return false;
    } else if (city.split(" ").length > 3) {
        city_obj.style.borderColor = "red";
        add_error_text("city_error", "Za duzo słów w nazwie miasta");
        return false;
    }
    city_obj.style.borderColor = "grey";
    add_error_text("city_error", "");
    return true;
}

function validate_zip(){
    var zip_obj = document.forms["register"]["zip_code"];
    var zip = zip_obj.value;
    var zip_regex = /[0-9]{2}-[0-9]{3}/;
    if (zip.length == 0){
        zip_obj.style.borderColor = "red";
        add_error_text("zip_error", "Kod pocztowy jest wymagany");
        return false;
    } else if (!zip_regex.test(zip) || zip.length > 6){
        zip_obj.style.borderColor = "red";
        add_error_text("zip_error", "Niepoprawny format kodu pocztowego");
        return false;
    } 
    zip_obj.style.borderColor = "grey";
    add_error_text("zip_error", "");
    return true;
}

function validate_street(){
    var street_obj = document.forms["register"]["street"];
    var street = street_obj.value;
    var street_regex = /^[A-Z].*/;
    if (street.length == 0){
        street_obj.style.borderColor = "red";
        add_error_text("street_error", "Ulica jest wymagana");
        return false;
    } else if (street.length > 32) {
        street_obj.style.borderColor = "red";
        add_error_text("street_error", "Za długa nazwa ulicy");
        return false;
    } else if (!street_regex.test(street)) {
        street_obj.style.borderColor = "red";
        add_error_text("street_error", "Ulica powinna zaczynać się od duzej litery");
        return false;
    }
    street_obj.style.borderColor = "grey";
    add_error_text("street_error", "");
    return true;
}

function validate_building_no(){
    var building_no_obj = document.forms["register"]["building_no"];
    var building_no = building_no_obj.value;
    var building_no_regex = /^[0-9]{1,3}[a-z]?$/;
    if (building_no.length == 0){
        building_no_obj.style.borderColor = "red";
        add_error_text("building_no_error", "Nr budynku jest wymagany");
        return false;
    } else if (!building_no_regex.test(building_no)) {
        building_no_obj.style.borderColor = "red";
        add_error_text("building_no_error", "Zły format numeru ulicy");
        return false;
    }
    building_no_obj.style.borderColor = "grey";
    add_error_text("building_no_error", "");
    return true;
}

function validate_flat_no(){
    var flat_no_obj = document.forms["register"]["flat_no"];
    var flat_no = flat_no_obj.value;
    var flat_no_regex = /^[0-9]{1,3}$/;
    if (flat_no.length > 0) {
        if (!flat_no_regex.test(flat_no)) {
            flat_no_obj.style.borderColor = "red";
            add_error_text("flat_no_error", "Zły format numeru mieszkania");
            return false;
            }
    }
    flat_no_obj.style.borderColor = "grey";
    add_error_text("flat_no_error", "");
    return true;
}
