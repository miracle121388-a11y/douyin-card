import { motion } from 'framer-motion';

type TwinMetricProps = {
  value: number;
  label: string;
};

export function TwinMetric({ value, label }: TwinMetricProps) {
  const circumference = 2 * Math.PI * 30;
  const offset = circumference * (1 - value / 100);

  return (
    <div className="twin-metric">
      <svg viewBox="0 0 72 72" aria-hidden="true">
        <circle cx="36" cy="36" r="30" className="twin-metric-track" />
        <motion.circle
          cx="36"
          cy="36"
          r="30"
          className="twin-metric-fill"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </svg>
      <motion.strong initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.32 }}>
        {value}%
      </motion.strong>
      <span>{label}</span>
    </div>
  );
}
