"use strict"; // Add 'use strict' to enable strict mode

function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('age-verification').classList.add('show');
});

function verifyAge() {
    var age = document.getElementById('ageInput').value;
    if (age >= 18) {
        document.getElementById('age-verification').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        setCookie('ageVerified', 'true', 365); // Set a cookie to remember verification
    } else {
        window.location.href = 'under-18.html';
    }
}
