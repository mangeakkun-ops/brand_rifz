
import React, { useState, useRef, useEffect } from 'react';
import { ICONS } from '../constants';
import { ChatMessage } from '../types';
import { getChatResponse } from '../services/gemini';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to RIFZ. I am your personal fashion consultant. How can I assist you today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getChatResponse([...messages, userMsg]);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-zinc-900 border border-white/10 rounded-2xl w-[90vw] md:w-96 flex flex-col shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-black p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-black font-black text-xs">RIFZ</span>
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-tight">AI Assistant</h4>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
              <ICONS.X />
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="h-80 overflow-y-auto p-4 space-y-4 scroll-smooth"
          >
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-white text-black font-medium' 
                      : 'bg-zinc-800 text-zinc-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 px-4 py-2.5 rounded-2xl flex gap-1 items-center">
                  <span className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce" />
                  <span className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce delay-75" />
                  <span className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce delay-150" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-black/50 border-t border-white/10 flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about style, sizes, or shipping..."
              className="flex-1 bg-zinc-800 border-none rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-white outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-zinc-200 disabled:opacity-50 transition-colors"
            >
              <ICONS.Send />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-white text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          <ICONS.MessageCircle />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
