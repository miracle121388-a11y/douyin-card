type TwinAvatarProps = {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
};

export function TwinAvatar({ label = '周', size = 'md' }: TwinAvatarProps) {
  return (
    <div className={`twin-avatar twin-avatar-${size}`} aria-label="抽象分身头像">
      <span>{label}</span>
    </div>
  );
}
