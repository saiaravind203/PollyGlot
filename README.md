# 🦜 PollyGlot - AI Translation Messenger

A modern, AI-powered translation web application that provides real-time language translation through an intuitive messenger-style chat interface. Transform your conversations across languages with the power of advanced AI!

![PollyGlot Demo](https://img.shields.io/badge/PollyGlot-Translation-blue?style=for-the-badge&logo=parrot)

---

## ✨ Features

### 🌍 **Multi-Language Translation**
- **Spanish** 🇪🇸 - Perfect for Spanish conversations
- **French** 🇫🇷 - Elegant French translations
- **Japanese** 🇯🇵 - Accurate Japanese text conversion

### 💬 **Messenger-Style Interface**
- **Chat-like experience** - Just like texting with a friend
- **Real-time responses** - Instant translations as you type
- **Conversation history** - Keep track of all your translations
- **User-friendly design** - Clean, modern interface

### 🤖 **AI-Powered Intelligence**
- **OpenRouter API integration** - Cutting-edge AI models
- **Context-aware translations** - Smart, natural language processing
- **Markdown support** - Rich text formatting in responses
- **Error handling** - Graceful handling of translation issues

### 🎨 **Modern UI/UX**
- **Responsive design** - Works perfectly on all devices
- **Dynamic message bubbles** - Auto-sizing based on content
- **Loading indicators** - Visual feedback during translation
- **Accessibility** - Screen reader friendly

---

## 🛠️ Tech Stack

### **Frontend**
- **Vite** - Lightning-fast build tool and dev server
- **Vanilla JavaScript** - No frameworks, pure JS for optimal performance
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties

### **Backend**
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Fast, minimalist web framework
- **CORS** - Cross-origin resource sharing
- **OpenAI SDK** - AI model integration

### **AI & APIs**
- **OpenRouter API** - Multi-model AI platform
- **Qwen 3-32B** - Advanced language model for translations

### **Security & Environment**
- **dotenv** - Environment variable management
- **Gitignore** - Secure credential protection

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **OpenRouter API Key** (get from [openrouter.ai](https://openrouter.ai/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saiaravind203/PollyGlot.git
   cd PollyGlot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in root directory
   cp .env.example .env  # or create manually
   ```

   Add your API key to `.env`:
   ```env
   OPENROUTER_API_KEY=your-api-key-here
   ```

4. **Start the application**
   ```bash
   npm start
   ```

5. **Open your browser**
   ```
   http://localhost:5174
   ```

---

## 📖 How to Use

### **Getting Started**
1. **Launch the app** - Open `http://localhost:5174` in your browser
2. **Welcome message** - PollyGlot greets you with instructions
3. **Select language** - Choose your target language from the dropdown

### **Translation Process**
1. **Type your message** - Enter English text in the input field
2. **Select target language** - Choose Spanish 🇪🇸, French 🇫🇷, or Japanese 🇯🇵
3. **Send message** - Click the send button or press Enter
4. **View translation** - AI response appears instantly on the left

### **Chat Features**
- **Conversation flow** - Messages appear like a chat conversation
- **Message history** - All translations are preserved
- **Auto-scroll** - Interface scrolls to show latest messages
- **Loading states** - "Translating..." indicator during processing

---

## 🔧 Project Structure

```
PollyGlot/
├── 📁 assets/           # Static assets (images, icons)
│   └── parrot.png      # PollyGlot mascot
├── 📄 index.html       # Main HTML structure
├── 📄 index.js         # Frontend JavaScript logic
├── 📄 index.css        # Styling and responsive design
├── 📄 server.js        # Express server & API routes
├── 📄 package.json     # Dependencies & scripts
├── 📄 vite.config.js   # Vite build configuration
├── 📄 .env             # Environment variables (gitignored)
├── 📄 .gitignore       # Files to exclude from git
└── 📄 README.md        # This documentation
```

---

## 🔒 Security & Best Practices

### **API Key Protection**
- ✅ **Environment variables** - API keys never committed to code
- ✅ **Gitignore protection** - `.env` files excluded from version control
- ✅ **Secure storage** - Keys stored locally only

### **Data Handling**
- ✅ **Client-side processing** - No sensitive data stored
- ✅ **HTTPS ready** - Prepared for secure deployments
- ✅ **Input validation** - Sanitized user inputs

### **Privacy**
- ✅ **No data retention** - Conversations not stored
- ✅ **Local processing** - All translations happen in real-time
- ✅ **Open source** - Transparent code for community review

---

## 🎯 API Reference

### **Translation Endpoint**
```http
POST /translate
Content-Type: application/json

{
  "text": "Hello, how are you?",
  "language": "es"
}
```

**Response:**
```json
{
  "translation": "Hola, ¿cómo estás?"
}
```

**Supported Languages:**
- `es` - Spanish 🇪🇸
- `fr` - French 🇫🇷
- `ja` - Japanese 🇯🇵

---

## 🐛 Troubleshooting

### **Common Issues**

**❌ "API Key not found"**
- Check your `.env` file exists and contains `OPENROUTER_API_KEY`
- Restart the server after adding the key

**❌ "Port already in use"**
```bash
# Kill existing processes
pkill -f "node server.js"
npm start
```

**❌ "Translation failed"**
- Verify your OpenRouter API key is valid
- Check internet connection
- Ensure selected language is supported

**❌ "Page not loading"**
- Make sure both frontend (5174) and backend (3000) are running
- Check browser console for errors

---

## 🚀 Deployment

### **Local Development**
```bash
npm run dev    # Frontend only
npm run server # Backend only
npm start      # Both frontend & backend
```

### **Production Deployment**
1. Set environment variables on your hosting platform
2. Build the frontend: `npm run build`
3. Deploy both frontend and backend
4. Configure CORS for your domain

### **Environment Variables**
```env
OPENROUTER_API_KEY=your-production-api-key
NODE_ENV=production
PORT=3000
```

---

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### **Development Guidelines**
- Follow existing code style
- Add comments for complex logic
- Test on multiple browsers
- Update documentation

---

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **OpenRouter** - For providing excellent AI API access
- **Vite** - For the amazing development experience
- **Express.js** - For the robust backend framework
- **Font Awesome** - For beautiful icons

---

## 📞 Support

Need help? Here's how to get support:

- **Issues** - [GitHub Issues](https://github.com/saiaravind203/PollyGlot/issues)
- **Discussions** - [GitHub Discussions](https://github.com/saiaravind203/PollyGlot/discussions)
- **Documentation** - This README and inline code comments

---

<div align="center">

**Made with ❤️ and lots of ☕**

*Transforming language barriers, one translation at a time.*

[🌟 Star this repo](https://github.com/saiaravind203/PollyGlot) • [📖 Read the docs](https://github.com/saiaravind203/PollyGlot#readme) • [🐛 Report bugs](https://github.com/saiaravind203/PollyGlot/issues)

</div>

