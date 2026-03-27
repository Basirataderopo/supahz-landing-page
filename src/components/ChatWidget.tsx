const send = async (text: string) => {
  if (!text.trim()) return;

  setMessages((prev) => [...prev, { text, from: "user" }]);
  setInput("");

  // Generate or reuse a persistent session ID (stored in localStorage)
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
          message: text,        // Keep "message" for now (matches your current AI Agent prompt)
          sessionId: sessionId, // ← This fixes the "No session ID found" error
        }),
      }
    );

    if (!res.ok) throw new Error("Network error");

    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      { 
        text: data.output || data.message || data.text || "Got your message!", 
        from: "bot" 
      },
    ]);
  } catch (err) {
    console.error("Chat error:", err);
    setMessages((prev) => [
      ...prev,
      { text: "Sorry, something went wrong. Please try again.", from: "bot" },
    ]);
  }
};
