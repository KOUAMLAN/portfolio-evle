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
    { id: '1', role: 'assistant', text: "Bonjour ! Je suis l'assistant virtuel d'Evle. Posez-moi des questions sur ses compétences ou projets !" }
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
      role: 'user' as const, 
      text: inputValue 
    };
    
    setMessages(prev => [...prev, userMsg]);
    const tempInput = inputValue;
    setInputValue('');
    setIsLoading(true);

    try {
      const replyText = await sendMessageToGemini(tempInput);
      const botMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'assistant' as const, 
        text: replyText 
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error('Gemini error:', error);
      const errorMsg: Message = { 
        id: (Date.now() + 2).toString(), 
        role: 'assistant' as const, 
        text: "Désolé, une erreur temporaire est survenue. Réessayez !" 
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
      // Focus auto sur input après envoi
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* 🔥 BOUTON IA BULLETOOF - Z-INDEX MAX */}
      {!isOpen && (
        <motion.div 
          className="fixed bottom-6 right-6 z-[2147483647] pointer-events-auto"
          initial={{ scale: 0, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <motion.button
            onClick={toggleChat}
            className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 text-white rounded-full shadow-2xl border-4 border-white/80 hover:shadow-3xl active:scale-95 transition-all duration-200 flex items-center justify-center group"
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Ouvrir le chatbot IA"
          >
            <MessageSquare size={24} className="group-hover:rotate-12 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      )}

      {/* 🔥 MODAL RESPONSIVE - PAGE VISIBLE EN ARRIÈRE-PLAN */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay semi-transparent - page visible derrière */}
            <motion.div
              className="fixed inset-0 z-[2147483646] bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            
            {/* Modal centrée responsive */}
            <motion.div
              className="fixed z-[2147483647] left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:w-96 bottom-20 max-h-[calc(100vh-5rem)] md:max-h-[500px]"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden w-full h-full flex flex-col max-w-md mx-auto">
                
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-5 flex justify-between items-center text-white">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Sparkles size={24} className="text-yellow-300" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-xl font-bold truncate">Assistant IA Evle</h2>
                      <p className="text-xs opacity-90">Chatbot intelligent</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-2xl bg-white/20 hover:bg-white/40 active:scale-95 transition-all flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Fermer"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                {/* Messages scrollables */}
                <div className="flex-1 min-h-[200px] p-5 overflow-y-auto bg-gradient-to-b from-slate-50/80 to-white space-y-4">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[85%] p-4 rounded-2xl shadow-md break-words ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-none'
                          : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm rounded-bl-none'
                      }`}>
                        <div className="flex items-center gap-2 mb-2 opacity-80 text-xs">
                          {msg.role === 'user' ? (
                            <User size={14} className="text-blue-200 flex-shrink-0" />
                          ) : (
                            <Bot size={14} className="text-purple-500 flex-shrink-0" />
                          )}
                          <span className="font-medium capitalize">{msg.role === 'user' ? 'Vous' : 'IA'}</span>
                        </div>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Loading dots */}
                  {isLoading && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white/80 border border-gray-200/50 p-4 rounded-2xl shadow-md backdrop-blur-sm">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full animate-bounce [animation-delay:0s]" />
                          <div className="w-2.5 h-2.5 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full animate-bounce [animation-delay:0.15s]" />
                          <div className="w-2.5 h-2.5 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full animate-bounce [animation-delay:0.3s]" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSend} className="p-5 bg-white/80 backdrop-blur-sm border-t border-gray-200/50">
                  <div className="flex gap-3">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Posez votre question à l'IA..."
                      className="flex-1 px-5 py-3.5 bg-slate-50/80 border-2 border-slate-200/50 rounded-2xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm placeholder-slate-500 resize-none backdrop-blur-sm"
                      disabled={isLoading}
                      autoComplete="off"
                      maxLength={500}
                    />
                    <motion.button
                      type="submit"
                      disabled={!inputValue.trim() || isLoading}
                      className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 flex items-center justify-center transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Envoyer"
                    >
                      <Send size={20} />
                    </motion.button>
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