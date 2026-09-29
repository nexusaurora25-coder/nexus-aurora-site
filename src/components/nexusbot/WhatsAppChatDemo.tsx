import React, { useEffect, useState } from 'react';
import {
  BadgeCheck,
  BatteryFull,
  Check,
  CheckCheck,
  ChevronLeft,
  Mic,
  MoreVertical,
  Phone,
  Signal,
  Smile,
  Wifi,
} from 'lucide-react';
import NexusBotLogo from './NexusBotLogo';
import { nexusBotChatSequence, type ChatMessage } from './constants';

type Message = Extract<ChatMessage, { type: 'in' | 'out' }>;

// Full demo: the whole exchange. Compact: just the first question and reply (Home promo).
const COMPACT_STEPS = 3;

const messagesOf = (sequence: ChatMessage[]) =>
  sequence.filter((item): item is Message => item.type !== 'typing');

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/*
 * Seen from the customer's phone: the customer's messages ('in', inbound to the bot) sit on the
 * right with delivery ticks, NexusBot's replies ('out') sit on the left.
 */
const WhatsAppChatDemo: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const sequence = compact ? nexusBotChatSequence.slice(0, COMPACT_STEPS) : nexusBotChatSequence;
  const finalMessages = messagesOf(sequence);
  const lastTime = finalMessages[finalMessages.length - 1].time;

  // Both the prerendered HTML and the first client render start empty; motion preference is read in the effect.
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setMessages(finalMessages);
      return;
    }

    let cancelled = false;
    let step = 0;
    let timer: ReturnType<typeof setTimeout>;

    // Reset on every effect run (not just first mount) so React 18 StrictMode's
    // dev-only double-invoke of effects can't leave duplicate messages behind.
    setMessages([]);
    setIsTyping(false);

    const runStep = () => {
      if (cancelled) return;

      if (step >= sequence.length) {
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

      const item = sequence[step];
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

  const handoff = messages.length === finalMessages.length;

  return (
    <div className="relative mx-auto lg:mr-0 lg:ml-auto w-full max-w-[380px]">
      <div
        role="group"
        aria-label="Example WhatsApp conversation with NexusBot"
        className="rounded-[44px] p-2.5 bg-gradient-to-b from-white/25 to-white/5 ring-1 ring-white/20 shadow-brand-lg"
      >
        <div className="rounded-[34px] overflow-hidden bg-white">
          {/* Status bar */}
          <div
            className="relative flex items-center justify-between px-6 pt-3 pb-1 font-mono text-[11px] text-ink"
            aria-hidden="true"
          >
            <span>11:42 PM</span>
            <span className="absolute left-1/2 top-2 h-4 w-20 -translate-x-1/2 rounded-full bg-ink" />
            <span className="flex items-center gap-1.5">
              <Signal className="h-3 w-3" />
              <Wifi className="h-3 w-3" />
              <BatteryFull className="h-3.5 w-3.5" />
            </span>
          </div>

          {/* Chat header */}
          <div className="flex items-center gap-1 pl-2 pr-4 py-1 border-b border-gray-100">
            <ChevronLeft className="h-5 w-5 text-primary-600 shrink-0" aria-hidden="true" />
            <NexusBotLogo size={72} interactive />
            <div className="min-w-0 ml-1">
              <div className="flex items-center gap-1 font-semibold text-ink text-[15px]">
                NexusBot
                <BadgeCheck className="h-4 w-4 text-primary-500" aria-label="Verified" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-success" aria-live="off">
                {!isTyping && <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />}
                {isTyping ? 'typing…' : 'online'}
              </div>
            </div>
            <div className="ml-auto flex items-center gap-3 text-gray-400" aria-hidden="true">
              <Phone className="h-4 w-4" />
              <MoreVertical className="h-4 w-4" />
            </div>
          </div>

          {/* Conversation */}
          <div
            className={`relative ${compact ? 'h-[290px]' : 'h-[400px]'} overflow-hidden bg-[#EAF0F9]`}
            style={{
              backgroundImage: 'radial-gradient(rgba(30,99,224,0.09) 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#EAF0F9] to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end gap-2 px-3 pb-3">
              <span className="mx-auto mb-1 shrink-0 rounded-md bg-white/85 px-2 py-1 font-mono text-[10px] tracking-wider text-gray-500 shadow-sm">
                TODAY
              </span>
              {messages.map((msg, i) => {
                const fromCustomer = msg.type === 'in';
                return (
                  <div
                    key={i}
                    className={`flex ${fromCustomer ? 'justify-end' : 'justify-start'} msg-in animate-msg-in`}
                  >
                    <div
                      className={`max-w-[82%] rounded-2xl px-3 pt-2 pb-1.5 text-sm leading-snug shadow-sm ${
                        fromCustomer
                          ? 'bg-primary-600 text-white rounded-tr-md'
                          : 'bg-white text-ink rounded-tl-md'
                      }`}
                    >
                      {msg.text}
                      <div
                        className={`mt-0.5 flex items-center justify-end gap-1 font-mono text-[10px] ${
                          fromCustomer ? 'text-white/70' : 'text-gray-400'
                        }`}
                      >
                        {msg.time}
                        {fromCustomer && (
                          <CheckCheck
                            className="tick-read animate-tick-read h-3.5 w-3.5 text-white/60"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              {isTyping && (
                <div className="flex justify-start msg-in animate-msg-in">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-md bg-white px-4 py-3 shadow-sm">
                    <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input bar (decorative) */}
          <div className="flex items-center gap-2 px-3 py-2.5 bg-white border-t border-gray-100" aria-hidden="true">
            <Smile className="h-5 w-5 text-gray-400" />
            <div className="flex-1 rounded-full bg-gray-100 px-3.5 py-2 text-sm text-gray-400">Message</div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 text-white">
              <Mic className="h-4 w-4" />
            </span>
          </div>
          <div className="pb-2 pt-0.5" aria-hidden="true">
            <div className="mx-auto h-1 w-28 rounded-full bg-ink/20" />
          </div>
        </div>
      </div>

      {/* Hand-off chip (full demo only: the compact demo ends before a lead is passed on) */}
      {!compact && (
        <div
          className={`mt-3 flex justify-center xl:mt-0 xl:w-max xl:absolute xl:right-full xl:mr-4 xl:bottom-32 transition-all duration-500 ${
            handoff ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          aria-hidden={!handoff}
        >
          <div className="flex items-center gap-2.5 rounded-xl bg-white px-3 py-2 text-ink shadow-brand-lg">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-success text-white">
              <Check className="h-3.5 w-3.5" />
            </span>
            <span>
              <span className="block text-xs font-semibold">Lead passed to your team</span>
              <span className="block font-mono text-[10px] text-gray-500">{lastTime} · via NexusBot</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChatDemo;
