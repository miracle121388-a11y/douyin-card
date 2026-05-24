import { AnimatePresence, motion } from 'framer-motion';
import type { Candidate } from '../../data/candidates';
import { TwinButton } from '../twintalk/TwinButton';

type OpeningSuggestionBlockProps = {
  candidate: Candidate;
  openingIndex: number;
  copied: boolean;
  onCopy: () => void;
  onNextOpening: () => void;
  onProbeAgain: () => void;
};

export function OpeningSuggestionBlock({
  candidate,
  openingIndex,
  copied,
  onCopy,
  onNextOpening,
  onProbeAgain,
}: OpeningSuggestionBlockProps) {
  const opening = candidate.openings[openingIndex % candidate.openings.length];
  const backupOpenings = candidate.openings.filter((_, index) => index !== openingIndex % candidate.openings.length).slice(0, 2);

  return (
    <section className="opening-suggestion-block">
      <div className="section-title-row">
        <h3>分身建议你这样开场</h3>
        <span>低压力</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={opening}
          className="opening-primary"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
        >
          <p>{opening}</p>
        </motion.div>
      </AnimatePresence>
      <div className="opening-backups">
        {backupOpenings.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      {copied ? <div className="copy-toast-inline">已复制，正式上线后可接入抖音私信入口</div> : null}
      <div className="opening-actions">
        <TwinButton variant="secondary" onClick={onCopy}>
          复制开场白
        </TwinButton>
        <TwinButton variant="secondary" onClick={onNextOpening}>
          换一句
        </TwinButton>
        <TwinButton variant="ghost" onClick={onProbeAgain}>
          让分身再试探一次
        </TwinButton>
      </div>
    </section>
  );
}
