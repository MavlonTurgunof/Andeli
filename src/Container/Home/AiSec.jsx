import React, { useState, useRef } from "react";
import axios from "axios";
import Container from "../../Components/Container";

function AiSec() {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleAsk = async () => {
    if (!question.trim()) return;

    const userMessage = { role: "user", text: question };
    setChatHistory((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await axios.post(
        "https://staging.zingo.uz/api/Gemini/ask",
        {
          hashCode:
            "$2y$10$EylyeBAtyJCPoN8TMzmqvuwd.cs6LGYubIeZHfthjzA6XMQUttJHG",
          question: question,
        }
      );

      const aiMessage = {
        role: "ai",
        text: response.data?.content || "No answer received.",
      };
      setChatHistory((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      setChatHistory((prev) => [
        ...prev,
        { role: "ai", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
      setQuestion("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAsk();
    }
  };

  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [chatHistory, loading]);

  return (
    <Container>
      <div className="my-8 px-4 md:px-0">
        <div className="border-b-1 border-[#EDEDED]">
          <h1 className="text-[#666666] text-[18px] font-semibold md:text-[24px] md:font-bold max-md:border-b-2 max-md:border-[#008ECC] max-md:w-fit">
            AI <span className="text-[#008ECC]">Помощник</span>
          </h1>
          <div className="bg-[#008ECC] h-[3px] w-[378px] max-md:hidden" />
        </div>

        <div className="bg-[#CFE3F0] h-[80vh] md:h-[557px] rounded-[16px] flex justify-center md:mt-[40px] mt-[10px]">
          <div className="flex flex-col justify-between w-full max-w-[600px] px-4 py-6">
            {/* Chat History */}
            <div className="flex flex-col gap-4 overflow-auto max-h-[60vh] pr-2">
              {chatHistory.length === 0 && !loading && (
                <img
                  src="/img/AIAsistent.svg"
                  alt="AI Assistant"
                  className="mx-auto w-[150px] md:w-[200px] mt-[80px] "
                />
              )}

              {chatHistory.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-4 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "ai" && (
                    <img
                      src="/img/AIAsistent.svg"
                      alt="AI"
                      className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                    />
                  )}
                  <p
                    className={`p-3 rounded-[12px] max-w-[80%] break-words ${
                      msg.role === "user"
                        ? "bg-[#008ECC] text-white"
                        : "bg-white text-[#333]"
                    }`}
                  >
                    {msg.text}
                  </p>
                </div>
              ))}

              {loading && <p className="text-gray-700">AI is typing...</p>}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex gap-2 mt-4">
              <input
                type="text"
                placeholder="Давайте поговорим"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={handleKeyPress}
                className="p-3 rounded-[12px] bg-white w-full text-sm outline-none focus:border-2 focus:border-[#008ECC]"
              />
              <button
                onClick={handleAsk}
                className="p-3 rounded-[12px] bg-[#0067B3]"
              >
                <img src="/img/SendBtn.svg" alt="Send" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AiSec;
