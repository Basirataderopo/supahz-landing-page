'use client';

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const quickActions = ["Ask about sizing", "Track my order", "Product care"];

const sessionId = `session_${Date.now()}`;

const ChatAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; from: "user" | "bot" }[]>([
    { text: "Welcome to Supahz. How can I assist you today?", from: "bot" },
  ]);
  const [input, setInput] = useState("");

  const send = async (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { text, from: "user" }]);
    setInput("");

    try {
      const res = await fetch(
        "https://havanna.app.n8n.cloud/webhook/6d6887fe-7bbd-4559-9430-49f42ed5f9df/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "sendMessage",
            sessionId: sessionId,
            chat
