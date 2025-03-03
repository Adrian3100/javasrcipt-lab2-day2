function askUser1() {
    let name = prompt("What is your name?");
    if (name) {
        document.getElementById("header1").innerHTML = `Hello, ${name}!`;
        document.getElementById("para1").innerHTML = `Welcome to Page 1, ${name}.`;
    }
}
