import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import type { AgentProbe, Candidate } from '../../data/candidates';
import { getFeedbackResult, getMatchReasons } from '../../utils/copy';
import { mockProfile } from '../../data/mockProfile';
import { TwinBadge } from '../twintalk/TwinBadge';
import { TwinButton } from '../twintalk/TwinButton';
import { TwinGlassCard } from '../twintalk/TwinGlassCard';
import { TwinMetric } from '../twintalk/TwinMetric';
import { CandidateProfileBlock } from './CandidateProfileBlock';
import { MatchReasonGrid } from './MatchReasonGrid';
import { AgentProbeBlock } from './AgentProbeBlock';
import { OpeningSuggestionBlock } from './OpeningSuggestionBlock';
import { BoundaryNotice } from './BoundaryNotice';
import { FeedbackBar } from './FeedbackBar';
import { CardActionBar } from './CardActionBar';

type CardState = 'default' | 'expanded' | 'chatting' | 'feedbackSubmitted';

type SameFrequencyCardProps = {
  candidate: Candidate;
  onOpenReport: () => void;
  onOpenChat: () => void;
  onDislike: () => void;
};

export function SameFrequencyCard({ candidate, onOpenReport, onOpenChat, onDislike }: SameFrequencyCardProps) {
  const [cardState, setCardState] = useState<CardState>('default');
  const [openingIndex, setOpeningIndex] = useState(0);
  const [probeIndex, setProbeIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [feedbackLabel, setFeedbackLabel] = useState('');
  const [feedbackResult, setFeedbackResult] = useState('');
  const reasons = getMatchReasons(mockProfile, candidate);
  const probes = useMemo<AgentProbe[]>(() => [candidate.agentProbe, ...candidate.extraProbes], [candidate]);
  const currentProbe = probes[probeIndex % probes.length];
  const currentOpening = candidate.openings[openingIndex % candidate.openings.length];

  const copyOpening = async () => {
    try {
      await navigator.clipboard?.writeText(currentOpening);
    } catch {
      // Clipboard access can be unavailable in some local preview contexts.
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2400);
  };

  const handleChat = () => {
    setCardState('chatting');
    onOpenChat();
  };

  const handleFeedback = (value: string, reason?: string) => {
    setFeedbackLabel(reason || value);
    setFeedbackResult(reason ? '分身会减少类似推荐' : getFeedbackResult(value));
    setCardState('feedbackSubmitted');
  };

  return (
    <section className="same-frequency-screen">
      <motion.div
        className="same-frequency-motion"
        initial={{ opacity: 0, y: 26, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.42 }}
      >
        <TwinGlassCard className={`same-frequency-card state-${cardState}`}>
          <header className="same-card-head">
            <div>
              <TwinBadge tone="brand">
                <Sparkles size={13} /> TwinTalk 分身已完成一次预筛选
              </TwinBadge>
              <h2>刷到一个可能懂你的人</h2>
              <p>基于你的近期内容兴趣、互动偏好与表达方式生成。</p>
            </div>
            <TwinMetric value={candidate.matchScore} label="AI Match" />
          </header>

          <CandidateProfileBlock candidate={candidate} />
          <MatchReasonGrid reasons={reasons} />

          {cardState === 'default' ? (
            <>
              <section className="feed-card-proof-grid" aria-label="分身预筛摘要">
                <TwinGlassCard className="feed-card-proof">
                  <span>
                    <MessageCircle size={13} /> 分身预试探
                  </span>
                  <p>{currentProbe.result}</p>
                </TwinGlassCard>
                <TwinGlassCard className="feed-card-proof">
                  <span>
                    <ShieldCheck size={13} /> 开场建议
                  </span>
                  <p>{currentOpening}</p>
                </TwinGlassCard>
              </section>
              <button type="button" className="expand-analysis-button" onClick={() => setCardState('expanded')}>
                展开分身预筛、开场白与反馈
              </button>
            </>
          ) : null}

          <AnimatePresence initial={false}>
            {cardState !== 'default' ? (
              <motion.div
                className="same-card-expanded-stack"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <AgentProbeBlock probe={currentProbe} />
                <OpeningSuggestionBlock
                  candidate={candidate}
                  openingIndex={openingIndex}
                  copied={copied}
                  onCopy={copyOpening}
                  onNextOpening={() => setOpeningIndex((value) => value + 1)}
                  onProbeAgain={() => {
                    setProbeIndex((value) => value + 1);
                    setCardState('expanded');
                  }}
                />
                <BoundaryNotice candidate={candidate} />
                <FeedbackBar submittedLabel={feedbackLabel} onSubmit={handleFeedback} />
              </motion.div>
            ) : null}
          </AnimatePresence>

          {cardState === 'feedbackSubmitted' ? (
            <motion.div className="card-learning-state" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <strong>{feedbackResult}</strong>
              <span>下次会更接近你的真实需求。</span>
            </motion.div>
          ) : null}

          <CardActionBar onOpenChat={handleChat} onOpenReport={onOpenReport} onLater={onDislike} />
          {cardState === 'default' ? (
            <TwinButton variant="ghost" className="quiet-feedback-link" onClick={() => setCardState('expanded')}>
              查看边界提醒与反馈校准
            </TwinButton>
          ) : null}
        </TwinGlassCard>
      </motion.div>
    </section>
  );
}
