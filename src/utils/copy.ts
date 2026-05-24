import type { Candidate } from '../data/candidates';
import { mockProfile } from '../data/mockProfile';

export const getMatchReasons = (_profile: typeof mockProfile, candidate: Candidate) => {
  // TODO: 正式版本可接入大模型，根据抖音用户行为数据和创作者内容特征动态生成推荐理由。
  return candidate.reasons;
};

export const getOpeningLine = (candidate: Candidate, index = 0) => {
  // TODO: 正式版本可结合双方近期内容、评论语气和私信安全策略生成低压力开场白。
  return candidate.openings[index % candidate.openings.length];
};

export const getAgentJudgement = (candidate: Candidate) => {
  if (candidate.matchScore >= 80) return '适合轻度交流，有内容共创可能。';
  return '适合从具体话题开始，先保持低压力互动。';
};

export const getFeedbackResult = (value: string) => {
  if (value === '不相关') return '分身会减少类似推荐';
  return '已回写你的分身偏好';
};
