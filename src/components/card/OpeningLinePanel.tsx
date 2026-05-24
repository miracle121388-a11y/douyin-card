type OpeningLinePanelProps = {
  openingLine: string;
};

export function OpeningLinePanel({ openingLine }: OpeningLinePanelProps) {
  return (
    <section className="opening-line-panel">
      <span>推荐开场白</span>
      <p>{openingLine}</p>
    </section>
  );
}
