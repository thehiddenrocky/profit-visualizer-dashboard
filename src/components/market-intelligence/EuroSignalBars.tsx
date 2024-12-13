import { Euro } from 'lucide-react';

interface EuroSignalBarsProps {
  amount: number;
}

export const EuroSignalBars = ({ amount }: EuroSignalBarsProps) => {
  const getSignalBars = (amount: number) => {
    if (amount >= 8000) return 4;
    if (amount >= 6000) return 3;
    if (amount >= 4000) return 2;
    return 1;
  };

  const bars = getSignalBars(amount);
  
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-end gap-0.5 h-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`w-1.5 rounded-sm transition-all duration-300 ${
              index < bars 
                ? 'bg-green-600' 
                : 'bg-gray-200'
            }`}
            style={{
              height: `${(index + 1) * 25}%`
            }}
          />
        ))}
      </div>
      <Euro className="h-4 w-4 text-green-600" />
    </div>
  );
};