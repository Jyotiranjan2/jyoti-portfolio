export default function KaliLinuxImage() {
  return (
    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center shadow-lg">
      <div className="relative w-16 h-16">
        {/* Kali Linux Dragon Logo approximation */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full text-white"
          fill="currentColor"
        >
          {/* Dragon head shape */}
          <path d="M20 50 C20 30, 35 20, 50 20 C65 20, 80 30, 80 50 C80 55, 78 60, 75 63 L70 68 C65 73, 60 75, 50 75 C40 75, 35 73, 30 68 L25 63 C22 60, 20 55, 20 50 Z" />
          
          {/* Eyes */}
          <circle cx="40" cy="45" r="3" fill="black" />
          <circle cx="60" cy="45" r="3" fill="black" />
          
          {/* Horns/spikes */}
          <path d="M35 25 L32 15 L38 20 Z" />
          <path d="M50 20 L48 10 L52 15 Z" />
          <path d="M65 25 L62 15 L68 20 Z" />
          
          {/* Mouth/fangs */}
          <path d="M45 60 L42 65 L48 62 Z" />
          <path d="M55 60 L52 65 L58 62 Z" />
        </svg>
      </div>
    </div>
  );
}