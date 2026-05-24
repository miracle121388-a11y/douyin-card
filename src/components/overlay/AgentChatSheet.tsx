import { useEffect, useMemo, useState } from 'react';
import type { Candidate } from '../../data/candidates';
import { getOpeningLine } from '../../utils/copy';
import { OpeningLinePanel } from '../card/OpeningLinePanel';
import { TwinButton } from '../twintalk/TwinButton';
import { TwinGlassCard } from '../twintalk/TwinGlassCard';
import { SheetFrame } from './SheetFrame';

type AgentChatSheetProps = {
  candidate: Candidate;
  onClose: () => void;
};

export function AgentChatSheet({ candidate, onClose }: AgentChatSheetProps) {
  const [loading, setLoading] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const openingLine = useMemo(() => getOpeningLine(candidate, lineIndex), [candidate, lineIndex]);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  const copyOpening = async () => {
    try {
      await navigator.clipboard?.writeText(openingLine);
    } catch {
      // Clipboard access can be blocked in local preview; visual state still confirms intent.
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <SheetFrame onClose={onClose}>
      {loading ? (
        <div className="agent-loading">
          <div className="agent-spinner" />
          <p>分身正在模拟低压力开场...</p>
        </div>
      ) : (
        <>
          <h2 className="sheet-title">分身已完成一次轻试探</h2>
          <div className="sheet-stack">
            <TwinGlassCard className="sheet-info-card">
              <span>共同话题</span>
              <p>{candidate.topics.join(' / ')}</p>
            </TwinGlassCard>
            <OpeningLinePanel openingLine={openingLine} />
            <TwinGlassCard className="sheet-info-card">
              <span>建议语气</span>
              <p>轻松、具体、不打探隐私。</p>
            </TwinGlassCard>
            <TwinGlassCard className="sheet-info-card">
              <span>下一步</span>
              <p>先围绕一条公开内容进行互动，观察对方回应节奏。</p>
            </TwinGlassCard>
          </div>
          {copied ? <p className="sheet-success-note">已复制，正式上线后可接入抖音私信入口</p> : null}
          <div className="sheet-actions three">
            <TwinButton onClick={copyOpening}>复制开场白</TwinButton>
            <TwinButton variant="secondary" onClick={() => setLineIndex((value) => value + 1)}>
              换一句
            </TwinButton>
            <TwinButton variant="ghost" onClick={onClose}>
              稍后再看
            </TwinButton>
          </div>
        </>
      )}
    </SheetFrame>
  );
}
