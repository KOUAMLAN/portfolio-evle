import React, { useState, useRef, useEffect } from 'react';
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
    { id: '1', role: 'assistant', text: "Bonjour ! Je suis l'assistant virtuel d'Evle. Posez-moi des questions !" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const replyText = await sendMessageToGemini(userMsg.text);
      const botMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', text: replyText };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error('Gemini error:', error);
      const errorMsg: Message = { id: (Date.now() + 2).toString(), role: 'assistant', text: "Erreur temporaire. Réessayez !" };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 🔥 BOUTON IA INVINCIBLE - Z-INDEX MAXIMUM */}
      <div className="fixed bottom-8 right-8 z-[2147483647] pointer-events-auto">
        <motion.button
          onClick={() => setIsOpen(true)}
          className="block w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl border-4 border-white hover:shadow-3xl hover:scale-110 active:scale-95 transition-all duration-200 md:w-auto md:h-auto md:px-4 md:py-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)'
          }}
        >
          <MessageSquare size={28} className="mx-auto" />
          <span className="hidden md:block ml-2 text-sm font-semibold whitespace-nowrap">
            IA Evle
          </span>
        </motion.button>
      </div>

      {/* 🔥 MODAL FULLSCREEN MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[2147483647] bg-black/70 backdrop-blur-sm flex flex-col md:flex-row items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="w-full max-w-lg max-h-[90vh] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Sparkles size={24} className="text-yellow-300" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Assistant IA</h2>
                    <p className="text-sm opacity-90">Evle Kouamlan</p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-2xl bg-white/20 hover:bg-white/40 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Messages */}
              <div className="flex-1 min-h-[250px] p-6 overflow-y-auto bg-gradient-to-b from-gray-50 to-white space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] p-4 rounded-2xl shadow-lg ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'bg-white border border-gray-200'
                    }`}>
                      <div className="flex items-center gap-2 mb-2 opacity-80 text-xs">
                        {msg.role === 'user' ? (
                          <User size={14} className="text-blue-200" />
                        ) : (
                          <Bot size={14} className="text-purple-500" />
                        )}
                        <span>{msg.role === 'user' ? 'Vous' : 'IA'}</span>
                      </div>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 p-4 rounded-2xl shadow-lg">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0s'}} />
                        <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                        <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSend} className="p-6 bg-white border-t border-gray-100">
                <div className="flex gap-3">
                  <input
                    ref={(input) => input && input.focus()}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Posez votre question à l'IA..."
                    className="flex-1 px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all text-sm placeholder-gray-500"
                    disabled={isLoading}
                  />
                  <motion.button
                    type="submit"
                    disabled={!inputValue.trim() || isLoading}
                    className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send size={20} />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;