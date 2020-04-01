function validate_form(){
    try {
    var vali_kom = validate_comment();
    if (vali_kom) {
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

function validate_comment() {
    var kom_obj = document.forms["kom_form"]["komentarz"];
    var kom = kom_obj.value;
    var aggressive_regex = /!/
    if (kom.length > 4096) {
        kom_obj.style.borderColor = "red";
        add_error_text("kom_error", "Komentarz jest za dlugi");
        return false;
    } else if ((kom.replace(/\s/g, '')).length == 0) {
        kom_obj.style.borderColor = "red";
        add_error_text("kom_error", "Komentarz jest wymagany.");
        return false;
    } else if (aggressive_regex.test(kom)){
        kom_obj.style.borderColor = "red";
        add_error_text("kom_error", "Nie krzycz!");
        return false;
    }
    kom_obj.style.borderColor = "grey";
    add_error_text("kom_error", "");
    return true;
}
