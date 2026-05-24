import { Music2 } from 'lucide-react';
import type { FeedItem } from '../../data/feedItems';
import { FeedActionRail } from './FeedActionRail';

type FeedStoryProps = {
  item: FeedItem;
};

export function FeedStory({ item }: FeedStoryProps) {
  return (
    <section className="douyin-video-slide">
      <img className="douyin-video-bg" src={item.mediaUrl} alt={item.title} referrerPolicy="no-referrer" />
      <div className={`douyin-video-color-wash wash-${item.tone}`} />
      <div className="douyin-video-bottom-gradient" />
      <FeedActionRail
        likes={item.stats.likes}
        comments={item.stats.comments}
        favorites={item.stats.favorites}
        shares={item.stats.shares}
        avatarSeed={item.avatarSeed}
        coverUrl={item.mediaUrl}
      />
      <div className="douyin-caption">
        <h3>@{item.creator}</h3>
        <p>{item.title}</p>
        <p className="douyin-signal">{item.description}</p>
        <div className="douyin-tag-row">
          {item.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        <div className="douyin-music-row">
          <Music2 size={15} />
          <span>{item.music}</span>
        </div>
      </div>
    </section>
  );
}
