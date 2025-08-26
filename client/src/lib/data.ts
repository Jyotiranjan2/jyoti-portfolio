export const portfolioData = {
  personalInfo: {
    name: "Jyoti Ranjan Barik",
    title: "Cybersecurity Enthusiast",
    description: "Aspiring cybersecurity analyst with expertise in threat detection, vulnerability assessment, and security operations. Certified enthusiast with hands-on experience in modern security frameworks.",
    email: "jyoti.ranjan@example.com",
    linkedin: "https://www.linkedin.com/in/jyoti-ranjan-barik-131712284/",
    github: "https://github.com/Jyotiranjan2",
    tryhackme: "https://tryhackme.com/p/Darkyhunter",
    location: "India"
  },

  stats: {
    certifications: "8+",
    projects: "3+",
    experience: "2+ Years"
  },

  projects: [
    {
      id: 1,
      title: "Malware Identification Sharing Platform",
      description: "Developed a dashboard for static-level vulnerability identification using Wazuh agents, enabling enhanced threat detection and compliance.",
      category: "Cybersecurity",
      year: "2024",
      technologies: ["Python", "Bash", "Wazuh"],
      color: "from-red-600 to-red-700",
      icon: "🛡️",
      type: "security"
    },
    {
      id: 2,
      title: "Software Vulnerabilities in Open Source Python Program",
      description: "Designed a tool that analyzes source code Python packages for vulnerabilities using Abstract Syntax Trees (AST) and Control Flow Graphs (CFG), providing insights into potential security flaws.",
      category: "Security Analysis",
      year: "2024",
      technologies: ["Python", "Bash", "SAST"],
      color: "from-blue-600 to-purple-700",
      icon: "🐍",
      type: "analysis"
    },
    {
      id: 3,
      title: "Smart Agriculture Monitoring Network",
      description: "Headed the design of the SAMI18 Pole for Smart Agriculture Monitoring Network in the Smart India Hackathon 2024. The system monitors soil conditions, weather, and crop health to optimize farming practices.",
      category: "IoT & Agriculture",
      year: "2024",
      technologies: ["Python", "IoT", "Embedded Systems"],
      color: "from-green-600 to-emerald-700",
      icon: "🌱",
      type: "iot"
    }
  ],

  skills: {
    securityTools: [
      { name: "Wazuh", description: "SIEM & Threat Detection", icon: "🛡️", color: "from-red-600 to-red-700" },
      { name: "Nessus", description: "Vulnerability Scanner", icon: "🔍", color: "from-orange-600 to-orange-700" },
      { name: "Burp Suite", description: "Web Security Testing", icon: "🕷️", color: "from-purple-600 to-purple-700" },
      { name: "Metasploit", description: "Penetration Testing", icon: "🔧", color: "from-gray-600 to-gray-700" },
      { name: "Wireshark", description: "Network Analysis", icon: "🌐", color: "from-blue-600 to-blue-700" },
      { name: "Elastic Stack", description: "Log Analysis & SIEM", icon: "📊", color: "from-yellow-600 to-yellow-700" }
    ],
    programming: [
      { name: "Python", description: "Security Automation", icon: "🐍", color: "from-green-600 to-green-700" },
      { name: "Bash Scripting", description: "System Automation", icon: "⚡", color: "from-gray-600 to-gray-700" },
      { name: "PowerShell", description: "Windows Security", icon: "💻", color: "from-blue-600 to-blue-700" },
      { name: "SQL", description: "Database Security", icon: "🗄️", color: "from-purple-600 to-purple-700" }
    ],
    operatingSystems: [
      { name: "Kali Linux", description: "Penetration Testing OS", icon: "🐲", color: "from-green-600 to-green-700" },
      { name: "Ubuntu", description: "Server Administration", icon: "🐧", color: "from-orange-600 to-orange-700" },
      { name: "Windows Server", description: "Enterprise Security", icon: "🪟", color: "from-blue-600 to-blue-700" }
    ],
    cybersecurity: [
      { name: "Penetration Testing", description: "Ethical Hacking", icon: "🎯", color: "from-red-600 to-red-700" },
      { name: "Digital Forensics", description: "Evidence Analysis", icon: "🔍", color: "from-purple-600 to-purple-700" },
      { name: "Malware Analysis", description: "Threat Intelligence", icon: "🦠", color: "from-red-600 to-red-700" },
      { name: "Incident Response", description: "Security Operations", icon: "⚠️", color: "from-yellow-600 to-yellow-700" },
      { name: "Network Security", description: "Infrastructure Protection", icon: "🌐", color: "from-green-600 to-green-700" }
    ]
  },

  certifications: [
    {
      name: "CEH v13 - Certified Ethical Hacker (Training)",
      issuer: "EC-Council",
      date: "2024 - Ongoing",
      type: "Professional Training"
    },
    {
      name: "Cybersecurity Job Simulation",
      issuer: "MasterCard",
      date: "February 2024",
      type: "Job Simulation"
    },
    {
      name: "Cybersecurity Analyst Job Simulation", 
      issuer: "Tata",
      date: "February 2024",
      type: "Job Simulation"
    },
    {
      name: "Cybersecurity Internship",
      issuer: "SlashMark",
      date: "January - April 2024",
      type: "Internship"
    },
    {
      name: "Foundation of Ethical Hacking",
      issuer: "Udacity",
      date: "January 2025",
      type: "Course Completion"
    },
    {
      name: "Google Cybersecurity Foundation",
      issuer: "Google x Coursera",
      date: "2024",
      type: "Course Completion"
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "September 2023",
      type: "Badge Certification"
    },
    {
      name: "Advent of Cyber",
      issuer: "TryHackMe",
      date: "December 2024",
      type: "Challenge Completion"
    },
    {
      name: "CyberWeek Challenge",
      issuer: "CyberWeek Platform",
      date: "2024",
      type: "Competition"
    },
    {
      name: "Hackers Meetup Participation",
      issuer: "Local Cybersecurity Community",
      date: "2024",
      type: "Community Event"
    },
    {
      name: "IIT Jammu CTF",
      issuer: "IIT Jammu",
      date: "2024",
      type: "CTF Competition"
    },
    {
      name: "SkillFront Technical Assessment",
      issuer: "SkillFront",
      date: "2024",
      type: "Technical Certification"
    },
    {
      name: "ECC Evaluation Certificate",
      issuer: "ECC Council",
      date: "2024",
      type: "Assessment"
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "GIET University",
      period: "2021 - 2025",
      description: "Final year student specializing in cybersecurity and software development"
    },
    {
      degree: "Intermediate (Science)",
      institution: "Government Higher Secondary School, Rourkela",
      period: "2019 - 2021",
      description: "Science stream with focus on Mathematics and Computer Science"
    },
    {
      degree: "High School (10th)", 
      institution: "Government High School, Rourkela",
      period: "2018 - 2019",
      description: "Secondary education with excellent academic performance"
    }
  ],

  achievements: [
    {
      title: "Smart India Hackathon 2024",
      description: "Team Leader for SAMI18 Pole - Smart Agriculture Monitoring Network",
      year: "2024",
      type: "Competition"
    },
    {
      title: "Smart India Hackathon 2025",
      description: "Internal Finalist - Advanced cybersecurity solutions development",
      year: "2025",
      type: "Competition"
    },
    {
      title: "Smart India Hackathon 2023",
      description: "Internal Winner - Innovative security framework implementation",
      year: "2023",
      type: "Competition"
    },
    {
      title: "TCS HackQuest Season 9",
      description: "Participant - Solved 7 complex cybersecurity challenges",
      year: "2025",
      type: "Competition"
    },
    {
      title: "Droid Blitz Amphibious Robo Competition",
      description: "Finalist at Sahiti 2025, IIT Kharagpur - Amphibious robotics challenge",
      year: "2025",
      type: "Competition"
    },
    {
      title: "NCIIPC Pentathon 2024",
      description: "Secured Top 350 (AICTE CTF) - National cybersecurity competition",
      year: "2024",
      type: "Competition"
    },
    {
      title: "Robo War Winner",
      description: "1st Place Winner at GIET University TechFest - Robotics competition",
      year: "2025",
      type: "Competition"
    },
    {
      title: "Line Follower Competition",
      description: "2nd Place - Secured 2nd place in Line Follower Robotics Event at Tech Fest 2024",
      year: "2024",
      type: "Competition"
    },
    {
      title: "Cybersecurity Research Publication",
      description: "Co-authored research on automated vulnerability detection in Python applications",
      year: "2024",
      type: "Research"
    }
  ],

  experience: [
    {
      title: "Research Intern",
      company: "NIT Rourkela",
      period: "2024",
      description: "Conducted research on Python application security, focusing on automated vulnerability detection using AST and CFG analysis.",
      type: "internship"
    },
    {
      title: "Cybersecurity Intern",
      company: "SlashMark",
      period: "January 2024 - April 2024",
      description: "Completed comprehensive cybersecurity internship program covering threat analysis, security operations, and incident response.",
      type: "internship"
    }
  ]
};
