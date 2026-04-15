"use client";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        className={`fixed bottom-6 right-6 flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl text-white z-50 ${
          type === "success" ? "bg-green-600" : "bg-red-600"
        }`}
      >
        {type === "success" ? <CheckCircle size={22} /> : <XCircle size={22} />}
        <span className="font-semibold">{message}</span>
        <button
          onClick={onClose}
          className="ml-4 hover:text-gray-200 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
