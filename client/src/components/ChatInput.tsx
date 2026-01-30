import React, { useState, useEffect, type KeyboardEvent } from "react";
import { PaperAirplaneIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import { useSpeechRecognition } from "../hooks/useSpeechRecognition";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, disabled }) => {
  const [text, setText] = useState("");
  const {
    text: voiceText,
    isListening,
    startListening,
    isSupported,
  } = useSpeechRecognition();

  useEffect(() => {
    if (voiceText) {
      setText((prev) => (prev ? prev + " " : "") + voiceText);
    }
  }, [voiceText]);

  const handleSendClick = () => {
    if (text.trim() && !disabled) {
      onSend(text);
      setText("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendClick();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative flex items-center bg-[#1e293b]/60 border border-gray-700 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg ring-1 ring-white/10 focus-within:ring-blue-500/50 transition-all">
        {isSupported && (
          <button
            className={`p-2 mr-2 rounded-full transition-colors ${
              isListening
                ? "text-red-500 animate-pulse"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={startListening}
            disabled={disabled || isListening}
            title="Голосовой ввод"
          >
            <MicrophoneIcon className="h-6 w-6" />
          </button>
        )}

        <input
          type="text"
          className="flex-1 bg-transparent text-white placeholder-gray-400 text-lg focus:outline-none"
          placeholder={isListening ? "Слушаю..." : "Ask whatever you want"}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled || isListening}
        />
        <button
          onClick={handleSendClick}
          disabled={!text.trim() || disabled}
          className={`ml-2 p-3 rounded-xl transition-all ${
            text.trim() && !disabled
              ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg"
              : "bg-gray-700/50 text-gray-500 cursor-not-allowed"
          }`}
        >
          <PaperAirplaneIcon className="h-5 w-5 -rotate-45" />{" "}
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
