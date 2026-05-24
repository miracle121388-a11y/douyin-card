import { TwinButton } from '../twintalk/TwinButton';
import { SheetFrame } from './SheetFrame';

type DemoExplainSheetProps = {
  onClose: () => void;
};

export function DemoExplainSheet({ onClose }: DemoExplainSheetProps) {
  return (
    <SheetFrame onClose={onClose}>
      <h2 className="sheet-title">Demo 说明</h2>
      <div className="demo-explain-copy">
        <p>这是 TwinTalk 面向抖音创作者比赛设计的信息流 AI 卡片体验原型。</p>
        <p>外层复用抖音式信息流交互，核心同频推荐卡保留 TwinTalk 的分身报告感。</p>
        <p>
          当前版本使用模拟浏览行为与预置候选人数据完成体验验证；真实上线后，可由抖音生态数据提供观看、点赞、收藏、评论和创作者内容特征。
        </p>
      </div>
      <TwinButton onClick={onClose}>我知道了</TwinButton>
    </SheetFrame>
  );
}
