let signUpBtn = document.getElementById('signUp');
let modalReg = document.getElementById('modalReg');
let popupFade = document.getElementById('popupFade');
let submitForm = document.getElementById('submitForm');
let regBtn = document.getElementById('regBtn');
let successModal = document.getElementById('successModal');
let okBtn = document.getElementById('okBtn');
let closeBtn = document.getElementById('vectorReg');
let vectorSuccess = document.getElementById('vectorSuccess');
let mobilMenu = document.getElementById('mobilMenu');
let mobilMenuContent = document.getElementById('mobilMenuContent');
let closeMobilMenu = document.getElementById('closeMobilMenu');
let mobilMenuSign = document.getElementById('mobilMenuSign');
let regModalOpen = document.getElementsByClassName('reg-modal-open');
let closeModalLogIn = document.getElementById('vectorLogIn');
let modalLogIn = document.getElementById('modalLogIn');
let LogInModalOpen = document.getElementById('LogInModalOpen');

// let typeRegistrationButtons = document.querySelectorAll('.publisher-btn, .advertiser-btn');
// Array.from(typeRegistrationButtons).forEach(function(btn) {
//     btn.addEventListener('click', () => {
//         if (!btn.classList.contains('active-btn')) {
//             btn.classList.add('active-btn');
//         }
//     });
// });

let publisherBtn = document.querySelector('#modalReg .publisher-btn');
let publisherRadio = document.querySelector('#modalReg .publisher-radio');
let advertiserBtn = document.querySelector('#modalReg .advertiser-btn');
let advertiserRadio = document.querySelector('#modalReg .advertiser-radio');

publisherBtn.addEventListener('click', () => {
    if (!publisherBtn.classList.contains('active-btn')) {
        publisherBtn.classList.add('active-btn');
        publisherRadio.checked = true;
        advertiserBtn.classList.remove('active-btn');
    }
});

advertiserBtn.addEventListener('click', () => {
    if (!advertiserBtn.classList.contains('active-btn')) {
        advertiserBtn.classList.add('active-btn');
        advertiserRadio.checked = true;
        publisherBtn.classList.remove('active-btn');
    }
});

let ourAdvantagesPublisherBtn = document.querySelector('.our-advantages-wrapper .publisher-btn');
let ourAdvantagesAdvertiserBtn = document.querySelector('.our-advantages-wrapper .advertiser-btn');
let publisherBlock = document.querySelector('.publisher-block');
let advertiserBlock = document.querySelector('.advertiser-block');
ourAdvantagesPublisherBtn.addEventListener('click', () => {
    if (!ourAdvantagesPublisherBtn.classList.contains('active-btn')) {
        ourAdvantagesAdvertiserBtn.classList.remove('active-btn');
        ourAdvantagesPublisherBtn.classList.add('active-btn');
        advertiserBlock.classList.add('d-none');
        publisherBlock.classList.remove('d-none');
    }
});

ourAdvantagesAdvertiserBtn.addEventListener('click', () => {
    if (!ourAdvantagesAdvertiserBtn.classList.contains('active-btn')) {
        ourAdvantagesPublisherBtn.classList.remove('active-btn');
        ourAdvantagesAdvertiserBtn.classList.add('active-btn');
        publisherBlock.classList.add('d-none');
        advertiserBlock.classList.remove('d-none');
    }
});


signUpBtn.addEventListener('click', () => {
    modalReg.classList.remove('d-none');
    popupFade.classList.remove('d-none');
});

vectorSuccess.addEventListener('click', () => {
    popupFade.classList.add('d-none');
    successModal.classList.add('d-none');
});

closeBtn.addEventListener('click', () => {
    popupFade.classList.add('d-none');
    modalReg.classList.add('d-none');
});

LogInModalOpen.addEventListener('click', () => {
    popupFade.classList.remove('d-none');
    modalLogIn.classList.remove('d-none');
});

closeModalLogIn.addEventListener('click', () => {
    popupFade.classList.add('d-none');
    modalLogIn.classList.add('d-none');
});

modalLogIn.addEventListener('click', (e) => {
    if (e.target.className === 'wrapper-log-in-modal') {
        popupFade.classList.add('d-none');
        modalLogIn.classList.add('d-none');
    }
});

for(let i = 0; i < regModalOpen.length; i++) {
    regModalOpen[i].addEventListener('click', () => {
        popupFade.classList.remove('d-none');
        modalReg.classList.remove('d-none');
    });
}
// regModalOpen.addEventListener('click', () => {
//     popupFade.classList.remove('d-none');
//     modalReg.classList.remove('d-none');
// });
// popupFade.addEventListener('click', () => {
//     popupFade.classList.add('d-none');
//     modalReg.classList.add('d-none');
// });

modalReg.addEventListener('click', (e) => {
    if (e.target.className === 'wrapper-registration-modal') {
        popupFade.classList.add('d-none');
        modalReg.classList.add('d-none');
    }
});

successModal.addEventListener('click', (e) => {
    if (e.target.className === 'wrapper-success-modal') {
        popupFade.classList.add('d-none');
        successModal.classList.add('d-none');
    }
});

regBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let isFieldCorrect = validateForm(submitForm);
    if (isFieldCorrect) {
        console.log('submitForm', submitForm.elements);
        ['firstName', 'email', 'password1', 'password2'].forEach(function(el) {
            console.log('el', submitForm.elements[el].value);
        });

        modalReg.classList.add('d-none');
        successModal.classList.remove('d-none');
        ['firstName', 'email', 'password1', 'password2'].forEach(function(el) {
            submitForm.elements[el].value = '';
        });
        submitForm.elements['policy-check'].checked = false;

        //submitForm.submit();
    }
});

okBtn.addEventListener('click', () => {
    popupFade.classList.add('d-none');
    successModal.classList.add('d-none');
});

mobilMenu.addEventListener('click', () => {
    mobilMenuContent.classList.remove('d-none');
});

closeMobilMenu.addEventListener('click', () => {
    mobilMenuContent.classList.add('d-none');
});

mobilMenuSign.addEventListener('click', () => {
    mobilMenuContent.classList.add('d-none');
    popupFade.classList.remove('d-none');
    modalReg.classList.remove('d-none');
});

function validateForm(form) {
    /*
    if (form.elements['firstName'].value.trim() === '') {
        alert('Please, enter your full name');
        return false;
    }
    if (form.elements['firstName'].value.trim().length < 2) {
        alert('Please, enter your full name');
        return false;
    }

    if (form.elements['email'].value.trim() === '') {
        alert('Please, enter your email');
        return false;
    }
    var emailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    var correctEmail = emailReg.test(String(form.elements['email'].value).toLowerCase());
    if (!correctEmail) {
        alert('Please, enter correct email');
        return false;
    }

    if (form.elements['password1'].value.trim() === '') {
        alert('Please, enter your password');
        return false;
    }
    var passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    var passwordValue1 = form.elements['password1'].value;
    if (!passwordValue1.match(passwordReg)) { 
        alert('Please, enter correct password');
        return false;
    }
    var passwordValue2 = form.elements['password2'].value;
    if (passwordValue1 !== passwordValue2) {
        alert('Please, enter same password');
        return false;
    }

    if (!form.elements['policy-check'].checked) {
        alert('Please, check agree terms and policy');
        return false;
    }

    return true;
     */

    return validateName(form) && validateEmail(form) && validatePassword(form) && validateCheckBoxAgree(form);
}

function validateName(form) {
    if (form.elements['firstName'].value.trim() === '') {
        alert('Please, enter your full name');
        return false;
    }
    if (form.elements['firstName'].value.trim().length < 2) {
        alert('Please, enter your full name');
        return false;
    }

    return true;
}

function validateEmail(form) {
    if (form.elements['email'].value.trim() === '') {
        alert('Please, enter your email');
        return false;
    }
    let emailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let correctEmail = emailReg.test(String(form.elements['email'].value).toLowerCase());
    if (!correctEmail) {
        alert('Please, enter correct email');
        return false;
    }

    return true;
}

function validatePassword(form) {
    if (form.elements['password1'].value.trim() === '') {
        alert('Please, enter your password');
        return false;
    }
    let passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    let passwordValue1 = form.elements['password1'].value;
    if (!passwordValue1.match(passwordReg)) {
        alert('Please, enter correct password');
        return false;
    }
    let passwordValue2 = form.elements['password2'].value;
    if (passwordValue1 !== passwordValue2) {
        alert('Please, enter same password');
        return false;
    }

    return true;
}

function validateCheckBoxAgree(form) {
    if (!form.elements['policy-check'].checked) {
        alert('Please, check agree terms and policy');
        return false;
    }

    return true;
}