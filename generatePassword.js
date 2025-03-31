function generatePassword(lenght)  {

    const lowerCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
    const upperCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const symbol = [
        ...Array.from({ length: 15 }, (_, i) => String.fromCharCode(33 + i)),
        ...Array.from({ length: 7 }, (_, i) => String.fromCharCode(58 + i)),
        ...Array.from({ length: 6 }, (_, i) => String.fromCharCode(91 + i)),
        ...Array.from({ length: 4 }, (_, i) => String.fromCharCode(123 + i))
    ];

    const allCharacter = [...lowerCase, ...upperCase, ...number, ...symbol];
    let password = '';

    for (i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacter.length)
        password += allCharacter[randomIndex];
    }

    return password;
};

//const args = process.argv.slice(2); 

const generateBtn = document.querySelector(".generate");
const mdpOutput = document.querySelector(".mdp-container");

generateBtn.addEventListener('click', (event) => {
    
    const lengthInput = document.querySelector('#longueur').value;
    const length = Number(lengthInput.value); 

    if (isNaN(length) || length <= 0) {
        mdpOutput.innerText = 'Veuillez entrer une longueur valide.';
        return;
    }

    const generatedPassword = generatePassword(length);
    mdpOutput.innerText = `Votre mot de passe généré : ${generatedPassword}`;
});

