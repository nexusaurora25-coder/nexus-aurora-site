import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { CheckCircle, AlertTriangle, MessageCircle } from 'lucide-react';
import { useSEO } from '../utils/seo';
import { nexusBotWhatsAppLink } from '../components/nexusbot/constants';

const WACRM_LOGIN_URL = 'https://app.nexus-aurora.com/login';

// This page talks directly to wacrm-main's Supabase Auth (the app's own
// project, a different Supabase project from this website's own) using
// its PUBLIC anon key — safe to ship client-side by design, protected
// entirely by RLS on that project, same trust level as this site's own
// VITE_SUPABASE_ANON_KEY. No wacrm-main file is touched by this page;
// it only calls wacrm-main's standard Supabase Auth REST API, the same
// way wacrm-main's own frontend does.
//
// Reached via the invite link emailed by supabase/functions/
// stripe-webhook/index.ts after a NexusBot Stripe checkout completes.
// supabase-js's default detectSessionInUrl behavior parses the
// #access_token=...&type=invite fragment on the URL and establishes a
// session automatically — we just listen for it.
let wacrmClient: SupabaseClient | null = null;
function getWacrmClient(): SupabaseClient | null {
  const url = import.meta.env.VITE_WACRM_SUPABASE_URL;
  const anonKey = import.meta.env.VITE_WACRM_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;
  if (!wacrmClient) {
    wacrmClient = createClient(url, anonKey);
  }
  return wacrmClient;
}

type PageState = 'loading' | 'ready' | 'success' | 'invalid';

const NexusBotSetPassword: React.FC = () => {
  const [state, setState] = useState<PageState>('loading');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useSEO({
    title: 'Set Your Password | NexusBot',
    description: 'Set your password to log into your NexusBot account.',
    canonicalUrl: 'https://nexus-aurora.com/nexusbot/set-password',
    noindex: true,
  });

  useEffect(() => {
    const supabase = getWacrmClient();
    if (!supabase) {
      setState('invalid');
      return;
    }

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if ((event === 'PASSWORD_RECOVERY' || event === 'SIGNED_IN') && session) {
        setEmail(session.user.email ?? null);
        setState('ready');
      }
    });

    // In case the session was already established before this listener
    // attached (e.g. a fast redirect), also check directly.
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setEmail(data.session.user.email ?? null);
        setState('ready');
      } else {
        // Give detectSessionInUrl a moment to parse the URL fragment
        // before concluding the link is invalid/expired.
        setTimeout(() => {
          supabase.auth.getSession().then(({ data: retryData }) => {
            if (retryData.session) {
              setEmail(retryData.session.user.email ?? null);
              setState('ready');
            } else {
              setState((current) => (current === 'ready' ? current : 'invalid'));
            }
          });
        }, 1500);
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (password.length < 8) {
      setSubmitError('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setSubmitError('Passwords do not match.');
      return;
    }

    const supabase = getWacrmClient();
    if (!supabase) {
      setSubmitError('Something went wrong. Please try again later.');
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase.auth.updateUser({ password });
    setIsSubmitting(false);

    if (error) {
      setSubmitError(error.message);
      return;
    }
    setState('success');
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-paper px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-brand p-8 sm:p-10 text-center space-y-6">
        {state === 'loading' && (
          <p className="text-gray-600">Verifying your invite link…</p>
        )}

        {state === 'invalid' && (
          <>
            <div className="mx-auto h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle className="h-9 w-9 text-red-600" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-ink">This link has expired or was already used</h1>
              <p className="text-gray-600 leading-relaxed">
                Message us on WhatsApp and we'll send you a new one right away.
              </p>
            </div>
            <a
              href={nexusBotWhatsAppLink("Hi, my NexusBot set-password link isn't working. Can you send me a new one?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Message us on WhatsApp
            </a>
          </>
        )}

        {state === 'ready' && (
          <>
            <div className="space-y-2 text-left">
              <h1 className="text-2xl font-bold text-ink text-center">Set your password</h1>
              {email && (
                <p className="text-sm text-gray-500 text-center">for {email}</p>
              )}
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={8}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  minLength={8}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                />
              </div>
              {submitError && (
                <p className="text-sm text-red-600">{submitError}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Saving…' : 'Set password & continue'}
              </button>
            </form>
          </>
        )}

        {state === 'success' && (
          <>
            <div className="mx-auto h-16 w-16 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle className="h-9 w-9 text-success" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-ink">You're all set!</h1>
              <p className="text-gray-600 leading-relaxed">
                Your password has been saved. Log in to NexusBot to get started.
              </p>
            </div>
            <a
              href={WACRM_LOGIN_URL}
              className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
            >
              Log in to NexusBot
            </a>
          </>
        )}

        <div className="pt-2">
          <Link to="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NexusBotSetPassword;
