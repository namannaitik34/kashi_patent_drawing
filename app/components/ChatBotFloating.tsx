"use client";
import { useEffect, useState } from "react";
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

const ChatBotFloating = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" }
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setChat([...chat, { sender: "user", text: input }]);
    setLoading(true);
    setInput("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      if (data.reply) {
        setChat((prev) => [...prev, { sender: "bot", text: data.reply }]);
      } else if (data.error) {
        setChat((prev) => [...prev, { sender: "bot", text: data.error }]);
      } else {
        setChat((prev) => [...prev, { sender: "bot", text: "Sorry, I couldn't respond. Please try again." }]);
      }
    } catch {
      setChat((prev) => [...prev, { sender: "bot", text: "Sorry, I couldn't respond. Please try again." }]);
    }
    setLoading(false);
  };

  return (
  <div className="fixed bottom-24 right-8 z-[9999] flex flex-col items-end" style={{marginBottom: '10px'}}>
      <button
        className="bg-white rounded-full shadow-2xl hover:bg-gray-100 transition flex items-center justify-center w-16 h-16"
        aria-label="Open ChatBot"
        onClick={() => { console.log('ChatBot button clicked'); setOpen(true); }}
        style={{ display: open ? 'none' : 'flex' }}
      >
        <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-600" />
      </button>
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl p-4 w-80 flex flex-col items-end animate-fade-in">
          <button className="mb-2 text-gray-400 hover:text-black self-end" onClick={() => setOpen(false)}>
            <XMarkIcon className="h-6 w-6" />
          </button>
          <div className="mb-2 w-full flex flex-col gap-2 max-h-64 overflow-y-auto">
            {chat.map((msg, idx) => (
              <div key={idx} className={msg.sender === "bot" ? "text-blue-600 bg-blue-50 p-2 rounded-lg self-start" : "text-black bg-gray-100 p-2 rounded-lg self-end"}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="text-blue-600 bg-blue-50 p-2 rounded-lg self-start">...</div>}
          </div>
          <div className="flex w-full gap-2 mt-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              onKeyDown={e => { if (e.key === 'Enter') sendMessage(); }}
              disabled={loading}
              style={{ minWidth: 0 }}
            />
            <button
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition whitespace-nowrap"
              onClick={sendMessage}
              disabled={loading}
              style={{ maxWidth: '80px', overflow: 'hidden', textOverflow: 'ellipsis' }}
            >Send</button>
          </div>
        </div>
      )}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ChatBotFloating;
