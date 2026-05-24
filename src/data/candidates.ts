export type MatchReason = {
  type: string;
  title: string;
  text: string;
  tag: string;
};

export type AgentProbe = {
  observation: string;
  probeQuestion: string;
  possibleReply: string;
  result: string;
};

export type MatchReport = {
  commonPoints: string[];
  complementaryPoints: string[];
  openingStyle: {
    topics: string[];
    tone: string;
    avoid: string[];
  };
  judgement: {
    value: string;
    risk: string;
    nextStep: string;
  };
};

export type Candidate = {
  id: string;
  handle: string;
  identity: string;
  bio: string;
  avatarType: 'gradient-agent';
  tags: string[];
  matchScore: number;
  status: string[];
  reasons: MatchReason[];
  agentProbe: AgentProbe;
  extraProbes: AgentProbe[];
  topics: string[];
  openings: string[];
  boundaryTips: string[];
  report: MatchReport;
};

export const candidates: Candidate[] = [
  {
    id: 'linjian-xiaozhou',
    handle: '@林间小周',
    identity: '城市漫游记录者 | AI 工具体验者',
    bio: '喜欢用路线、照片和小工具记录城市生活。',
    avatarType: 'gradient-agent',
    tags: ['AI 工具', '城市漫游', '真实体验', '内容共创'],
    matchScore: 82,
    status: ['适合轻度交流', '可能产生内容共创', '开场压力较低'],
    reasons: [
      {
        type: 'common-interest',
        title: '共同兴趣',
        text: '你们都关注 AI 工具如何进入真实生活，而不是只停留在概念讨论。',
        tag: 'AI 工具',
      },
      {
        type: 'expression-complement',
        title: '表达互补',
        text: '你偏向收藏教程和方法，TA 更常发布真实体验与使用过程。',
        tag: '教程 x 体验',
      },
      {
        type: 'scene-fit',
        title: '场景契合',
        text: '分身判断你们适合从校园项目和城市生活两个轻话题开始聊。',
        tag: '低压力开场',
      },
    ],
    agentProbe: {
      observation: 'TA 最近多次发布 AI 工具真实体验，而不是纯教程搬运。',
      probeQuestion: '你更在意 AI 工具真的帮你省时间，还是它带来的新鲜感？',
      possibleReply: '我更在意它能不能真的进入生活，而不是看起来很酷。',
      result: '回应空间较大，适合继续轻度交流。',
    },
    extraProbes: [
      {
        observation: 'TA 的城市路线内容里，经常把工具和真实场景放在一起讲。',
        probeQuestion: '如果把一次城市漫游做成项目样例，你会更想记录路线，还是记录人的反馈？',
        possibleReply: '我可能会先记录路线，再看哪些片段真的能被别人用上。',
        result: '适合围绕公开作品继续试探，不需要直接进入私密话题。',
      },
      {
        observation: 'TA 对“可复用的小工具”更敏感，评论区也常回应实际使用感受。',
        probeQuestion: '你会不会把好用的 AI 工具整理成固定流程？',
        possibleReply: '会，但我更关心这个流程能不能在真实生活里坚持下来。',
        result: '对方有具体表达空间，适合用轻松问题打开对话。',
      },
    ],
    topics: ['AI 工具', '校园项目', '城市生活'],
    openings: [
      '我看到你也在尝试 AI 工具，想问问你最近最常用的是哪一个？',
      '你最近发的 AI 工具体验挺真实的，我也在做相关项目，想听听你的使用感受。',
      '我发现你也在记录城市路线，你会更喜欢计划好的路线，还是随便走走？',
    ],
    boundaryTips: [
      '当前推荐仅基于公开内容与模拟兴趣数据。',
      '建议从公开作品聊起，不直接询问私人信息。',
    ],
    report: {
      commonPoints: [
        '共同关注 AI 工具、城市漫游、校园项目。',
        '都关心如何把 AI 应用到真实生活中。',
        '都偏向真实体验，而不是纯概念讨论。',
      ],
      complementaryPoints: [
        '你更偏向收藏教程、关注方法、偏实用。',
        'TA 更偏向发布体验、记录过程、偏真实。',
        '你可以从 TA 的真实体验中获得反馈，TA 也可能对你的项目视角感兴趣。',
      ],
      openingStyle: {
        topics: ['AI 工具最近是否真的提升了效率？', '城市路线怎么记录更自然？', '校园项目如何找到真实用户？'],
        tone: '轻松、具体、以公开作品为入口。',
        avoid: ['一上来询问私人情况', '一上来邀请深聊', '过度介绍自己'],
      },
      judgement: {
        value: '适合轻度交流，有内容共创可能。',
        risk: '对方可能更偏慢热，建议不要连续追问。',
        nextStep: '先围绕一条公开内容进行互动，观察对方回应节奏。',
      },
    },
  },
];
