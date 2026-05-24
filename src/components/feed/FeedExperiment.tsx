import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Music2 } from 'lucide-react';
import { feedItems } from '../../data/feedItems';
import { candidates } from '../../data/candidates';
import { FeedProgress } from './FeedProgress';
import { FeedStory } from './FeedStory';
import { FeedActionRail } from './FeedActionRail';
import { InterestSignalCard } from './InterestSignalCard';
import { SameFrequencyCard } from '../card/SameFrequencyCard';
import { MatchReportSheet } from '../overlay/MatchReportSheet';
import { AgentChatSheet } from '../overlay/AgentChatSheet';
import { DemoExplainSheet } from '../overlay/DemoExplainSheet';
import { FeedbackSheet } from '../overlay/FeedbackSheet';

type Sheet = 'report' | 'chat' | 'explain' | 'feedback' | null;

export function FeedExperiment() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [sheet, setSheet] = useState<Sheet>(null);
  const lastWheelAt = useRef(0);
  const touchStartY = useRef<number | null>(null);
  const slides = useMemo(() => [...feedItems, { id: 'interest-signal', type: 'signal' as const }, { id: 'same-card', type: 'same-card' as const }], []);
  const candidate = candidates[0];
  const coverUrl = 'https://storage.googleapis.com/test-media-human/611953/611953_2.png';

  const goTo = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, next));
      if (clamped === index) return;
      setDirection(clamped > index ? 1 : -1);
      setIndex(clamped);
    },
    [index, slides.length],
  );

  useEffect(() => {
    const handleStart = () => goTo(1);
    const handleExplain = () => setSheet('explain');
    window.addEventListener('twintalk-demo:start', handleStart);
    window.addEventListener('twintalk-demo:explain', handleExplain);
    return () => {
      window.removeEventListener('twintalk-demo:start', handleStart);
      window.removeEventListener('twintalk-demo:explain', handleExplain);
    };
  }, [goTo]);

  const handleWheel = (event: React.WheelEvent) => {
    const now = Date.now();
    if (sheet || now - lastWheelAt.current < 600 || Math.abs(event.deltaY) < 22) return;
    lastWheelAt.current = now;
    goTo(index + (event.deltaY > 0 ? 1 : -1));
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartY.current === null || sheet) return;
    const delta = touchStartY.current - event.changedTouches[0].clientY;
    if (Math.abs(delta) > 36) goTo(index + (delta > 0 ? 1 : -1));
    touchStartY.current = null;
  };

  const slide = slides[index];

  return (
    <div
      className={`feed-experiment ${'type' in slide ? `feed-experiment-${slide.type}` : 'feed-experiment-video'}`}
      onWheel={handleWheel}
      onTouchStart={(event) => {
        touchStartY.current = event.touches[0].clientY;
      }}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={slide.id}
          className="feed-slide"
          custom={direction}
          initial={{ y: direction > 0 ? '100%' : '-100%', opacity: 0.92 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: direction > 0 ? '-100%' : '100%', opacity: 0.92 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          {'type' in slide && slide.type === 'signal' ? <InterestSignalCard /> : null}
          {'type' in slide && slide.type === 'same-card' ? (
            <section className="douyin-video-slide twintalk-card-adapter-slide">
              <img className="douyin-video-bg blurred" src={coverUrl} alt="" referrerPolicy="no-referrer" />
              <div className="twintalk-card-backdrop" />
              <div className="douyin-video-bottom-gradient" />
              <SameFrequencyCard
                candidate={candidate}
                onOpenReport={() => setSheet('report')}
                onOpenChat={() => setSheet('chat')}
                onDislike={() => setSheet('feedback')}
              />
            </section>
          ) : null}
          {!('type' in slide) ? <FeedStory item={slide} /> : null}
        </motion.div>
      </AnimatePresence>

      <FeedProgress total={slides.length} current={index} />
      <div className="douyin-tap-controls" aria-hidden="true">
        <button type="button" onClick={() => goTo(index - 1)} />
        <button type="button" onClick={() => goTo(index + 1)} />
      </div>

      <AnimatePresence>
        {sheet === 'report' && <MatchReportSheet candidate={candidate} onClose={() => setSheet(null)} onOpenChat={() => setSheet('chat')} />}
        {sheet === 'chat' && <AgentChatSheet candidate={candidate} onClose={() => setSheet(null)} />}
        {sheet === 'explain' && <DemoExplainSheet onClose={() => setSheet(null)} />}
        {sheet === 'feedback' && <FeedbackSheet onClose={() => setSheet(null)} />}
      </AnimatePresence>
    </div>
  );
}
