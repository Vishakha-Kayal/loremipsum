var seconddiv = document.querySelector(".main");

window.onload = function() {
    seconddiv.style.display = "none";

    // Set a timeout to display the .main div after 3000 milliseconds (3 seconds)
    setTimeout(function() {
        seconddiv.style.display = "block";
    }, 1000);
}
