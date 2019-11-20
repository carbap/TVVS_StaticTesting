/* eslint-disable */

function updateFirstName(firstname){
    console.log(firstname + " firstname")
    document.getElementById("firstNameInput").innerHTML = firstname;
}

function updateLastName(lastname){
    document.getElementById("lastNameInput").innerHTML = lastname;
}

document.getElementById('updateBtn').addEventListener("click", function(){
    eval('updateFirstName(" ' + document.getElementById("firstname").value + ' ");')
    eval('updateLastName(" ' + document.getElementById("lastname").value + ' ");')
});

// unescape(document.getElementById("firstname").value)