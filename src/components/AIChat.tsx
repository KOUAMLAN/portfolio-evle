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
    { id: '1', role: 'assistant', text: "Bonjour ! Je suis l'assistant virtuel d'Evle. Posez-moi des questions sur ses compétences ou ses projets." }
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
    if (!inputValue.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const replyText = await sendMessageToGemini(userMsg.text);
      const botMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', text: replyText };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      const errorMsg: Message = {
        id: (Date.now() + 2).toString(),
        role: 'assistant',
        text: "Désolé, une erreur est survenue. Veuillez réessayer plus tard."
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* ✅ BOUTON FLOTTANT MOBILE-FIRST */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-[9999] bg-gradient-to-r from-primary to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 ${
          isOpen ? 'hidden' : 'block'
        } md:flex items-center justify-center w-16 h-16 md:w-auto md:p-4`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Ouvrir le chatbot IA"
      >
        <MessageSquare size={24} />
        {/* Texte seulement sur desktop */}
        <span className="hidden md:inline ml-2 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-medium text-sm">
          Discuter avec l'IA
        </span>
      </motion.button>

      {/* ✅ CHAT MODAL MOBILE-FIRST */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed inset-0 z-[9999] bg-black/50 flex items-end md:items-end justify-center p-4 md:p-6"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="w-full max-w-md max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
              onClick={e => e.stopPropagation()}
              initial={{ y: 100, scale: 0.9 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 100, scale: 0.9 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="chat-title"
            >
              {/* Header */}
              <div className="bg-primary p-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-2">
                  <Sparkles size={20} className="text-yellow-300" />
                  <h2 id="chat-title" className="font-bold font-heading text-lg">Assistant Portfolio</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-2 rounded-full transition-colors"
                  aria-label="Fermer le chatbot IA"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 min-h-[200px] max-h-[60vh] p-4 overflow-y-auto bg-gray-50 space-y-4">
                {messages.map(msg => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl text-sm break-words hyphens-auto ${
                        msg.role === 'user'
                          ? 'bg-primary text-white rounded-tr-none'
                          : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-tl-none'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1 opacity-70 text-xs">
                        {msg.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                        <span>{msg.role === 'user' ? 'Vous' : 'IA'}</span>
                      </div>
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.1s]"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.3s]"></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  placeholder="Posez une question..."
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm resize-none"
                  aria-label="Message"
                  disabled={isLoading}
                  autoComplete="off"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="p-3 bg-primary text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0 w-12 h-12"
                  aria-label="Envoyer le message"
                >
                  <Send size={20} />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;