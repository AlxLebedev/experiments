//contact script
const contactBtn = document.getElementById('contact-btn');
const contactContainer = document.getElementById('contact-container');
const contactItems = Array.from(document.querySelectorAll('.contact-item'));

contactBtn.addEventListener('click', function(event) {
    if (contactContainer.classList.contains('hidden')) {
        contactContainer.classList.remove('hidden')
    } else {
        contactContainer.classList.add('hidden')
    }
});

for (contactItem of contactItems) {
    contactItem.addEventListener('click', function(event) {
        contactContainer.classList.add('hidden');
    })
}

//reg form script
const sendFormButton = document.getElementById('btn');
const checkButton = document.getElementById('check');
const clearButtonList = document.querySelectorAll('.clear');

const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const countryList = document.getElementById('country');
const radioButtons = Array.from(document.querySelectorAll('.sex'));
const checkbox = document.querySelector('.checkbox');

const nameResult = document.querySelector('.inner-name');
const emailResult = document.querySelector('.inner-email');
const countryResult = document.querySelector('.inner-country');
const sexResult = document.querySelector('.inner-sex');

const nameCheck = document.getElementById('name-check');
const emailCheck = document.getElementById('email-check');
const checkboxCheck = document.getElementById('checkbox-check');

const data = {};

function resetResults() {
    nameResult.innerHTML = '';
    emailResult.innerHTML = '';
    countryResult.innerHTML = ` ${countryList.options[countryList.selectedIndex].text}`;
    sexResult.innerHTML = ` ${radioButtons[0].id}`;
} 

for (clearButton of clearButtonList) {
    clearButton.addEventListener('click', function() {
        this.previousElementSibling.value = '';
    
        if (this.previousElementSibling.name == 'name') {
            nameResult.textContent = '';
        } else if (this.previousElementSibling.name == 'email') {
            emailResult.textContent = '';
        }
    });
};

nameField.value = '';
nameField.addEventListener('input', function(event) {
    nameResult.innerHTML = ` ${event.target.value}`;
});

emailField.value = '';
emailField.addEventListener('change', function(event) {
    emailResult.innerHTML = ` ${event.target.value}`;
});

emailField.addEventListener('focus', function() {
    emailField.nextElementSibling.nextElementSibling.classList.remove('hidden');
});

emailField.addEventListener('blur', function() {
    emailField.nextElementSibling.nextElementSibling.classList.add('hidden');
});

countryResult.innerHTML = ` ${countryList.options[countryList.selectedIndex].text}`;
data.country = countryList.options[countryList.selectedIndex].text;
countryList.addEventListener('change', function() {
    data.country = countryList.value;
    countryResult.innerHTML = ` ${countryList.options[countryList.selectedIndex].text}`;
});

data.sex = radioButtons[0].id;
sexResult.innerHTML = ` ${radioButtons[0].id}`;
for (radioButton of radioButtons) {
    radioButton.addEventListener('change', function(event) {
        const sexValue = event.target.id;
        data.sex = sexValue;
        sexResult.innerHTML = ` ${sexValue}`
    });
};

data.isAgree = checkbox.checked;
checkbox.addEventListener('change', function() {
    data.isAgree = checkbox.checked;
});

checkButton.addEventListener('click', function(event) {
    let correctName = 'Name: OK';
    let correctEmail = 'E-mail: OK';
    let correctCheckbox = 'Checkbox: checked';

    if (!nameField.checkValidity() || nameField.value == '') {
        correctName = 'Error: Name must contains from 2 to 30 symbols'
    }
    if (!emailField.checkValidity() || emailField.value == '') {
        correctEmail = 'Error: E-mail must contains from 7 to 30 symbols'
    }
    if (!checkbox.checkValidity()) {
        correctCheckbox = 'Error: checkbox must be checked'
    }

    nameCheck.innerHTML = correctName;
    emailCheck.innerHTML = correctEmail;
    checkboxCheck.innerHTML = correctCheckbox;

    this.nextElementSibling.nextElementSibling.classList.remove('hidden');
});

sendFormButton.addEventListener('click', function() {
    const nameText = document.getElementById('name');
    nameText.value = nameText.value.trim();
    data.name = nameText.value;

    const email = document.getElementById('email');
    email.value = email.value.trim();
    data.email = email.value;

    console.log(data);

    document.forms['my-reg-form'].reset();
    resetResults();

    this.previousElementSibling.previousElementSibling.classList.add('hidden');
});


//let currentChar = 'j';

// document.addEventListener('keydown', function(event) {
//     //console.log(event);
//     //console.log(KeyboardEvent);
    
//     if (event.keyCode === 16) {
//         return;
//     }

//     console.log(event.key, event.charCode, event.keyCode);

//     if (event.key == currentChar || event.key == currentChar.toUpperCase()) {
//         console.log(`ok - ${event.key} = ${currentChar}`)
//     } else {
//         console.log(`wrong`)
//     }
// })