import { motion, AnimatePresence } from "framer-motion";

export default function PayWiselySplash() {
  const text = "Pay Wisely".split("");

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-gradient-to-bl from-[#d5c2f0] via-[#e1c2e5] to-[#e7c2df] flex flex-col justify-center items-center"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 3 }}
      >
        <motion.div
          className="flex justify-center items-center bg-white rounded-2xl shadow-lg p-8 space-x-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          {text.map((char, index) => (
            <motion.span
              key={index}
              className="text-4xl font-bold text-[#2a3439]"
              initial={{ rotateY: 180, rotateZ: 360, scale: 0, opacity: 0 }}
              animate={{ rotateY: 0, rotateZ: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: index * 0.15,
                type: "spring",
                stiffness: 150,
                damping: 12,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="mt-4 text-lg text-[#2a3439]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: text.length * 0.15 }}
        >
          Experience Smart Payments
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
