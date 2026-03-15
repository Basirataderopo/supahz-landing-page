"use client";

import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    document.head.appendChild(link);

    import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js').then((module) => {
      module.createChat({
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
    });

    return () => {
      if (link.parentNode) link.parentNode.removeChild(link);
    };
  }, []);

  return null;
}
