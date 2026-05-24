import { Bookmark, Heart, MessageCircle, Music2, Plus, Send, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';

type FeedActionRailProps = {
  likes?: string;
  comments?: string;
  favorites?: string;
  shares?: string;
  avatarSeed?: string;
  coverUrl?: string;
  isTwinTalkCard?: boolean;
};

export function FeedActionRail({
  likes = '8.2万',
  comments = '928',
  favorites = '5200',
  shares = '1.1万',
  avatarSeed = 'twintalk',
  coverUrl = '',
  isTwinTalkCard = false,
}: FeedActionRailProps) {
  return (
    <aside className="feed-action-rail">
      <div className="douyin-avatar-button">
        {isTwinTalkCard ? (
          <div className="douyin-agent-avatar"><Sparkles size={18} /></div>
        ) : (
          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${avatarSeed}`} alt="" />
        )}
        <span><Plus size={11} strokeWidth={4} /></span>
      </div>
      <ActionButton label="点赞" value={likes}>
        <Heart size={31} fill="currentColor" strokeWidth={0} />
      </ActionButton>
      <ActionButton label="评论" value={comments}>
        <MessageCircle size={30} fill="currentColor" strokeWidth={1.8} />
      </ActionButton>
      <ActionButton label="收藏" value={favorites}>
        <Bookmark size={29} fill="currentColor" strokeWidth={0} />
      </ActionButton>
      <ActionButton label="转发" value={shares}>
        <Send size={30} fill="currentColor" strokeWidth={0} />
      </ActionButton>
      <div className="music-record" aria-label="音乐">
        {coverUrl ? <img src={coverUrl} alt="" /> : <Music2 size={16} />}
      </div>
    </aside>
  );
}

function ActionButton({ label, value, children }: { label: string; value: string; children: ReactNode }) {
  return (
    <button type="button" className="douyin-action-button" aria-label={label}>
      <span>{children}</span>
      <strong>{value}</strong>
    </button>
  );
}
