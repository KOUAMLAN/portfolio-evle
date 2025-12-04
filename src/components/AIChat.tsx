import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendMessageToGemini } from '../services/geminiService';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', text: "Posez-moi des questions sur mes compétences, projets ou expérience !" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, scrollToBottom]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMsg]);
    const temp = inputValue;
    setInputValue('');
    setIsLoading(true);

    try {
      const replyText = await sendMessageToGemini(temp);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: replyText
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (e) {
      const err: Message = {
        id: (Date.now() + 2).toString(),
        role: 'assistant',
        text: "Une erreur est survenue. Réessayez."
      };
      setMessages(prev => [...prev, err]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-[2147483647] w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Ouvrir le chatbot IA"
        >
          <MessageSquare size={24} />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[2147483646] bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed z-[2147483647] left-4 right-4 bottom-4 md:right-6 md:left-auto md:bottom-6 md:w-96"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
            >
              <div className="bg-white rounded-3xl shadow-3xl border border-gray-200 flex flex-col max-h-[80vh]">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-blue-600 text-white rounded-t-3xl">
                  <div className="flex items-center gap-2">
                    <Sparkles size={18} />
                    <span className="font-semibold text-sm">Assistant IA Evle</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Fermer"
                    className="p-1 rounded-full hover:bg-white/20"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Zone messages SCROLLABLE */}
                <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                  {messages.map(msg => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                          msg.role === 'user'
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                            : 'bg-white border border-gray-200 shadow-sm text-gray-900'
                        }`}
                      >
                        <div className="flex items-center gap-1 mb-1 text-[11px] opacity-70">
                          {msg.role === 'user' ? <User size={10} /> : <Bot size={10} />}
                          <span>{msg.role === 'user' ? 'Vous' : 'IA'}</span>
                        </div>
                        <p>{msg.text}</p>
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-gray-200 rounded-2xl px-3 py-2 shadow-sm flex gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input TOUJOURS visible */}
                <form
                  onSubmit={handleSend}
                  className="border-t border-gray-200 px-3 py-2 bg-white rounded-b-3xl"
                >
                  <div className="flex items-center gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={e => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Tapez votre question..."
                      className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={!inputValue.trim() || isLoading}
                      className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center disabled:opacity-50"
                      aria-label="Envoyer"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;