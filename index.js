import { autoResizeTextarea } from "./utils";

// get UI elementss
const inputText = document.getElementById('inputText');
const translationForm = document.getElementById('translationForm');
const outputText = document.getElementById('outputText');

function start(){
    inputText.addEventListener('input', () => autoResizeTextarea(inputText));
    translationForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const text = inputText.value.trim();
        if (text){
            outputText.textContent = `${text}`;
        };
    });

}

start();
