# 🎙️ AI Voice Assistant

Современный чат-интерфейс с поддержкой голосового управления и интеграцией OpenAI.  
Проект демонстрирует **Fullstack-подход**: от настройки Express-сервера до реализации **Pixel Perfect** верстки на React.

## 🚀 Демо
👉 **[Открыть демо (Vercel)](https://testcase-ai-chat.vercel.app)**

> ⚠️ **Важно:**  
> Бэкенд развернут на бесплатном тарифе **Render**.  
> При первом запросе ожидание может составить **30–50 секунд** (время на «холодный старт» сервера).  
> Последующие ответы будут мгновенными.

---

## 📸 Интерфейс
<img width="2070" height="1248" alt="{E8CFD57A-4B58-478A-BB57-576F986045A1}" src="https://github.com/user-attachments/assets/070c521f-0add-4ac9-82fd-27dfd8a52013" />
---

## ✨ Ключевые особенности

- 🤖 **Smart Intelligence**  
  Интеграция с **OpenAI API (GPT-4o-mini)** для ведения естественного диалога.

- 🎙️ **Voice-to-Text**  
  Полноценный голосовой ввод через **Web Speech API**.  
  Реализован через Web Speech API — нативная поддержка в браузере (без внешних SDK).

- 🎨 **Pixel Perfect UI**  
  Дизайн реализован в точном соответствии с референсом.  
  Адаптивная верстка, **Dark Mode**, кастомные анимации и эффекты `backdrop-blur`.

- ⚡ **Optimistic UI (моментальный отклик интерфейса при отправке сообщений)**  
  Мгновенный отклик интерфейса при отправке сообщений.

- 🛡️ **Error Handling**  
  Централизованная обработка сетевых и API-ошибок через **Axios Interceptors**.

---

## 🛠 Технологический стек

### Frontend
- **Core:** React 18, TypeScript, Vite  
- **Styling:** Tailwind CSS  
- **Icons:** Heroicons  
- **State:** Custom React Hooks  

### Backend
- **Core:** Node.js, Express  
- **Integrations:** OpenAI SDK  
- **Tools:** Dotenv, Cors  

---

## 💻 Установка и запуск локально

### 1️⃣ Клонирование репозитория
```bash
git clone https://github.com/doomsdayoff/ai-chat-assistant.git
cd ai-chat-assistant
```
### 2️⃣ Настройка бэкенда
```bash
cd server
npm install
```
### 3️⃣ Настройка фронтенда (в новом терминале)
```bash
cd client
npm install
```
### Создайте файл .env:
```bash
VITE_API_URL=http://localhost:3000/api
```
### Запуск фронтенда:
```bash
npm run dev
```

