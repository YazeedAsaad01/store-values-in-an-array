const input = document.querySelector('.input');
const button = document.querySelector('.inputButton');
const storage = document.querySelector('.storage')
const hide = document.querySelector('.hideButton');

let theInputArray = [];

function handelThings(array) {

    array.push(input.value);

    const createDiv = document.createElement('div');
    const createButton = document.createElement('button');
    
    createDiv.textContent = input.value;
    createButton.textContent = 'Delete';

    createButton.addEventListener('click', (event) => {
        const target = event.target;
        const textToRemove = target.parentElement.textContent.replace('Delete','').trim();
        const indexOf = array.indexOf(textToRemove);

        createDiv.remove();
        
        if (indexOf !== -1) {
            array.splice(indexOf, 1);
        }
    });

    createDiv.appendChild(createButton);
    storage.appendChild(createDiv);
    input.value = '';
}

button.addEventListener('click', () => {

    handelThings(theInputArray);
});

hide.addEventListener('click', () => {
    if(hide.textContent === 'Hide Stored Values') {
        storage.style.display = 'none';
        hide.textContent = 'Show Stored Values';
    }else {
        storage.removeAttribute('style'); 
        hide.textContent = 'Hide Stored Values';
    }
});

const randomPass = document.querySelector('.randomPass');
const card = document.querySelector('.card');
const div = document.createElement('div');

function randomPassword() {
    
    const randomNumber1 = Math.random() * 3245762;
    const randomNumber = Math.floor(Math.random() * randomNumber1 *215724);

    const alphabetArray = [];
    for (let i = 97; i <= 122; i++) {
        alphabetArray.push(String.fromCharCode(i));
    }
    
    let passwordArray = [];
    let lettersArray = [];

    for (let i = 0; i < 11; i++) {
        const randomLetter = Math.floor(Math.random() * 25);
        const randomResult = alphabetArray[randomLetter];

        lettersArray.push(randomResult);

        passwordArray.push(randomResult.toUpperCase());
        passwordArray.push(randomLetter);
    }

    const letters = lettersArray.join('');

    passwordArray.push(randomNumber);
    passwordArray.push(letters);
    
    const finalPassword = passwordArray.join('');
    card.appendChild(div);
    div.textContent = finalPassword;
}



function longestWord(sentence) {
    const sentenceSplit = sentence.split(' ');
    sentenceSplit.sort((a,b) => b.length - a.length);
    console.log(sentenceSplit[0])
}

const largestTwo = document.querySelector('.largestTwoNumbers');

function biggestTwo() {
    let insideArray = [];
    const sortedArray = theInputArray.toSorted((a, b) => a - b);
    insideArray.push(
        sortedArray[sortedArray.length - 2],
        sortedArray[sortedArray.length - 1]
    );
    card.appendChild(div);
    div.textContent = insideArray;
}

const evenNumbers1 = document.querySelector('.evenNumbers');

function evenNumbers() {
    let newArray = [];
    for(let i = 0; i < theInputArray.length; i++) {
        if(theInputArray[i] % 2 == 0) {
            newArray.push(theInputArray[i])
        }
    }
    card.appendChild(div);
    div.textContent = newArray;
}

const oddNumbers1 = document.querySelector('.oddNumbers');

function oddNumbers() {
    let newArray = [];
    for(let i = 0; i < theInputArray.length; i++) {
        if(theInputArray[i] % 2 == 1) {
            newArray.push(theInputArray[i])
        }
    }
    card.appendChild(div);
    div.textContent = newArray;;
}

const largestToSmallest = document.querySelector('.largestToSmallest');

function sortLargest() {
    const sortedArray = theInputArray.sort((a,b) => b - a);
    card.appendChild(div);
    div.textContent = sortedArray;
}

randomPass.addEventListener('click',randomPassword);
largestTwo.addEventListener('click',biggestTwo);
evenNumbers1.addEventListener('click',evenNumbers);
oddNumbers1.addEventListener('click',oddNumbers);
largestToSmallest.addEventListener('click',sortLargest);
