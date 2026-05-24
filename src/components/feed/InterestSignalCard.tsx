import { motion } from 'framer-motion';
import { Music2, Sparkles } from 'lucide-react';
import { mockProfile } from '../../data/mockProfile';
import { FeedActionRail } from './FeedActionRail';

const coverUrl = 'https://storage.googleapis.com/test-media-human/611953/611953_1.png';

export function InterestSignalCard() {
  return (
    <section className="douyin-video-slide interest-douyin-slide">
      <img className="douyin-video-bg blurred" src={coverUrl} alt="" referrerPolicy="no-referrer" />
      <div className="douyin-ai-overlay" />
      <FeedActionRail avatarSeed="twintalk-agent" coverUrl={coverUrl} likes="AI" comments="37" favorites="82" shares="预筛" isTwinTalkCard />
      <motion.div
        className="interest-signal-card"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="interest-card-kicker">
          <Sparkles size={15} />
          <span>TwinTalk 分身</span>
        </div>
        <h2>分身正在整理你的近期兴趣</h2>
        <div className="interest-signal-list">
          {mockProfile.interests.map((item, index) => (
            <motion.div
              key={item.label}
              className="interest-signal-row"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.09 }}
            >
              <div>
                <span>{item.label}</span>
                <strong>{item.value}%</strong>
              </div>
              <div className="interest-track">
                <motion.i
                  initial={{ width: 0 }}
                  animate={{ width: `${item.value}%` }}
                  transition={{ duration: 0.7, delay: 0.1 + index * 0.08 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        <p>继续刷，看看分身为你筛到了谁。</p>
      </motion.div>
      <div className="douyin-caption">
        <h3>@TwinTalk Agent</h3>
        <p>基于模拟浏览行为生成轻量兴趣画像</p>
        <p className="douyin-signal">当前 Demo 使用模拟数据，真实上线后可接入抖音生态行为数据。</p>
        <div className="douyin-music-row">
          <Music2 size={15} />
          <span>TwinTalk · Feed Experiment</span>
        </div>
      </div>
    </section>
  );
}
