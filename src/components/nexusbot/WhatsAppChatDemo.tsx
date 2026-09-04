import React, { useEffect, useRef, useState } from 'react';
import { Bot } from 'lucide-react';
import { nexusBotChatSequence, type ChatMessage } from './constants';

const finalMessages = nexusBotChatSequence.filter(
  (item): item is Extract<ChatMessage, { type: 'in' | 'out' }> => item.type !== 'typing'
);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const WhatsAppChatDemo: React.FC = () => {
  const reduced = useRef(prefersReducedMotion());
  const [messages, setMessages] = useState<Extract<ChatMessage, { type: 'in' | 'out' }>[]>(
    reduced.current ? finalMessages : []
  );
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (reduced.current) return;

    let cancelled = false;
    let step = 0;
    let timer: ReturnType<typeof setTimeout>;

    // Reset on every effect run (not just first mount) so React 18 StrictMode's
    // dev-only double-invoke of effects can't leave duplicate messages behind.
    setMessages([]);
    setIsTyping(false);

    const runStep = () => {
      if (cancelled) return;

      if (step >= nexusBotChatSequence.length) {
        // Loop the demo after a pause, only while the tab is visible.
        timer = setTimeout(() => {
          if (cancelled) return;
          setMessages([]);
          setIsTyping(false);
          step = 0;
          runStep();
        }, 4000);
        return;
      }

      const item = nexusBotChatSequence[step];
      step += 1;

      if (item.type === 'typing') {
        setIsTyping(true);
        timer = setTimeout(runStep, 1100);
        return;
      }

      setIsTyping(false);
      setMessages((prev) => [...prev, item]);
      timer = setTimeout(runStep, item.type === 'in' ? 900 : 1400);
    };

    let hasStarted = false;
    const start = () => {
      if (!hasStarted && document.visibilityState === 'visible') {
        hasStarted = true;
        runStep();
      }
    };

    start();

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        start();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-3 min-h-[220px]">
      {messages.map((msg, i) => (
        <div key={i} className={`flex ${msg.type === 'out' ? 'justify-end' : 'justify-start'}`}>
          <div
            className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
              msg.type === 'out'
                ? 'bg-primary-600 text-white rounded-br-sm'
                : 'bg-gray-100 text-ink rounded-bl-sm'
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
      {isTyping && (
        <div className="flex justify-start">
          <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
            <Bot className="h-3.5 w-3.5 text-gray-400 mr-1" />
            <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce" />
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChatDemo;
