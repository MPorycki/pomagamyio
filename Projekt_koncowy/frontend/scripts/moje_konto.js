function validate_changes(){
    try{
        console.log("lecimy");
        if (validate_login() && validate_name() && validate_surname() && validate_email()){
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

function validate_login(){
    var login_obj = document.forms["konto_form"]["login"];
    var login = login_obj.value;
    var existing_logins = ['JKowalski92', 'KNowak12', 'Zjanczak']; // dummy function
    if (login.length > 15) {
        login_obj.style.borderColor = "red";
        alert("Login jest za dlugi");
        return false;
    } else if ((login.replace(/\s/g, '')).length == 0) {
        login_obj.style.borderColor = "red";
        alert("Login jest wymagany.");
        return false;
    } else if (existing_logins.includes(login)){
        login_obj.style.borderColor = "red";
        alert("Podana nazwa uzytkownika juz istnieje");
        return false;
    }
    login_obj.style.borderColor = "grey";
    return true;
}

function validate_email(){
    var email_obj = document.forms["konto_form"]["email"];
    var email = email_obj.value;
    var email_regex = /.*@.*\.[a-z]{2,}/;
    if (email.length > 254) {
        email_obj.style.borderColor = "red";
        alert("Email jest za dlugi");
        return false;
    } else if ((email.replace(/\s/g, '')).length == 0) {
        email_obj.style.borderColor = "red";
        alert("Email jest wymagany.");
        return false;
    } else if (!email_regex.test(email)){
        email_obj.style.borderColor = "red";
        alert("Niepoprawny format maila");
        return false;
    }
    email_obj.style.borderColor = "grey";
    return true;
}

function validate_name(){
    var name_obj = document.forms["konto_form"]["name"];
    var name = name_obj.value;
    var name_regex = /^[A-Z]?[a-z].*$/;
    if (name.length > 32) {
        name_obj.style.borderColor = "red";
        alert( "Imię jest za dlugie");
        return false;
    } else if ((name.replace(/\s/g, '')).length == 0) {
        name_obj.style.borderColor = "red";
        alert( "Imię jest wymagane.");
        return false;
    } else if (!name_regex.test(name)){
        name_obj.style.borderColor = "red";
        alert( "Niedozwolone znaki w imieniu");
        return false;
    }
    name_obj.style.borderColor = "grey";
    return true;
}

function validate_surname(){
    var surname_obj = document.forms["konto_form"]["surname"];
    var surname = surname_obj.value;
    var surname_regex = /^[A-Z][a-z]*-?[A-Z]?[a-z]*/;
    if (surname.length > 64) {
        surname_obj.style.borderColor = "red";
        alert("Nazwisko jest za dlugie");
        return false;
    } else if ((surname.replace(/\s/g, '')).length == 0) {
        surname_obj.style.borderColor = "red";
        alert("Nazwisko jest wymagane.");
        return false;
    } else if (!surname_regex.test(surname)){
        surname_obj.style.borderColor = "red";
        alert("Niepoprawny format nazwiska");
        return false;
    }
    surname_obj.style.borderColor = "grey";
    return true;
}