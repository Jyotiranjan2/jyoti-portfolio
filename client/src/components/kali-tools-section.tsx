import { Terminal, Shield, Search, Bug, Network, Lock } from "lucide-react";
import TerminalWindow from "./terminal-window";

const kaliTools = [
  {
    name: "Nmap",
    category: "Network Discovery",
    description: "Network exploration and security auditing",
    command: "nmap -sS -O target",
    icon: <Network className="w-8 h-8" />,
    color: "from-blue-600 to-blue-700",
    features: ["Port Scanning", "OS Detection", "Service Discovery"]
  },
  {
    name: "Metasploit",
    category: "Exploitation Framework",
    description: "Advanced penetration testing platform",
    command: "msfconsole",
    icon: <Bug className="w-8 h-8" />,
    color: "from-red-600 to-red-700",
    features: ["Exploit Database", "Payload Generation", "Post-Exploitation"]
  },
  {
    name: "Burp Suite",
    category: "Web Application Testing",
    description: "Comprehensive web vulnerability scanner",
    command: "burpsuite",
    icon: <Search className="w-8 h-8" />,
    color: "from-orange-600 to-orange-700",
    features: ["Proxy Intercept", "Scanner", "Intruder"]
  },
  {
    name: "Wireshark",
    category: "Network Protocol Analyzer",
    description: "Deep packet inspection and analysis",
    command: "wireshark",
    icon: <Network className="w-8 h-8" />,
    color: "from-purple-600 to-purple-700",
    features: ["Packet Capture", "Protocol Analysis", "Network Forensics"]
  },
  {
    name: "John the Ripper",
    category: "Password Cracking",
    description: "Fast password cracker with custom rules",
    command: "john --wordlist=rockyou.txt hashes.txt",
    icon: <Lock className="w-8 h-8" />,
    color: "from-yellow-600 to-yellow-700",
    features: ["Hash Cracking", "Dictionary Attacks", "Custom Rules"]
  },
  {
    name: "Aircrack-ng",
    category: "WiFi Security",
    description: "Complete WiFi security audit suite",
    command: "aircrack-ng capture.cap",
    icon: <Shield className="w-8 h-8" />,
    color: "from-green-600 to-green-700",
    features: ["WEP/WPA Cracking", "Packet Injection", "Monitoring"]
  }
];

export default function KaliToolsSection() {
  return (
    <section id="kali-tools" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 section-headline">Kali Linux Arsenal</h2>
          <p className="text-xl text-muted-foreground">Professional penetration testing tools and frameworks</p>
        </div>

        {/* Terminal Header */}
        <div className="mb-12">
          <TerminalWindow title="kali-tools.sh" className="max-w-4xl mx-auto p-6">
            <div className="text-terminal-green mb-2">
              $ cat /usr/share/kali-tools/categories.txt
            </div>
            <div className="text-muted-foreground ml-4 space-y-1">
              <div className="text-primary">┌─ Kali Linux v2024.4 ─ Penetration Testing Distribution</div>
              <div className="ml-2 text-muted-foreground">├── Network Analysis & Discovery</div>
              <div className="ml-2 text-muted-foreground">├── Web Application Security</div>
              <div className="ml-2 text-muted-foreground">├── Exploitation Frameworks</div>
              <div className="ml-2 text-muted-foreground">├── Password Attacks</div>
              <div className="ml-2 text-muted-foreground">├── Wireless Attacks</div>
              <div className="ml-2 text-muted-foreground">└── Digital Forensics</div>
              <div className="text-terminal-green mt-2">
                <span className="animate-pulse">█</span> Ready for engagement...
              </div>
            </div>
          </TerminalWindow>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kaliTools.map((tool, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${tool.color} rounded-xl p-6 card-flashy group relative overflow-hidden`}
              data-testid={`kali-tool-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
                  {tool.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white text-3xl">{tool.icon}</div>
                  <div className="text-white/60 text-sm font-mono">{tool.category}</div>
                </div>

                <h3 className="text-white text-2xl font-bold mb-2">{tool.name}</h3>
                <p className="text-white/80 text-sm mb-4">{tool.description}</p>

                {/* Terminal Command */}
                <div className="bg-black/30 rounded-lg p-3 mb-4 font-mono text-sm">
                  <div className="text-terminal-green mb-1">$ {tool.command}</div>
                  <div className="text-white/70 text-xs">
                    {tool.features.map((feature, idx) => (
                      <span key={idx} className="mr-3">✓ {feature}</span>
                    ))}
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/80 text-sm">
                    <div className="w-2 h-2 bg-terminal-green rounded-full mr-2 animate-pulse"></div>
                    Ready
                  </div>
                  <div className="text-white/60 text-xs">v2024.4</div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Info Terminal */}
        <div className="mt-16">
          <TerminalWindow title="penetration-testing.log" className="max-w-4xl mx-auto p-6">
            <div className="text-terminal-green mb-2">$ tail -f /var/log/pentest.log</div>
            <div className="text-muted-foreground ml-4 space-y-1">
              <div>[INFO] Kali Linux environment initialized</div>
              <div>[INFO] All tools updated to latest versions</div>
              <div>[INFO] Custom wordlists and payloads configured</div>
              <div>[INFO] Network interfaces configured for testing</div>
              <div className="text-primary">[SUCCESS] Ready for security assessments</div>
              <div className="text-terminal-green">
                $ echo "Ethical hacking for a secure digital world"
              </div>
              <div className="text-white/80 ml-4">Ethical hacking for a secure digital world</div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}