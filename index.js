const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatePasswordBtn = document.getElementById("gen-password")




let passwordLength = 12

function getRandomCharacter() {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter]
 }

function generateRandomPassword() {
    let randomPassword1 = ""
    let randomPassword2 = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword1 += getRandomCharacter();
        randomPassword2 += getRandomCharacter();
    }
    
    document.getElementById("password-results1").textContent = randomPassword1;
    document.getElementById("password-results2").textContent = randomPassword2;
   
}

generateRandomPassword();

generatePasswordBtn.addEventListener("click", generateRandomPassword);



