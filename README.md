# 🤖 VeeChat - AI Chat Application

A modern AI-powered chat application built with Next.js 16, React 19, and Groq's ultra-fast LLM inference. Chat with Meta's Llama 3.3 70B model in real-time with a beautiful, responsive interface.

🌐 **Live Demo:** [Click Here!!](https://veebot-five.vercel.app)   
🔧 **Status:** Actively maintained 🚀

---

## ✨ Features

- 🤖 **AI-Powered Conversations** - Chat with Llama 3.3 70B (280 tokens/sec)
- ⚡ **Lightning Fast Responses** - Powered by Groq's LPU inference technology
- 🎨 **Modern UI/UX** - Beautiful gradient design with smooth animations
- 💬 **Real-time Chat Interface** - Instant message delivery and responses
- 👤 **User & Bot Avatars** - Visual distinction between you and the AI
- 🔄 **Auto-scroll** - Automatically scrolls to the latest messages
- ⌨️ **Typing Indicators** - Animated dots while AI is thinking
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🎯 **Empty State UI** - Helpful guidance when starting conversations
- 🚫 **No Authentication Required** - Start chatting immediately

---

## 🛠️ Technologies Used

### Frontend
- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4

### Backend
- **API Routes**: Next.js Serverless Functions
- **AI Integration**: Groq SDK (groq-sdk@0.37.0)
- **Model**: Meta Llama 3.3 70B Versatile

### Design
- **UI/UX Design**: Enhanced with Claude AI (Anthropic)
- **Icons**: Heroicons (via SVG)
- **Animations**: Custom CSS + Tailwind utilities

---

## 📁 Project Structure

```
veebot/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # Chat API endpoint
│   ├── page.tsx                   # Main chat interface
│   └── globals.css                # Global styles & animations
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
├── tailwind.config.js             # Tailwind configuration
└── README.md                      # Project documentation
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- A Groq API key (get one free at [console.groq.com](https://console.groq.com))

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/vishalpatel7777/veebot.git
   cd veebot
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   GROQ_API_KEY=your_groq_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "groq-sdk": "^0.37.0",
    "next": "16.0.8",
    "react": "19.2.1",
    "react-dom": "19.2.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwind": "^4",
    "typescript": "^5"
  }
}
```

---

## 🎯 How It Works

1. **User Input**: Type your message in the input field at the bottom
2. **API Request**: Message is sent to `/api/chat` endpoint via POST request
3. **Groq Processing**: The API calls Groq's SDK with Llama 3.3 70B model
4. **AI Response**: Model generates a response (280 tokens/sec)
5. **Real-time Display**: Response appears instantly in the chat interface
6. **Auto-scroll**: Chat automatically scrolls to show the latest message

---

## 🎨 Features Breakdown

### Chat Interface
- Message bubbles with distinct colors (user: blue, bot: white)
- Avatar icons for visual identification
- Timestamp-based unique message IDs
- Smooth fade-in animations for new messages
- Custom rounded corners for a modern look

### User Experience
- Empty state with welcoming message
- Typing indicator with bouncing dots
- Disabled input during API calls
- Send button with icon
- Gradient background for depth
- Professional shadow effects

### Performance
- **Response Speed**: 280 tokens/second
- **Context Window**: 131,072 tokens
- **Max Completion**: 32,768 tokens
- Optimized React rendering
- Efficient state management

---

## 🤖 Available AI Models

You can switch to different Groq models by changing the `model` parameter in `app/api/chat/route.ts`:

```typescript
model: "llama-3.3-70b-versatile"  // Default (280 T/s, $0.59/$0.79 per 1M)
```

**Other Options:**
- `llama-3.1-8b-instant` - Faster (560 T/s, $0.05/$0.08 per 1M)
- `openai/gpt-oss-120b` - More capable (500 T/s, $0.15/$0.60 per 1M)
- `openai/gpt-oss-20b` - Very fast (1000 T/s, $0.075/$0.30 per 1M)

See [Groq's model documentation](https://console.groq.com/docs/models) for the complete list.

---



## 📸 Screenshots

### Main Chat Interface
![Main Chat Interface]('images/screenshot.png')

---

## 🧑‍💻 Author

Made with 💙 by **Vishal Patel**

- 📧 Email: [patelvishal14642@gmail.com](mailto:patelvishal14642@gmail.com)
---

## 🙏 Acknowledgments

- **Groq** - For providing blazing-fast LLM inference
- **Meta AI** - For the Llama 3.3 70B language model
- **Anthropic Claude** - For frontend design assistance and UI/UX improvements
- **Vercel** - For Next.js framework and hosting platform
- **Tailwind CSS** - For utility-first styling system

---

## 💬 Feedback or Suggestions?

Feel free to open an [Issue](https://github.com/yourusername/veebot/issues) or reach out via email. I'm always open to ideas that make VeeChat better!


---

## 🔗 Useful Links

- [Groq Console](https://console.groq.com) - Get your API key
- [Groq Documentation](https://console.groq.com/docs) - API reference
- [Next.js Docs](https://nextjs.org/docs) - Framework documentation
- [Llama Model Info](https://ai.meta.com/llama/) - About the AI model
- [Tailwind CSS](https://tailwindcss.com) - Styling documentation

---

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub!

---

## 📊 Performance Metrics

| Metric | Value |
|--------|-------|
| Response Time | ~280 tokens/second |
| Model | Llama 3.3 70B Versatile |
| Context Window | 131,072 tokens |
| Max Output | 32,768 tokens |
| API Provider | Groq (LPU Inference) |
| Framework | Next.js 16 (React 19) |

---

**Happy Chatting with AI! 🤖💬**
