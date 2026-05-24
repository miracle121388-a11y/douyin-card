import { TwinButton } from '../twintalk/TwinButton';

type CardActionBarProps = {
  onOpenChat: () => void;
  onOpenReport: () => void;
  onLater: () => void;
};

export function CardActionBar({ onOpenChat, onOpenReport, onLater }: CardActionBarProps) {
  return (
    <section className="card-action-bar">
      <TwinButton onClick={onOpenChat}>让分身先聊聊</TwinButton>
      <TwinButton variant="secondary" onClick={onOpenReport}>
        查看完整同频报告
      </TwinButton>
      <TwinButton variant="ghost" onClick={onLater}>
        稍后再看
      </TwinButton>
    </section>
  );
}
