function askUser3() {
    let destination = prompt("What is your dream vacation destination?");
    if (destination) {
        document.getElementById("header3").innerHTML = `Wow!`;
        document.getElementById("para3").innerHTML = `You would love to visit ${destination}.`;
    }
}

