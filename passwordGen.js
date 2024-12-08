const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*-+=?";

const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", generate);

const result = document.getElementById("result");
const copyButton = document.getElementById("copy-button");
copyButton.addEventListener("click", copyPassword);

function generate() {
    let characters = "";
    if (document.getElementById("lowercase-option").checked) {
        characters += lowercase;
    }
    if (document.getElementById("uppercase-option").checked) {
        characters += uppercase;
    }
    if (document.getElementById("number-option").checked) {
        characters += numbers;
    }
    if (document.getElementById("special-option").checked) {
        characters += symbols;
    }

    if (characters != "") {
        const length = Number(document.getElementById("password-length").value);
        let password = "";

        for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * characters.length);
            password += characters[index];
        }
        result.value = password;
    }
}

function copyPassword() {
    // Get the text field
    const copyText = result;

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, copyText.value.length); // For mobile devices

    // Copy the password from inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied password
    alert("Password Copied: " + copyText.value);
}