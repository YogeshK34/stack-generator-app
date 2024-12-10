import { motion } from "framer-motion";

interface CartoonishButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export function CartoonishButton({
  onClick,
  disabled,
  children,
}: CartoonishButtonProps) {
  return (
    <motion.button
      className="relative px-8 py-4 text-xl font-bold text-white bg-green-500 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-green-600 rounded-full transform skew-x-1 skew-y-1"></span>
    </motion.button>
  );
}
