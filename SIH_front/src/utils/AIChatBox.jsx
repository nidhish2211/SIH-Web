import React, { useState, useRef, useEffect } from "react";

const AIChatBox = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { sender: "user", text: input },
      { sender: "ai", text: "(AI response placeholder)" },
    ]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000,
          background: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)",
          color: "white",
          borderRadius: "50%",
          width: 60,
          height: 60,
          boxShadow: "0 4px 16px rgba(14,165,233,0.18)",
          border: "none",
          fontSize: 28,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "box-shadow 0.2s",
        }}
        aria-label="Open AI Chat"
      >
        <span style={{ fontSize: 28 }}>💬</span>
      </button>
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 24,
            width: 340,
            maxHeight: 440,
            background: "linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)",
            borderRadius: 16,
            boxShadow: "0 8px 32px rgba(14,165,233,0.18)",
            zIndex: 1001,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid #bae6fd",
          }}
        >
          <div
            style={{
              padding: "16px",
              borderBottom: "1px solid #bae6fd",
              background: "linear-gradient(90deg, #38bdf8 0%, #0ea5e9 100%)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <strong style={{ fontSize: 17 }}>AI Chat Assistant</strong>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: 20,
                cursor: "pointer",
              }}
            >
              &#10005;
            </button>
          </div>
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px 12px 8px 12px",
              background: "#f8fafc",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  marginBottom: 10,
                  textAlign: msg.sender === "user" ? "right" : "left",
                  display: "flex",
                  justifyContent:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    background:
                      msg.sender === "user"
                        ? "linear-gradient(90deg,#bae6fd 0%,#38bdf8 100%)"
                        : "linear-gradient(90deg,#e0e7ff 0%,#f0f9ff 100%)",
                    color: "#334155",
                    borderRadius: 10,
                    padding: "8px 14px",
                    maxWidth: "80%",
                    fontSize: 15,
                    boxShadow:
                      msg.sender === "user"
                        ? "0 2px 8px #bae6fd55"
                        : "0 2px 8px #e0e7ff55",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form
            onSubmit={handleSend}
            style={{
              display: "flex",
              borderTop: "1px solid #bae6fd",
              padding: "10px 12px",
              background: "#f0f9ff",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              style={{
                flex: 1,
                border: "1px solid #bae6fd",
                borderRadius: 8,
                padding: "8px 12px",
                fontSize: 16,
                outline: "none",
                background: "#fff",
                marginRight: 8,
                boxShadow: "0 1px 4px #bae6fd22",
              }}
            />
            <button
              type="submit"
              style={{
                background: "linear-gradient(90deg,#38bdf8 0%,#0ea5e9 100%)",
                color: "white",
                border: "none",
                borderRadius: 8,
                padding: "8px 18px",
                fontWeight: "bold",
                fontSize: 16,
                cursor: "pointer",
                boxShadow: "0 2px 8px #38bdf855",
                transition: "background 0.2s",
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AIChatBox;
