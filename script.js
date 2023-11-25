function checkName() {
    var name = document.getElementById("nameInput").value;
    var popup = document.getElementById("popup");
    var popupText = document.getElementById("popup-text");

    if (name.toLowerCase() === "ali") {
        popupText.textContent = "Ali Belalia is the owner of this website.";
    } else if (name.toLowerCase() === "ahlam") {
        popupText.textContent = "Ali Belalia loves you, Ahlam!";
    } else {
        popupText.textContent = "Sorry, I don't know you.";
    }

    popup.style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
