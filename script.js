function checkName() {
    var name = document.getElementById("nameInput").value;
    var popupText = document.getElementById("popup-text");

    if (name.trim() !== "") {
        popupText.innerHTML = "Thank you for visiting our website, " + name + "!";
    } else {
        popupText.innerHTML = "Please enter a name.";
    }

    $('#myModal').modal('show');
}

function closePopup() {
    $('#myModal').modal('hide');
}
