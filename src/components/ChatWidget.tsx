"use client";

import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/@n8n/chat@latest/dist/chat.bundle.es.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      (window as any).createChat({
        webhookUrl: 'https://n8n-x6a5.onrender.com/webhook/6d6887fe-bbdd-4559-9430-04942ed5f9df/chat',
        title: 'Supahz Assistant 👟',
        subtitle: 'Ask about sizing, orders, styles, care...',
        initialMessages: [
          {
            text: 'Hi! Welcome to Supahz Footwear. How can I help you today?',
            from: 'bot',
          },
        ],
        mode: 'window',
        primaryColor: '#000000',
        showWelcomeScreen: true,
      });
    };

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return null;
}
