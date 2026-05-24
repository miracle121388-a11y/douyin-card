import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SheetFrameProps = {
  children: ReactNode;
  onClose: () => void;
};

export function SheetFrame({ children, onClose }: SheetFrameProps) {
  return (
    <div className="sheet-layer">
      <button className="sheet-backdrop" type="button" aria-label="关闭" onClick={onClose} />
      <motion.div
        className="sheet-panel"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
      >
        <div className="sheet-handle" />
        {children}
      </motion.div>
    </div>
  );
}
