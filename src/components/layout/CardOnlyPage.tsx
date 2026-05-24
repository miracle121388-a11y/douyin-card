import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Bot, MessageCircle, ShieldCheck, SlidersHorizontal, Sparkles } from 'lucide-react';
import { candidates } from '../../data/candidates';
import { SameFrequencyCard } from '../card/SameFrequencyCard';
import { MatchReportSheet } from '../overlay/MatchReportSheet';
import { AgentChatSheet } from '../overlay/AgentChatSheet';
import { FeedbackSheet } from '../overlay/FeedbackSheet';
import { TwinBadge } from '../twintalk/TwinBadge';
import { TwinButton } from '../twintalk/TwinButton';

type Sheet = 'report' | 'chat' | 'feedback' | null;

const highlights = [
  {
    icon: Sparkles,
    title: '同频解释',
    text: '把共同兴趣、表达互补和低压力场景合并成可读推荐理由。',
  },
  {
    icon: Bot,
    title: '分身预筛',
    text: '先模拟一次轻试探，判断对方是否有继续交流空间。',
  },
  {
    icon: MessageCircle,
    title: '开场生成',
    text: '围绕公开内容给出可复制、可替换的自然开场白。',
  },
  {
    icon: ShieldCheck,
    title: '边界提醒',
    text: '把隐私边界和反馈校准放在卡片里，降低陌生社交压力。',
  },
];

export function CardOnlyPage() {
  const [sheet, setSheet] = useState<Sheet>(null);
  const candidate = candidates[0];

  return (
    <main className="card-only-page">
      <section className="card-only-toolbar" aria-label="页面导航">
        <a className="card-only-back-link" href="/">
          <ArrowLeft size={17} />
          Demo
        </a>
        <TwinBadge tone="paper">TwinTalk Card Web</TwinBadge>
      </section>

      <section className="card-only-workspace">
        <motion.aside
          className="card-only-copy"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.48 }}
        >
          <TwinBadge tone="brand">
            <SlidersHorizontal size={13} /> 仅卡片模式
          </TwinBadge>
          <h1>同频卡</h1>
          <p>从“刷到内容”收束到“理解一个人”：推荐解释、分身试探、开场白和反馈学习都沉在一张卡片里。</p>
          <div className="card-only-highlight-list">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article className="card-only-highlight" key={item.title}>
                  <span>
                    <Icon size={17} />
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </motion.aside>

        <section className="card-only-stage" aria-label="同频卡功能预览">
          <SameFrequencyCard
            candidate={candidate}
            onOpenReport={() => setSheet('report')}
            onOpenChat={() => setSheet('chat')}
            onDislike={() => setSheet('feedback')}
          />

          <AnimatePresence>
            {sheet === 'report' && (
              <MatchReportSheet candidate={candidate} onClose={() => setSheet(null)} onOpenChat={() => setSheet('chat')} />
            )}
            {sheet === 'chat' && <AgentChatSheet candidate={candidate} onClose={() => setSheet(null)} />}
            {sheet === 'feedback' && <FeedbackSheet onClose={() => setSheet(null)} />}
          </AnimatePresence>
        </section>
      </section>
    </main>
  );
}
