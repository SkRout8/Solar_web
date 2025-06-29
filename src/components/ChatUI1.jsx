import React, { useEffect, useState } from "react";
import MessageBubble1 from "./MessageBubble1";
import solarChachaImg from "../Images/chacha.png";
import roshniDidiImg from "../Images/didi.png";
import HoverVideoCard from "./HoverVideoCard";

const conversationData = [
  { sender: "roshni", text: "Wo sab to theek hai Chacha, par DIVY se hi solar kyu lagwae? Or bhi to companies hai jo solar laga rahi hai." },
  { sender: "chacha", text: "Kyuki Beti, You Deserve a Brand that Cares." },
  { sender: "chacha", text: "DIVY Power MNRE-approved hai." },
  { sender: "chacha", text: "Yeh company 25+ saalon se Energy Business mein hai." },
  { sender: "chacha", text: "Aur sabse zaruri baat, yeh installation ke baad gaayab nahi ho jaate." },
  { sender: "chacha", text: "Yeh Government ke Net Zero Village Project jaise Kumheera mein bhi kaam kar rahe hain. Saath hi kai Sarkari initiatives ke partner bhi hain." },
  { sender: "roshni", text: "Abhi bhi bharosa karna mushkil hai chacha..." },
  { sender: "chacha", text: "Arrey beti, lo suno inke Customers kya kehte hai!" },
];

const ChatUI1 = () => {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentIndex < conversationData.length) {
      setIsTyping(true);
      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, conversationData[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 1800);
      return () => clearTimeout(typingTimeout);
    }
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-white p-6">
      {/* <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4 text-center">
        Problem + Solution
      </h2>
      <p className="text-gray-600 text-center max-w-xl mx-auto mb-8">
        Still Paying for Electricity? That’s Like Paying Rent for the Sun. <br />
        <strong>Let Solar Chacha & Roshni Didi explain why switch to solar</strong>
      </p> */}

      {/* Main layout with chat and reels side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto w-full">
        {/* Chat Section */}
        <div className="bg-gray-100 rounded-2xl wp p-4 space-y-2">
          {messages.map((msg, i) => (
            <MessageBubble1
              key={i}
              sender={msg.sender}
              text={msg.text}
              avatar={msg.sender === "chacha" ? solarChachaImg : roshniDidiImg}
            />
          ))}
          {isTyping && currentIndex < conversationData.length && (
            <MessageBubble1
              sender={conversationData[currentIndex].sender}
              typing={true}
              avatar={
                conversationData[currentIndex].sender === "chacha"
                  ? solarChachaImg
                  : roshniDidiImg
              }
            />
          )}
        </div>

        {/* Reel Section */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <HoverVideoCard />
        </div>
      </div>
    </div>
  );
};

export default ChatUI1;
