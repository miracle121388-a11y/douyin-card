import { AnimatePresence, motion } from 'framer-motion';

type FeedbackBarProps = {
  submittedLabel: string;
  onSubmit: (value: string, reason?: string) => void;
};

const feedbacks = ['很准', '还行', '不相关', '暂时不想认识人'];
const reasons = ['兴趣不准', '人设不准', '开场不自然', '不喜欢这类推荐'];

export function FeedbackBar({ submittedLabel, onSubmit }: FeedbackBarProps) {
  const needsReason = submittedLabel === '不相关';

  return (
    <section className="feedback-bar">
      <div className="section-title-row">
        <h3>校准你的分身</h3>
        <span>持续学习</span>
      </div>
      <div className="feedback-button-grid">
        {feedbacks.map((item) => (
          <button key={item} className={submittedLabel === item ? 'active' : ''} type="button" onClick={() => onSubmit(item)}>
            {item}
          </button>
        ))}
      </div>
      <AnimatePresence>
        {needsReason ? (
          <motion.div
            className="feedback-reason-grid"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {reasons.map((reason) => (
              <button key={reason} type="button" onClick={() => onSubmit('不相关', reason)}>
                {reason}
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
      {submittedLabel ? <p className="feedback-inline-result">已回写你的分身偏好</p> : null}
    </section>
  );
}
