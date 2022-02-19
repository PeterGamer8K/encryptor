const readline = require('readline-sync');

const valueToEncrypt = readline.question("Type the value to encrypt: ");
console.log("The encrypted value is: " + encryptor(valueToEncrypt));

function encryptor(valueToEncrypt) {
    const codes = {
        valueToEncrypt: valueToEncrypt,
        encryptedValueArrayCodes: [],
        encryptedValueArray: [],
    };

    //pedro p = 40 + 1 41
    for (let i = 0; i < codes.valueToEncrypt.length; i++) {
        codes.encryptedValueArrayCodes.push((codes.valueToEncrypt.charCodeAt(i)) + 10);
        codes.encryptedValueArray.push(String.fromCharCode(codes.encryptedValueArrayCodes[i]));
    }
    codes.encryptedValue = codes.encryptedValueArray.join("");


    return codes.encryptedValue;
}