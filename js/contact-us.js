// FORM CONTACT US EMAIL
function validateForm(){
    let emailPattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (emailPattern.test(document.formContact.txtEmail.value) == false) {

        let sr_email = document.getElementById('sr_email');
        let notiButton = document.getElementById('notiButton');

        sr_email.textContent = 'The e-mail address entered is invalid.';
        sr_email.style.fontSize = '13px';
        sr_email.style.color = 'red';
        sr_email.style.margin = 0;

        notiButton.textContent = 'One or more fields have an error. Please check and try again.'
        notiButton.style.fontSize = '13px';
        notiButton.style.color = 'black';
        notiButton.style.border = "2px solid #ffb900";
        notiButton.style.textAlign = 'center';
        
        document.formContact.txtEmail.focus();
        return false
    }
    if (emailPattern.test(document.formContact.txtEmail.value) == true) {

        notiButton.textContent = 'Thank you for your message. It has been sent.'
        notiButton.style.fontSize = '13px';
        notiButton.style.color = 'black';
        notiButton.style.border = "2px solid #46b450";
        notiButton.style.textAlign = 'center';

        document.formContact.txtEmail.focus();
        return false
    }
}