type FeedProgressProps = {
  total: number;
  current: number;
};

export function FeedProgress({ total, current }: FeedProgressProps) {
  return (
    <div className="feed-progress" aria-label={`第 ${current + 1} 屏，共 ${total} 屏`}>
      {Array.from({ length: total }).map((_, index) => (
        <span key={index} className={index === current ? 'active' : ''} />
      ))}
    </div>
  );
}
