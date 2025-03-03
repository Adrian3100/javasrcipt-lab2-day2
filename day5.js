function askUser2() {
    let color = prompt("What is your favorite color?");
    if (color) {
        document.getElementById("header1").innerHTML = `Cool choice!`;
        document.getElementById("para1").innerHTML = `Your favorite color is ${color}.`;
        document.body.style.backgroundColor = color; // Change background color
    }
}

