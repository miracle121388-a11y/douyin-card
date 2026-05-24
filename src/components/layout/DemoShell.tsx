import { motion } from 'framer-motion';
import { FeedFrame } from './FeedFrame';
import { PhoneStage } from './PhoneStage';
import { TwinButton } from '../twintalk/TwinButton';
import { TwinBadge } from '../twintalk/TwinBadge';
import { FeedExperiment } from '../feed/FeedExperiment';

export function DemoShell() {
  const startExperience = () => {
    window.dispatchEvent(new CustomEvent('twintalk-demo:start'));
  };

  const openExplain = () => {
    window.dispatchEvent(new CustomEvent('twintalk-demo:explain'));
  };

  return (
    <main className="demo-shell">
      <motion.section
        className="demo-copy"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.52 }}
      >
        <TwinBadge tone="paper">TwinTalk 信息流 AI 卡片体验</TwinBadge>
        <h1>
          同频卡
          <span>刷到一个可能懂你的人</span>
        </h1>
        <p>
          外层适配抖音式信息流，保留顶部频道、右侧互动栏、底部导航和竖屏刷动；核心卡片保持 TwinTalk 的分身报告感。
        </p>
        <blockquote>
          抖音已经能让用户刷到感兴趣的内容，下一步，也许可以让用户刷到真正同频的人。
        </blockquote>
        <div className="demo-actions">
          <TwinButton onClick={startExperience}>开始体验</TwinButton>
          <TwinButton variant="secondary" onClick={() => window.location.assign('/card')}>
            打开纯卡片页
          </TwinButton>
          <TwinButton variant="secondary" onClick={openExplain}>
            查看 Demo 说明
          </TwinButton>
        </div>
      </motion.section>
      <PhoneStage>
        <FeedFrame>
          <FeedExperiment />
        </FeedFrame>
      </PhoneStage>
    </main>
  );
}
