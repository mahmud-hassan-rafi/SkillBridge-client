import { motion } from "framer-motion";
import { CgHome } from "react-icons/cg";
import { FiRefreshCw } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function SomethingWentWrong({ onRetry }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        {/* Animated Icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-red-500 text-6xl mb-6"
        >
          ⚠️
        </motion.div>

        {/* 🧾 Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Something went wrong
        </h1>

        {/* 📄 Description */}
        <p className="text-gray-500 mb-6">
          We couldn’t load the data. Please check your connection or try again.
        </p>

        {/* 🎯 Buttons */}
        <div className="flex gap-3 justify-center">
          {/* Retry */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRetry}
            className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-xl shadow"
          >
            <FiRefreshCw size={16} />
            Retry
          </motion.button>

          {/* Go Home */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 border px-5 py-2 rounded-xl"
          >
            <CgHome size={16} />
            Home
          </motion.button>
        </div>

        {/* subtle fade footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.6 }}
          className="text-xs text-gray-400 mt-6"
        >
          Error code: 500
        </motion.p>
      </motion.div>
    </div>
  );
}
