import useChat from "./hooks/useChat";
import ChatList from "./components/ChatList";
import ChatInput from "./components/ChatInput";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

function App() {
  const { messages, isLoading, error, sendMessage } = useChat();

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-[#021024] via-[#051c35] to-[#082846] text-white font-sans overflow-hidden selection:bg-blue-500 selection:text-white">
      <div className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-3 opacity-90">
        <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-900/50">
          <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />
        </div>
        <span className="font-semibold tracking-wide text-gray-200">
          AI Chat
        </span>
      </div>

      <main className="flex-1 flex flex-col relative max-w-5xl w-full mx-auto p-4 md:p-8">
        {messages.length === 0 ? (
          <div className="flex-1 flex flex-col justify-center items-start pl-4 md:pl-12 pb-20 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-200 mb-2">
              Hi there!
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              What would you
              <br /> like to know?
            </h1>
            <p className="text-gray-400 text-lg max-w-lg leading-relaxed border-l-2 border-blue-500/50 pl-4">
              Use one of the most common prompts below or ask your own question
              to get started.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-hidden flex flex-col pt-20 pb-4">
            <ChatList messages={messages} />
          </div>
        )}

        {error && (
          <div className="absolute top-20 right-8 bg-red-500/10 border border-red-500/50 text-red-200 px-4 py-2 rounded-lg backdrop-blur-md">
            {error}
          </div>
        )}

        <div className="mb-4 md:mb-8">
          <ChatInput onSend={sendMessage} disabled={isLoading} />
        </div>
      </main>
    </div>
  );
}

export default App;
