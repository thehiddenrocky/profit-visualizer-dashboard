import { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

interface ProfitSignal {
  value: string;
  position: Position;
}

interface AgentSwarmAnimationProps {
  profitSignals: ProfitSignal[];
}

export const AgentSwarmAnimation = ({ profitSignals }: AgentSwarmAnimationProps) => {
  const [dots, setDots] = useState<Position[]>([]);
  const [showValues, setShowValues] = useState(false);

  useEffect(() => {
    // Generate random positions for dots
    const generateDots = () => {
      const newDots = Array.from({ length: 25 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100
      }));
      setDots(newDots);
    };

    generateDots();

    // Show values periodically
    const valueInterval = setInterval(() => {
      setShowValues(true);
      setTimeout(() => setShowValues(false), 2000);
    }, 6000);

    return () => clearInterval(valueInterval);
  }, []);

  return (
    <div className="relative w-full h-full">
      <svg
        className="w-full h-full"
        style={{
          background: 'linear-gradient(180deg, rgba(229,222,255,0.2) 0%, rgba(255,255,255,0) 100%)'
        }}
      >
        {/* Dots */}
        {dots.map((dot, index) => (
          <g key={index}>
            <circle
              cx={`${dot.x}%`}
              cy={`${dot.y}%`}
              r="4"
              className="agent-dot"
              style={{
                fill: index % 2 === 0 ? '#E5DEFF' : '#FFDEE2',
                animationDelay: `${index * 0.2}s`
              }}
            />
            <circle
              cx={`${dot.x}%`}
              cy={`${dot.y}%`}
              r="6"
              className="animate-pulse"
              style={{
                fill: 'none',
                stroke: index % 2 === 0 ? '#E5DEFF' : '#FFDEE2',
                strokeWidth: '1',
                opacity: '0.5'
              }}
            />
          </g>
        ))}
      </svg>

      {/* Profit Values */}
      {showValues && profitSignals.map((signal, index) => (
        <div
          key={index}
          className="profit-popup absolute font-semibold text-lg"
          style={{
            left: `${signal.position.x}%`,
            top: `${signal.position.y}%`,
            color: '#9b87f5'
          }}
        >
          {signal.value}
        </div>
      ))}
    </div>
  );
};