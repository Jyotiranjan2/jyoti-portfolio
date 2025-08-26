interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  year: string;
  technologies: string[];
  color: string;
  icon: string;
}

export default function ProjectCard({ title, description, category, year, technologies, color, icon }: ProjectCardProps) {
  return (
    <div className={`bg-gradient-to-br ${color} rounded-xl p-6 card-flashy group relative overflow-hidden`} data-testid={`project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        <span className="text-white/70 text-sm">~/projects/{title.toLowerCase().replace(/\s+/g, '-')}.md</span>
      </div>
      
      <div className="bg-black/20 p-4 rounded-lg mb-4">
        <div className="text-white/80 text-2xl mb-2">{icon}</div>
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/80 text-sm mb-2">{category} • {year}</p>
      </div>
      
      <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
        <div className="text-terminal-green mb-2">$ cat README.md</div>
        <div className="text-white/80 text-xs mb-3">
          {description}
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-black/30 text-white/80 px-2 py-1 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 opacity-30 text-6xl flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}
