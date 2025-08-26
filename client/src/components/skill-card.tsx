interface SkillCardProps {
  name: string;
  description: string;
  icon: string;
  color: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function SkillCard({ name, description, icon, color, size = 'md' }: SkillCardProps) {
  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div className={`bg-gradient-to-br ${color} rounded-xl ${sizeClasses[size]} card-hover`} data-testid={`skill-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className={`bg-black/20 p-4 rounded-lg mb-4`}>
        <div className="text-white/80 text-2xl mb-2">{icon}</div>
        <h4 className="text-white text-xl font-bold mb-2">{name}</h4>
        <p className="text-white/80 text-sm">{description}</p>
      </div>
      <div className="bg-black/30 rounded-lg p-3 font-mono text-sm">
        <div className="text-terminal-green mb-1">$ ./deploy {name.toLowerCase().replace(/\s+/g, '_')}</div>
        <div className="text-white/80 text-xs">✓ Ready for production</div>
      </div>
    </div>
  );
}
