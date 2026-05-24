import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type PhoneStageProps = {
  children: ReactNode;
};

export function PhoneStage({ children }: PhoneStageProps) {
  return (
    <motion.section
      className="phone-stage"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: [0, -5, 0] }}
      transition={{ opacity: { duration: 0.45 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
    >
      {children}
    </motion.section>
  );
}
