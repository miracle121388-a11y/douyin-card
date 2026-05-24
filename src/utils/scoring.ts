import type { Candidate } from '../data/candidates';
import { mockProfile } from '../data/mockProfile';

type UserProfile = typeof mockProfile;

const overlapRatio = (a: string[], b: string[]) => {
  const set = new Set(a);
  const hits = b.filter((item) => set.has(item)).length;
  return hits / Math.max(new Set([...a, ...b]).size, 1);
};

export const calculateMatchScore = (userProfile: UserProfile, candidate: Candidate) => {
  const interestScore = overlapRatio([...userProfile.savedTags, ...userProfile.likedTags], candidate.tags) * 40;
  const complementScore = candidate.tags.includes('真实体验') ? 22 : 18;
  const preferenceScore = userProfile.behavior.some((item) => item.includes('真实体验')) ? 18 : 14;
  const agentPotentialScore = candidate.topics.length >= 3 ? 15 : 11;

  return Math.round(Math.min(100, interestScore + complementScore + preferenceScore + agentPotentialScore));
};
