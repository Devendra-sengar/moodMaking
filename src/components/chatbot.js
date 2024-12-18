import React, { useState } from "react";

const Chatbot = () => {
  const [chat, setChat] = useState([
    { text: "Hi there! How are you feeling today? (angry, sad, happy)", type: "bot" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [step, setStep] = useState(0);
  const [userMood, setUserMood] = useState("");

  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Where do cucumbers go on date night? 🤔🤔 The salad bar 😅😅",
    "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats!",
  ];

  const calmingLines = [
    "Take a deep breath and let it out slowly. Everything will be okay.",
    "Sometimes stepping away from the situation can help you see it more clearly.",
    "Remember, you have control over how you respond to situations.",
  ];

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const addChatBubble = (text, type) => {
    setChat((prevChat) => [...prevChat, { text, type }]);
  };

  const handleUserResponse = () => {
    if (!userInput.trim()) return; // Ignore empty input

    // Add user response to chat
    addChatBubble(userInput, "user");

    if (step === 0) {
      if (["angry", "sad", "happy"].includes(userInput.toLowerCase())) {
        setUserMood(userInput.toLowerCase());
        if (userInput.toLowerCase() === "angry") {
          addChatBubble(
            `I see you're feeling angry. Let’s start with a joke: ${jokes[Math.floor(Math.random() * jokes.length)]}`,
            "bot"
          );
        } else if (userInput.toLowerCase() === "sad") {
          addChatBubble("I'm sorry you're feeling sad. It's okay to express your feelings. Would you like to share more?", "bot");
        } else if (userInput.toLowerCase() === "happy") {
          addChatBubble("That's fantastic! Keep smiling and spreading the joy. What’s making you feel happy today?", "bot");
        }
        setStep(1);
      } else {
        addChatBubble("Please choose from 'angry', 'sad', or 'happy'.", "bot");
      }
    } else if (step === 1) {
      if (userMood === "angry") {
        addChatBubble(
          `Thank you for sharing. Anger is a normal emotion, but how we handle it matters. ${calmingLines[Math.floor(Math.random() * calmingLines.length)]}`,
          "bot"
        );
      } else if (userMood === "sad") {
        addChatBubble("I hear you. Sometimes a walk, music, or talking to a friend can help. Want some uplifting quotes?", "bot");
      } else if (userMood === "happy") {
        addChatBubble("That’s wonderful! Keep spreading positivity and cherish the happy moments.", "bot");
      }
      setStep(2);
    } else if (step === 2) {
      if (userMood === "angry") {
        addChatBubble("Remember, stepping away and reflecting can help you manage anger better. I'm here for you anytime!", "bot");
      } else if (userMood === "sad") {
        addChatBubble("Every storm passes, and better days are ahead. Stay strong!", "bot");
      } else if (userMood === "happy") {
        addChatBubble("Keep shining and spreading joy! You’re amazing!", "bot");
      }
      addChatBubble("Would you like to restart? Type 'angry', 'sad', or 'happy'.", "bot");
      setStep(0); // Reset conversation
    }

    setUserInput(""); // Clear the input field
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleUserResponse();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 bg-gradient-to-r from-green-100 to-blue-100">
      <div className="w-[400px] h-[600px] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-green-600 text-white text-center py-4 text-lg font-semibold">Chatbot</div>
        {/* Chat Body */}
        <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-r from-green-100 to-blue-100 scrollbar-none">
          {chat.map((bubble, index) => (
            <div
              key={index}
              className={`max-w-[70%] my-2 px-4 py-2 rounded-lg text-sm ${
                bubble.type === "bot" ? "bg-green-100 self-start" : "bg-green-200 text-end ml-28 text-wrap "
              }`}
            >
              {bubble.text}
            </div>
          ))}
        </div>
        {/* Footer */}
        <div className="flex items-center gap-3 p-4 bg-gray-200">
          <input
            type="text"
            placeholder="Type a message..."
            value={userInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={handleUserResponse}
            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
