// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// document.querySelector("html").addEventListener("click", function () {
//     alert("whatever");
// });

let myImage = document.querySelector("img");
myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "img/audi_e-tron.jpg") {
        myImage.setAttribute("src", "img/yuri.jpeg");
    } else {
        myImage.setAttribute("src", "img/audi_e-tron.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername(){
    let myName = prompt("Enter name");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome, " + myName + " !";
}

if(!localStorage.getItem("name")){
    setUsername();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome, " + myName + " !";
}

myButton.onclick = function(){setUsername();};