const readline = require("readline-sync");

const valueToEncrypt = readline.question("Type the value to encrypt: ");
console.log("The encrypted value is: " + encryptor(valueToEncrypt));

function encryptor(valueToEncrypt) {
    const values = {
        valueToEncrypt: valueToEncrypt,
        encryptedValueArray: [],
        encryptedValueArrayCodes: [],
    };

    for (let i = 0; i < values.valueToEncrypt.length; i++) {
        values.encryptedValueArrayCodes.push(values.valueToEncrypt.charCodeAt(i));
        values.encryptedValueArray.push(
            String.fromCharCode(values.encryptedValueArrayCodes[i])
        );

        switch (values.encryptedValueArray[i]) {
            case "a":
                values.encryptedValueArray[i] = "@";
                break;
            case "@":
                values.encryptedValueArray[i] = "a";
                break;
            case "o":
                values.encryptedValueArray[i] = "0";
                break;
            case "0":
                values.encryptedValueArray[i] = "o";
                break;
            case "3":
                values.encryptedValueArray[i] = "e";
                break;
            case "e":
                values.encryptedValueArray[i] = "3";
                break;
        }
    }

    values.encryptedValue = values.encryptedValueArray.join("");
    return values.encryptedValue;
}