const send = async (text: string) => {
  if (!text.trim()) return;

  // Show user message immediately
  setMessages((prev) => [...prev, { text, from: "user" }]);
  setInput("");

  // Create or reuse persistent sessionId (this fixes the Simple Memory error)
  let sessionId = localStorage.getItem("supahz_chat_sessionId");
  if (!sessionId) {
    sessionId = "supahz_" + Date.now() + "_" + Math.random().toString(36).substring(2, 9);
    localStorage.setItem("supahz_chat_sessionId", sessionId);
  }

  try {
    const res = await fetch(
      "https://havanna.app.n8n.cloud/webhook/6d6887fe-7bbd-4559-9430-49f42ed5f9df/chat",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatInput: text,      // n8n Chat Trigger expects this field
          sessionId: sessionId, // Required by Simple Memory
        }),
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    const botReply = data.output || data.message || data.text || data.response || "Got your message!";

    setMessages((prev) => [...prev, { text: botReply, from: "bot" }]);
  } catch (err) {
    console.error("Chat error:", err);
    setMessages((prev) => [
      ...prev,
      { text: "Sorry, something went wrong. Please try again.", from: "bot" },
    ]);
  }
};
