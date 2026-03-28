'use client';

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const quickActions = ["Ask about sizing", "Track my order", "Product care"];
const sessionId = "supahz-chat-session";

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
          body: JSON.stringify({ action: "sendMessage", sessionId, chatInput: text }),
        }
      );
      const data = await res.json();
      setMessages((prev) => [...prev, { text: data.output || data.message || "Got your message!", from: "bot" }]);
    } catch {
      setMessages((prev) => [...prev, { text: "Sorry, something went wrong.", from: "bot" }]);
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-80 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            style={{ height: "460px" }}
          >
            <div className="bg-red-700 text-white px-4 py-3 flex justify-between items-center">
              <span className="font-semibold">Supahz Assistant</span>
              <button onClick={() => setOpen(false)}><X size={18} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`px-3 py-2 rounded-xl text-sm max-w-[75%] ${m.from === "user" ? "bg-red-700 text-white" : "bg-gray-100 text-gray-800"}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-2 flex gap-1 flex-wrap border-t">
              {quickActions.map((a) => (
                <button key={a} onClick={() => send(a)} className="text-xs bg-gray-100 rounded-full px-2 py-1 hover:bg-gray-200">
                  {a}
                </button>
              ))}
            </div>
            <div className="p-2 flex gap-2 border-t">
              <input
                className="flex-1 border rounded-full px-3 py-1 text-sm outline-none"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
              />
              <button onClick={() => send(input)} className="bg-red-700 text-white rounded-full p-2">
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 bg-red-700 text-white rounded-full p-3 shadow-lg z-50"
      >
        <MessageCircle size={24} />
      </button>
    </>
  );
};

export default ChatAssistant;
