import React, { useState, useCallback, useRef, useEffect } from 'react';
import { generateAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import Spinner from './Spinner';

const AIPrompt: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const getGeminiHistoryFormat = useCallback(() => {
    return messages.map(msg => ({
      parts: [{ text: msg.text }],
      role: msg.sender === 'user' ? 'user' : 'model',
    }));
  }, [messages]);

  const handleSendMessage = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const newMessage: ChatMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = getGeminiHistoryFormat();
      const response = await generateAIResponse(newMessage.text, history);
      const aiResponseText = response.text;

      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: aiResponseText || 'No response from AI.' },
      ]);
    } catch (error) {
      console.error('Failed to get AI response:', error);
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: 'Oops! Something went wrong. Please try again.' },
      ]);
      // If API key is missing or invalid, prompt the user.
      if (error instanceof Error && error.message.includes('API_KEY')) {
         // This is a placeholder for `window.aistudio.openSelectKey()` logic if a real environment were used
         // For a simple web app, we just log the error or show it in the UI.
         console.error('API Key is missing or invalid. Please ensure it is configured.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [input, messages, getGeminiHistoryFormat]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <section id="ai-chat" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">
          Ask My Digital Assistant
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Have questions about my projects, skills, or experience? Ask my AI assistant!
        </p>

        <div className="bg-gray-800 rounded-lg shadow-xl p-6 h-[500px] flex flex-col">
          <div className="flex-grow overflow-y-auto space-y-4 mb-4 pr-2 custom-scrollbar">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 mt-10">
                Type a question to get started. For example: "What are your key skills?"
              </div>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] p-3 rounded-lg shadow-md ${
                    msg.sender === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-700 text-gray-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[75%] p-3 rounded-lg bg-gray-700">
                  <Spinner />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-grow p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading || !input.trim()}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIPrompt;