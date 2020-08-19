//Add class is-invalid to show error messages written under class invalid-feedback in html

document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('zip').addEventListener('blur',validateZip);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('phone').addEventListener('blur',validatePhone);

function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-z]{2,12}$/;
    if(!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateZip() {
    const zip = document.getElementById('zip');
    const re = /^[0-9]{5}(-[0-9]{4})?$/;
    if(!re.test(zip.value)) {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    // use literal \ for hyphen and dot
    // .me -> 2 smallest and .media -> 5 largest
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    //american format
    //accept all formats (555) (555) (5555) or 5555555555 or 555.555.5555 or 555-555-5555 or 555 555 5555
    // literal paranthesesis \(  \)
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    if(!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}