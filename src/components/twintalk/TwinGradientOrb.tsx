type TwinGradientOrbProps = {
  className?: string;
};

export function TwinGradientOrb({ className = '' }: TwinGradientOrbProps) {
  return <div className={`twin-gradient-orb ${className}`} aria-hidden="true" />;
}
