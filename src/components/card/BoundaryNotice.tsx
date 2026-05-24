import { useState } from 'react';
import type { Candidate } from '../../data/candidates';

type BoundaryNoticeProps = {
  candidate: Candidate;
};

export function BoundaryNotice({ candidate }: BoundaryNoticeProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={`boundary-notice ${expanded ? 'expanded' : ''}`}>
      <button type="button" onClick={() => setExpanded((value) => !value)}>
        <span>边界提醒</span>
        <strong>{expanded ? '收起' : '展开'}</strong>
      </button>
      <p>{candidate.boundaryTips[0]}</p>
      {expanded ? <p>{candidate.boundaryTips[1]}</p> : null}
    </section>
  );
}
