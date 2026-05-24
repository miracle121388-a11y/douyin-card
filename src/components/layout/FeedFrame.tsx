import type { ReactNode } from 'react';
import { Menu, Plus, Search } from 'lucide-react';

type FeedFrameProps = {
  children: ReactNode;
};

export function FeedFrame({ children }: FeedFrameProps) {
  return (
    <div className="feed-frame">
      <header className="douyin-top-nav">
        <Menu size={26} strokeWidth={2.5} />
        <nav aria-label="信息流频道">
          <span>关注</span>
          <span>发现</span>
          <strong>推荐</strong>
          <span>附近</span>
        </nav>
        <Search size={26} strokeWidth={2.5} />
      </header>
      {children}
      <footer className="douyin-bottom-nav">
        <button type="button" className="active">首页</button>
        <button type="button">朋友</button>
        <button type="button" className="create-button" aria-label="发布">
          <span><Plus size={18} strokeWidth={3.5} /></span>
        </button>
        <button type="button" className="message-button">消息</button>
        <button type="button">我</button>
      </footer>
    </div>
  );
}
