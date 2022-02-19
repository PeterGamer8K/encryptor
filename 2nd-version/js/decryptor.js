const readline = require("readline-sync");

const valueToDecrypt = readline.question("Type the value to decrypt: ");
console.log("The decrypted value is: " + decryptor(valueToDecrypt));

function decryptor(valueToDecrypt) {
    const values = {
        valueToDecrypt: valueToDecrypt,
        decryptedValueArray: [],
        decryptedValueArrayCodes: [],
    };

    for (let i = 0; i < values.valueToDecrypt.length; i++) {
        values.decryptedValueArrayCodes.push(values.valueToDecrypt.charCodeAt(i));
        values.decryptedValueArray.push(
            String.fromCharCode(values.decryptedValueArrayCodes[i])
        );

        switch (values.decryptedValueArray[i]) {
            case "a":
                values.decryptedValueArray[i] = "@";
                break;
            case "@":
                values.decryptedValueArray[i] = "a";
            case "o":
                values.decryptedValueArray[i] = "0";
                break;
            case "0":
                values.decryptedValueArray[i] = "o";
                break;
            case "3":
                values.decryptedValueArray[i] = "e";
                break;
            case "e":
                values.decryptedValueArray[i] = "3";
                break;
        }
    }

    values.decryptedValue = values.decryptedValueArray.join("");
    return values.decryptedValue;
}