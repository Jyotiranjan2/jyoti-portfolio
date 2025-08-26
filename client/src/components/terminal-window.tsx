import { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalWindow({ title = "terminal", children, className = "" }: TerminalWindowProps) {
  return (
    <div className={`terminal-window rounded-xl ${className}`}>
      <div className="flex items-center space-x-2 mb-4 p-4 pb-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 text-sm ml-4">~/{title}</span>
      </div>
      <div className="px-4 pb-4 font-mono text-sm">
        {children}
      </div>
    </div>
  );
}
