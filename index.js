const characters =["A","B","C","D","E","F","G",
"H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2",
 "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
 "#","$","%","^","&","*","(",")","_","-","+","=","{",
 "[","}","]",",","|",":",";","<",">",".","?","/"];

let password1El = document.getElementById("pass1-text")
let password2El = document.getElementById("pass2-text")
let passGen1 = [];
let passGen2 = [];
let passLength = document.getElementById("pass-length").value

console.log(characters.length)
function randomPasswordGen(){
    randamPassword1()
    randamPassword2()
}

function randamPassword1(){
    let passLength = document.getElementById("pass-length").value
    let password = []
    
    for (let i = 0; i < characters.length; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        password.push(characters[randomIndex])
        
    }
    let pass = password.splice(0,passLength)
    passGen1 = pass.toString().replace(/,/g, "");
    password1El.textContent = passGen1  
        
}

function randamPassword2(){
    let passLength = document.getElementById("pass-length").value
    let password = []
    for (let i = 0; i < characters.length; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        password.push(characters[randomIndex])
    }
    passGen2 = password.slice(0,passLength).toString().replace(/,/g, "")
    password2El.textContent = passGen2
}
function copyPass1(){
let copyText = passGen1
navigator.clipboard.writeText(copyText);
alert("Password Copied: " + "{ " +copyText+ " }");
}
function copyPass2(){
    let copyText = passGen2
    navigator.clipboard.writeText(copyText);
    alert("Password Copied: " + "{ " +copyText+ " }");
    }
