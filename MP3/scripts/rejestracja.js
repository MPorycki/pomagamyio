function validate_form(){
    try {
        console.log("start");
    validate_login();
    return false;
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
    login = login_obj.value;
    var name_regex = /[A-Z].*/;
    if (name.length > 15) {
        login_obj.style.borderColor = "red";
        add_error_text("login_error", "Login jest za dlugi");
        return false;
    } else if (name.length == 0) {
        login_obj.style.borderColor = "red";
        add_error_text("login_error", "Login musi miec nazwę");
        return false;
    } else if (!name_regex.test(name)){
        login_obj.style.borderColor = "red";
        add_error_text("login_error", "Nazwa musi zaczynac sie od duzej litery");
        //return false;
    }
    login_obj.style.borderColor = "grey";
    add_error_text("login_error", "");
    alert("przeszło");
    return true;
}