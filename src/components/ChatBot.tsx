import { useState } from "react";
import { chatbotFlow, ChatStateKey } from "./chatbotFlow";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [chatState, setChatState] = useState<ChatStateKey>("start");
    const [messages, setMessages] = useState([{ from: "bot", text: chatbotFlow["start"].message }]);

    const handleOptionClick = (option: { label: string; next: ChatStateKey }) => {
        setMessages((prev) => [...prev, { from: "user", text: option.label }]);
        setTimeout(() => {
            setMessages((prev) => [...prev, { from: "bot", text: chatbotFlow[option.next].message }]);
            setChatState(option.next);
        }, 600); // Reduced to 0.6s for smoother interaction
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-normal">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-80 sm:w-[400px] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[#142C4A] text-white px-5 py-4 rounded-t-3xl flex justify-between items-center">
                            <h3 className="text-lg font-medium tracking-tight">Brick2Tech Assistant</h3>
                            <IoClose
                                className="cursor-pointer text-2xl hover:text-gray-300 transition-colors"
                                onClick={() => setIsOpen(false)}
                            />
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 max-h-[450px] overflow-y-auto px-5 py-4 bg-gray-50 text-sm">
                            {messages.map((msg, i) => (
                                <div
                                    key={`${msg.from}-${i}`}
                                    className={`my-3 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`rounded-2xl px-4 py-2.5 max-w-[75%] whitespace-pre-wrap font-light text-sm ${
                                            msg.from === "bot"
                                                ? "bg-[#0096D4] text-white"
                                                : "bg-[#e1f5fe] text-gray-900"
                                        }`}
                                    >
                                        {msg.text}
                                    </motion.div>
                                </div>
                            ))}
                            {/* Options for current state */}
                            <div className="mt-3 flex flex-col gap-2.5">
                                {chatbotFlow[chatState]?.options.map((opt, i) => (
                                    <motion.button
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleOptionClick(opt)}
                                        className="bg-[#0096D4] hover:bg-[#007cb0] text-white text-sm px-4 py-2.5 rounded-xl transition-all duration-200 text-left font-light tracking-wide"
                                    >
                                        {opt.label}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Chat Icon */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 rounded-full bg-[#0096D4] hover:bg-[#007cb0] text-white shadow-2xl flex items-center justify-center text-3xl transition-all duration-200"
            >
                <FaComments />
            </motion.button>
        </div>
    );
};

export default ChatBot;