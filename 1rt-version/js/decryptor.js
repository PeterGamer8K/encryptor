const readline = require('readline-sync');

const valueToDecrypt = readline.question("Type the value to decrypt: ");

console.log("The decrypted value is: " + decryptor(valueToDecrypt));


function decryptor(valueToDecrypt) {
    const codes = {
        valueToDecrypt: valueToDecrypt,
        decryptedValueArrayCodes: [],
        decryptedValueArray: [],
    };


    //pedro
    for (let i = 0; i < codes.valueToDecrypt.length; i++) {
        codes.decryptedValueArrayCodes.push((codes.valueToDecrypt.charCodeAt(i)) - 10);
        codes.decryptedValueArray.push(String.fromCharCode(codes.decryptedValueArrayCodes[i]));
    }

    codes.decryptedValue = codes.decryptedValueArray.join("");


    return codes.decryptedValue;
}