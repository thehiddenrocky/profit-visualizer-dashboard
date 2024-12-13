interface EuroSignalBarsProps {
  amount: number;
}

export const EuroSignalBars = ({ amount }: EuroSignalBarsProps) => {
  const getBarCount = () => {
    if (amount >= 50000) return 4;
    if (amount >= 25000) return 3;
    if (amount >= 10000) return 2;
    return 1;
  };

  const bars = Array(4).fill(0);
  const activeCount = getBarCount();

  return (
    <div className="flex items-center gap-0.5">
      {bars.map((_, index) => (
        <div
          key={index}
          className={`w-1.5 h-${index * 1 + 2} rounded-sm ${
            index < activeCount ? 'bg-gray-600' : 'bg-gray-200'
          }`}
        />
      ))}
      <span className="ml-1 text-gray-600 text-xs">€</span>
    </div>
  );
};