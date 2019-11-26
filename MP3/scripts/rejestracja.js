function validate_form(){
    try {
    var val_login = validate_login();
    var val_email = validate_email();
    var val_name = validate_name();
    var val_surname = validate_surname();
    var val_profile_pic = validate_profile_pic();
    var val_password = validate_password();
    if (val_login && val_email && val_name && val_surname && val_profile_pic && val_password){
        return true;
    } else {
        return false;
    }
    } catch (err) {
        console.log(err);
        return false;
    }
}

function add_error_text(element_name, text){
    var form = document.getElementById(element_name);
    form.textContent = text;
}

function validate_login(){
    var login_obj = document.forms["register"]["login"];
    var login = login_obj.value;
    var existing_logins = ['JKowalski92', 'KNowak12', 'Zjanczak']; // dummy function
    if (login.length > 15) {
        login_obj.style.borderColor = "red";
        add_error_text("login_error", "Login jest za dlugi");
        return false;
    } else if ((login.replace(/\s/g, '')).length == 0) {
        login_obj.style.borderColor = "red";
        add_error_text("login_error", "Login jest wymagany.");
        return false;
    } else if (existing_logins.includes(login)){
        login_obj.style.borderColor = "red";
        add_error_text("login_error", "Podana nazwa uzytkownika juz istnieje");
        return false;
    }
    login_obj.style.borderColor = "grey";
    add_error_text("login_error", "");
    return true;
}


function validate_email(){
    var email_obj = document.forms["register"]["email"];
    var email = email_obj.value;
    var email_regex = /.*@.*\.[a-z]{2,}/;
    if (email.length > 254) {
        email_obj.style.borderColor = "red";
        add_error_text("email_error", "Email jest za dlugi");
        return false;
    } else if ((email.replace(/\s/g, '')).length == 0) {
        email_obj.style.borderColor = "red";
        add_error_text("email_error", "Email jest wymagany.");
        return false;
    } else if (!email_regex.test(email)){
        email_obj.style.borderColor = "red";
        add_error_text("email_error", "Niepoprawny format maila");
        return false;
    }
    email_obj.style.borderColor = "grey";
    add_error_text("email_error", "");
    return true;
}

function validate_name(){
    var name_obj = document.forms["register"]["name"];
    var name = name_obj.value;
    var name_regex = /^[A-Z]?[a-z].*$/;
    if (name.length > 32) {
        name_obj.style.borderColor = "red";
        add_error_text("name_error", "Imię jest za dlugie");
        return false;
    } else if ((name.replace(/\s/g, '')).length == 0) {
        name_obj.style.borderColor = "red";
        add_error_text("name_error", "Imię jest wymagane.");
        return false;
    } else if (!name_regex.test(name)){
        name_obj.style.borderColor = "red";
        add_error_text("name_error", "Niedozwolone znaki w imieniu");
        return false;
    }
    name_obj.style.borderColor = "grey";
    add_error_text("name_error", "");
    return true;
}

function validate_surname(){
    var surname_obj = document.forms["register"]["surname"];
    var surname = surname_obj.value;
    var surname_regex = /^[A-Z][a-z]*-?[A-Z]?[a-z]*/;
    if (surname.length > 64) {
        surname_obj.style.borderColor = "red";
        add_error_text("surname_error", "Nazwisko jest za dlugie");
        return false;
    } else if ((surname.replace(/\s/g, '')).length == 0) {
        surname_obj.style.borderColor = "red";
        add_error_text("surname_error", "Nazwisko jest wymagane.");
        return false;
    } else if (!surname_regex.test(surname)){
        surname_obj.style.borderColor = "red";
        add_error_text("surname_error", "Niepoprawny format nazwiska");
        return false;
    }
    surname_obj.style.borderColor = "grey";
    add_error_text("surname_error", "");
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

function validate_profile_pic(){
    var profile_pic_obj = document.forms["register"]["profile_pic"];
    var profile_pic = profile_pic_obj.files;
    var name_regex_png = /.*\.png/
    var name_regex_jpg = /.*\.jpg/
    if (profile_pic.length == 0){
        profile_pic_obj.style.borderColor = "red";
        add_error_text("profile_pic_error", "Zdjecie profilowe jest wymagane");
        return false;
    }
    else if (!(name_regex_jpg.test(profile_pic[0].name) || name_regex_png.test(profile_pic[0].name))){
        profile_pic_obj.style.borderColor = "red";
        add_error_text("profile_pic_error", "Zdjecie musi byc w formacie .png lub .jpg");
        return false;
    }
    if (document.getElementById("profile_pic_error").textContent.length != 0){
        return false;
    }
    return true;
}

function validate_password(){
    var password_obj = document.forms["register"]["password"];
    var password = document.getElementById("pass").value;
    var password_repeat = document.getElementById("pass_repeat").value;
    var password_repeat_obj = document.forms["register"]["password_repeat"];
    if (password.length < 8) {
        password_obj.style.borderColor = "red";
        add_error_text("password_error", "Hasło jest za krótkie");
        return false;
    } else if ((password.replace(/\s/g, '')).length == 0) {
        password_obj.style.borderColor = "red";
        add_error_text("password_error", "Hasło jest wymagane.");
        return false;
    } else if (password != password_repeat){
        password_obj.style.borderColor = "red";
        add_error_text("password_error", "Hasła nie zgadzają się");
        add_error_text("password_repeat_error", "");
        return false;
    }
    password_obj.style.borderColor = "grey";
    add_error_text("password_error", "");
    return true;
}