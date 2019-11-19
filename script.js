/* eslint-disable */

function updateFirstName(firstname) {
    document.getElementById("firstNameInput").innerHTML = firstname;
}

function updateLastName(lastname) {
    document.getElementById("lastNameInput").innerHTML = lastname;
}

document.getElementById('updateBtn').addEventListener("click", function() {
    eval('updateFirstName(" ' + unescape(document.getElementById("firstname").value) + ' ");')
    eval('updateLastName(" ' + unescape(document.getElementById("lastname").value) + ' ");')
});
