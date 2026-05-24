import { AnimatePresence, motion } from 'framer-motion';
import type { AgentProbe } from '../../data/candidates';

type AgentProbeBlockProps = {
  probe: AgentProbe;
};

export function AgentProbeBlock({ probe }: AgentProbeBlockProps) {
  return (
    <section className="agent-probe-block">
      <div className="section-title-row">
        <h3>分身预试探</h3>
        <span>Agent Log</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${probe.observation}-${probe.probeQuestion}`}
          className="agent-probe-log"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
        >
          <div className="probe-bubble assistant">
            <span>你的分身观察到</span>
            <p>{probe.observation}</p>
          </div>
          <div className="probe-bubble user">
            <span>分身试探话题</span>
            <p>“{probe.probeQuestion}”</p>
          </div>
          <div className="probe-bubble assistant">
            <span>对方可能回应</span>
            <p>“{probe.possibleReply}”</p>
          </div>
          <div className="probe-result">试探结果：{probe.result}</div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
