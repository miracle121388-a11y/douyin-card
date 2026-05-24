import { useState } from 'react';
import type { Candidate } from '../../data/candidates';
import { TwinButton } from '../twintalk/TwinButton';
import { TwinMetric } from '../twintalk/TwinMetric';
import { SheetFrame } from './SheetFrame';

type MatchReportSheetProps = {
  candidate: Candidate;
  onClose: () => void;
  onOpenChat: () => void;
};

const tabs = ['同频点', '互补点', '开场方式', '分身判断'] as const;
type ReportTab = (typeof tabs)[number];

export function MatchReportSheet({ candidate, onClose, onOpenChat }: MatchReportSheetProps) {
  const [activeTab, setActiveTab] = useState<ReportTab>('同频点');
  const report = candidate.report;

  return (
    <SheetFrame onClose={onClose}>
      <div className="report-sheet-head">
        <div>
          <span>FULL MATCH REPORT</span>
          <h2 className="sheet-title">完整同频报告</h2>
        </div>
        <TwinMetric value={candidate.matchScore} label="Match" />
      </div>

      <div className="report-tabs" role="tablist" aria-label="同频报告内容">
        {tabs.map((tab) => (
          <button key={tab} className={activeTab === tab ? 'active' : ''} type="button" onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>

      <div className="report-tab-panel">
        {activeTab === '同频点' ? (
          <>
            <ReportBlock title="共同关注" items={[report.commonPoints[0]]} />
            <ReportBlock title="共同情境" items={[report.commonPoints[1]]} />
            <ReportBlock title="共同表达" items={[report.commonPoints[2]]} />
          </>
        ) : null}

        {activeTab === '互补点' ? (
          <>
            <ReportBlock title="你的偏好" items={[report.complementaryPoints[0]]} />
            <ReportBlock title="TA 的偏好" items={[report.complementaryPoints[1]]} />
            <ReportBlock title="互补价值" items={[report.complementaryPoints[2]]} />
          </>
        ) : null}

        {activeTab === '开场方式' ? (
          <>
            <ReportBlock title="推荐话题" items={report.openingStyle.topics} />
            <ReportBlock title="推荐语气" items={[report.openingStyle.tone]} />
            <ReportBlock title="不建议" items={report.openingStyle.avoid} />
          </>
        ) : null}

        {activeTab === '分身判断' ? (
          <>
            <ReportBlock title="匹配度" items={[`${candidate.matchScore}%`]} />
            <ReportBlock title="连接价值" items={[report.judgement.value]} />
            <ReportBlock title="风险" items={[report.judgement.risk]} />
            <ReportBlock title="下一步" items={[report.judgement.nextStep]} />
          </>
        ) : null}
      </div>

      <div className="sheet-actions">
        <TwinButton onClick={onOpenChat}>让分身先聊聊</TwinButton>
        <TwinButton variant="secondary" onClick={onClose}>
          关闭
        </TwinButton>
      </div>
    </SheetFrame>
  );
}

function ReportBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="report-block">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
