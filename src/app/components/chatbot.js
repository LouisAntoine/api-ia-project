'use client';

import React, { useEffect, useState } from 'react';
import './chatbot.css';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isChatbotOpen, setChatbotOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(!isChatbotOpen);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    setMessages([...messages, { text: input, user: 'user' }]);

    setInput('');

    callChatbot();
  };

  const callChatbot = async () => {
    const history = [...messages, { text: input, user: 'user' }];

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: history }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const dataContent = data.content;

      setIsLoading(false);
      setMessages([...messages, { text: input, user: 'user' }, { text: dataContent, user: 'chatbot' }]);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={`chatbot-container ${isChatbotOpen ? 'open' : 'closed'}`}>
      <div className="chatbot-header" onClick={toggleChatbot}>
        Chatbot
      </div>
      {isChatbotOpen && (
        <div className="chatbot-content">
          <div className="message message-chatbot">Bienvenue ! Posez-moi une question.</div>
          {messages.map((message, index) => (
          <div key={index} className={`message message-${message.user}`}>
            {/* <pre>{message.text}</pre> */}
            {message.text}
          </div>
        ))}
          <form className="chatbot-input-form">
            <input className="chatbot-input" type="text" value={input} onChange={handleInput} placeholder="Ecris ton message..." />
            <button className="chatbot-button" onClick={handleSubmit} type="submit">Envoyer</button>
          </form>
        </div>

        )}
      </div>
  );
};

export default Chatbot;
