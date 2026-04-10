import { autoResizeTextarea } from "./utils";
import { marked } from "marked";
import DOMPurify from "dompurify";

// get UI elements
const inputText = document.getElementById('inputText');
const languageSelect = document.getElementById('languageSelect');
const translationForm = document.getElementById('translationForm');
const chatMessages = document.getElementById('chatMessages');

function start(){
    inputText.addEventListener('input', () => autoResizeTextarea(inputText));
    translationForm.addEventListener('submit', handlesubmit);
    
    // Add initial welcome message
    addMessage("Hello! I'm PollyGlot, your translation assistant. Select a language and enter text to start translating!", false, null);
}

function addMessage(content, isUser = false, language = null) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'agent-message'}`;
    
    if (!isUser) {
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'message-avatar';
        if (language === null) {
            const img = document.createElement('img');
            img.src = './assets/parrot.png';
            img.alt = 'PollyGlot';
            avatarDiv.appendChild(img);
        } else {
            const flagMap = {
                'es': '🇪🇸',
                'fr': '🇫🇷',
                'ja': '🇯🇵'
            };
            const span = document.createElement('span');
            span.textContent = flagMap[language];
            span.style.fontSize = '35px';
            avatarDiv.appendChild(span);
        }
        messageDiv.appendChild(avatarDiv);
    }
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    if (isUser) {
        const p = document.createElement('p');
        p.textContent = content;
        contentDiv.appendChild(p);
    } else {
        // For agent messages, use innerHTML for markdown support
        const translationtext = content;
        const html = marked.parse(translationtext);
        const safeHTML = DOMPurify.sanitize(html);
        contentDiv.innerHTML = safeHTML;
    }
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // Auto-scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
async function handlesubmit(e){
    e.preventDefault();
    const text = inputText.value.trim();
    const language = languageSelect.value;
    if(!text) return;
    
    // Add user message to chat (don't clear previous messages)
    addMessage(text, true);
    
    // Clear input
    inputText.value = '';
    
    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message agent-message typing';
    const flagMap = {
        'es': '🇪🇸',
        'fr': '🇫🇷',
        'ja': '🇯🇵'
    };
    const flagEmoji = flagMap[language] || '🌍';
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <span style="font-size: 35px;">${flagEmoji}</span>
        </div>
        <div class="message-content">
            <p><em>Translating...</em></p>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    try {
        const response = await fetch('/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text, language }),
        });
        const data = await response.json();
        
        // Remove typing indicator
        chatMessages.removeChild(typingDiv);
        
        if (data.error) {
            addMessage('Error: ' + data.error, false, language);
        } else {
            addMessage(data.translation, false, language);
        }
        console.log('Translation data:', data);
    } catch (error) {
        // Remove typing indicator
        chatMessages.removeChild(typingDiv);
        console.error('Error translating text:', error);
        addMessage('An error occurred while translating the text.', false, language);
    } 
}

start();

