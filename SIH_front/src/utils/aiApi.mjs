// Utility to call your AI backend
import fetch from "node-fetch";

export async function fetchAIResponse(messages) {
  // messages: [{ sender: "user"|"ai", text: "..." }]
  // Replace with your actual backend endpoint and payload
  const res = await fetch("http://localhost:5000/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });
  if (!res.ok) throw new Error("AI backend error");
  const data = await res.json();
  return data.response; // expects { response: "..." }
}

// Test invocation
fetchAIResponse([{ sender: "user", text: "Hello AI!" }])
  .then((response) => console.log("AI Response:", response))
  .catch((err) => console.error("Error:", err));
