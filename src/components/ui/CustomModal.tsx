"use client";
import { motion } from "framer-motion";
import { Database, Car, Smartphone, Apple, X } from "lucide-react";
import { useState } from "react";

interface ModalProps {
  onClose: () => void;
  onStart: (dbType: string, dataset: string) => void;
}

export default function CustomModal({ onClose, onStart }: ModalProps) {
  const [dbType, setDbType] = useState<string | null>(null);
  const [dataset, setDataset] = useState<string | null>(null);

  const datasets = [
    { id: "cars", name: "Cars", icon: <Car size={28} /> },
    { id: "phones", name: "Phones", icon: <Smartphone size={28} /> },
    { id: "fruits", name: "Fruits", icon: <Apple size={28} /> },
  ];

  return (
    <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-40 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl p-6 md:p-8 w-full max-w-lg shadow-2xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Setup Playground</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer p-1"
          >
            <X size={24} />
          </button>
        </div>

        {/* Database Selection */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">
            1. Choose Database Type
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {["SQL", "NoSQL"].map((type) => (
              <button
                key={type}
                onClick={() => setDbType(type)}
                className={`p-4 rounded-xl border-2 flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  dbType === type
                    ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm"
                    : "border-gray-200 hover:border-blue-300 text-gray-600"
                }`}
              >
                <Database size={20} />
                <span className="font-bold text-lg">{type}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dataset Selection */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">
            2. Choose Dataset
          </h3>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {datasets.map((item) => (
              <button
                key={item.id}
                onClick={() => setDataset(item.id)}
                className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all ${
                  dataset === item.id
                    ? "border-green-500 bg-green-50 text-green-700 shadow-sm"
                    : "border-gray-200 hover:border-green-300 text-gray-600"
                }`}
              >
                {item.icon}
                <span className="text-sm font-semibold">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button
          disabled={!dbType || !dataset}
          onClick={() => onStart(dbType!, dataset!)}
          className={`w-full py-4 rounded-xl font-bold text-lg text-white cursor-pointer transition-all ${
            dbType && dataset
              ? "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30"
              : "bg-gray-300 cursor-not-allowed opacity-70"
          }`}
        >
          Let's Code!
        </button>
      </motion.div>
    </div>
  );
}
