import type { Candidate } from '../../data/candidates';
import { TwinAvatar } from '../twintalk/TwinAvatar';
import { TwinBadge } from '../twintalk/TwinBadge';

type CandidateProfileBlockProps = {
  candidate: Candidate;
};

export function CandidateProfileBlock({ candidate }: CandidateProfileBlockProps) {
  return (
    <section className="candidate-profile-block">
      <TwinAvatar size="lg" />
      <div className="candidate-profile-copy">
        <h3>{candidate.handle}</h3>
        <p className="candidate-identity">{candidate.identity}</p>
        <p>{candidate.bio}</p>
        <div className="candidate-tags">
          {candidate.tags.map((tag) => (
            <TwinBadge key={tag} tone="paper">
              {tag}
            </TwinBadge>
          ))}
        </div>
        <div className="candidate-status-list">
          {candidate.status.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
