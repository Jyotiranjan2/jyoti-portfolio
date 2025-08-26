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
    <div className={`bg-gradient-to-br ${color} rounded-xl ${sizeClasses[size]} card-flashy group relative overflow-hidden`} data-testid={`skill-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 opacity-30 text-4xl flex items-center justify-center">
          {icon}
        </div>
      </div>

      <div className={`relative z-10 bg-black/20 p-4 rounded-lg mb-4`}>
        <div className="text-white/80 text-2xl mb-2">{icon}</div>
        <h4 className="text-white text-xl font-bold mb-2">{name}</h4>
        <p className="text-white/80 text-sm">{description}</p>
      </div>
      <div className="relative z-10 bg-black/30 rounded-lg p-3 font-mono text-sm">
        <div className="text-terminal-green mb-1">$ ./deploy {name.toLowerCase().replace(/\s+/g, '_')}</div>
        <div className="text-white/80 text-xs">✓ Ready for production</div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}
