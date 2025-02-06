import { useState } from 'react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const responses = {
    'hi': 'Hello! How can I assist you?',
    'services': 'We offer Web Development, AI Solutions, and Cloud Services.',
    'contact': 'Email us at contact@techsolutions.com',
    'default': 'I didn’t understand that. Try "services" or "contact".'
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputText, isBot: false }]);
    
    // Add bot response
    const botResponse = responses[inputText.toLowerCase()] || responses.default;
    setMessages(prev => [...prev, { text: botResponse, isBot: true }]);

    setInputText('');
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen && (
        <div className="bg-white w-80 h-96 shadow-lg rounded-t-lg flex flex-col">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="font-bold">Support Bot</h3>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, i) => (
              <div key={i} className={`my-2 ${msg.isBot ? 'text-left' : 'text-right'}`}>
                <span className={`inline-block p-2 rounded ${msg.isBot ? 'bg-gray-100' : 'bg-blue-600 text-white'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg"
      >
        {isOpen ? '×' : '💬'}
      </button>
    </div>
  );
}
