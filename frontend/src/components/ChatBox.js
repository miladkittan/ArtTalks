import React, { useState, useEffect } from 'react';
import { sendMessage, listenForMessages, disconnectSocket } from '../services/socket';

const ChatBox = ({ pictureId }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    listenForMessages((newMessage) => {
      if (newMessage.pictureId === pictureId) {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    });

    return () => {
      disconnectSocket();
    };
  }, [pictureId]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage({ text: message, pictureId });
      setMessage('');
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleMessageSubmit} className="chat-input-form">
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type a message..."
          className="chat-input"
        />
        <button type="submit" className="chat-send-button">Send</button>
      </form>
    </div>
  );
};

export default ChatBox;
