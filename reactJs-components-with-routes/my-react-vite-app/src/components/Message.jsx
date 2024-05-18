import React, { useState } from 'react';

function Message() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="container mx-auto max-w-lg p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold text-gray-800">Messenger</h1>
      </div>
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className="bg-white p-2 mb-2 rounded-lg shadow text-gray-800">
            {message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-l-lg border border-gray-300"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
          Send
        </button>
      </form>
    </div>
  );
}

export default Message;
