import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      if (!formRef.current) throw new Error('Formulaire introuvable');

      const result = await emailjs.sendForm(
       'service_ja1mp7c', // ex: 'service_abc123'
       'template_jzamebp', // ex: 'template_def456'
        formRef.current,
        'MK-zSZzOHbNao2YJj'
      );

      console.log('EmailJS OK:', result.status);
      setStatus('Nous vous répondrons rapidement.');
      formRef.current.reset();
      navigate('/merci');
    } catch (err) {
      console.error('EmailJS ERROR:', err);
      setStatus("Message transmis ! (Vérifiez votre EmailJS dashboard)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-heading font-bold mb-8">Me contacter</h2>

        <p className="text-slate-300 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
          Je suis actuellement à l&apos;écoute de nouvelles opportunités. Que vous ayez une question technique, une proposition de mission ou simplement envie d&apos;échanger, n&apos;hésitez pas !
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 text-left">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Nom
            </label>
            <input
              id="name"
              name="user_name"
              type="text"
              className="w-full rounded-lg px-4 py-3 text-slate-900"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="user_email"
              type="email"
              className="w-full rounded-lg px-4 py-3 text-slate-900"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-lg px-4 py-3 text-slate-900"
              required
            />
          </div>

          {status && (
            <p className="text-sm p-2 rounded text-green-400 bg-green-900/20">
              {status}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="inline-block w-full px-8 py-4 text-lg font-bold text-white bg-primary rounded-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-primary/50 disabled:opacity-60"
          >
            {loading ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;