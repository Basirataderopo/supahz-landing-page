import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const quickActions = ["Ask about sizing", "Track my order", "Product care"];

const ChatAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; from: "user" | "bot" }[]>([
    { text: "Welcome to Supahz. How can I assist you today?", from: "bot" },
  ]);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [
      ...prev,
      { text, from: "user" },
      { text: "Thank you for your inquiry. Our team will get back to you shortly.", from: "bot" },
    ]);
    setInput("");
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-background border border-border flex flex-col"
            style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.12)", maxHeight: "28rem" }}
          >
            <div className="bg-primary text-primary-foreground px-5 py-4 flex items-center justify-between">
              <span className="text-sm font-bold uppercase tracking-wider">Concierge</span>
              <button onClick={() => setOpen(false)} aria-label="Close chat">
                <X size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3" style={{ minHeight: "12rem" }}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`text-sm px-3 py-2 max-w-[85%] ${
                    msg.from === "bot"
                      ? "bg-secondary text-foreground self-start"
                      : "bg-accent text-accent-foreground self-end"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="px-4 pb-3 flex flex-wrap gap-2">
              {quickActions.map((action) => (
                <button
                  key={action}
                  onClick={() => send(action)}
                  className="text-xs border border-border px-3 py-1.5 text-foreground/60 hover:text-foreground hover:border-primary transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>

            <div className="border-t border-border p-3 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Type a message..."
                className="flex-1 text-sm bg-transparent text-foreground placeholder:text-foreground/40 focus:outline-none"
              />
              <button onClick={() => send(input)} className="text-primary" aria-label="Send message">
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-6 z-50 w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg"
        aria-label="Open chat assistant"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </motion.button>
    </>
  );
};

export default ChatAssistant;
