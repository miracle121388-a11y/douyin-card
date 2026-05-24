export type FeedItem = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  signal: string;
  tone: 'mint' | 'violet' | 'warm';
  creator: string;
  music: string;
  mediaUrl: string;
  avatarSeed: string;
  stats: {
    likes: string;
    comments: string;
    favorites: string;
    shares: string;
  };
};

export const feedItems: FeedItem[] = [
  {
    id: 'ai-tools',
    title: '3 个让我效率翻倍的 AI 小工具',
    description: '你停留了 18 秒，并收藏了这条教程。',
    tags: ['AI 工具', '效率', '教程'],
    signal: '收藏教程',
    tone: 'mint',
    creator: '效率研究所',
    music: '原声 · AI 工具箱的一分钟实验',
    mediaUrl: 'https://storage.googleapis.com/test-media-human/611953/611953_0.png',
    avatarSeed: 'ai-tools',
    stats: {
      likes: '7.9万',
      comments: '706',
      favorites: '6423',
      shares: '1.4万',
    },
  },
  {
    id: 'campus-project',
    title: '大学生做项目，最难的不是写代码',
    description: '你点赞了这条项目复盘。',
    tags: ['校园创业', '产品', '比赛'],
    signal: '点赞复盘',
    tone: 'violet',
    creator: '校园创业日记',
    music: 'City Lights · Demo 复盘现场',
    mediaUrl: 'https://storage.googleapis.com/test-media-human/611953/611953_1.png',
    avatarSeed: 'campus-startup',
    stats: {
      likes: '5.2万',
      comments: '412',
      favorites: '3120',
      shares: '8092',
    },
  },
  {
    id: 'city-walk',
    title: '下课后我走了一条没导航的路线',
    description: '你收藏了这条城市路线。',
    tags: ['城市漫游', '摄影', '生活方式'],
    signal: '收藏路线',
    tone: 'warm',
    creator: '城市漫游者',
    music: 'City Walk · 下课后的路线',
    mediaUrl: 'https://storage.googleapis.com/test-media-human/611953/611953_2.png',
    avatarSeed: 'city-walk',
    stats: {
      likes: '12.4万',
      comments: '1534',
      favorites: '1.2万',
      shares: '3.2万',
    },
  },
];
