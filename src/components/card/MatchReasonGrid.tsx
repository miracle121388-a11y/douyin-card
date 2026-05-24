import type { MatchReason } from '../../data/candidates';
import { TwinGlassCard } from '../twintalk/TwinGlassCard';

type MatchReasonGridProps = {
  reasons: MatchReason[];
};

export function MatchReasonGrid({ reasons }: MatchReasonGridProps) {
  return (
    <section className="match-reason-section">
      <h3>你们为什么同频</h3>
      <div className="match-reason-grid">
        {reasons.map((reason, index) => (
          <TwinGlassCard key={reason.title} className="match-reason-card">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{reason.title}</strong>
            <p>{reason.text}</p>
            <em>{reason.tag}</em>
          </TwinGlassCard>
        ))}
      </div>
    </section>
  );
}
