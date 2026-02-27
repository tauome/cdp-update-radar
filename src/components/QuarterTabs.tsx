import { quarters } from '@/data/cdpUpdates';

interface QuarterTabsProps {
  selected: string;
  onSelect: (q: string) => void;
}

export const QuarterTabs = ({ selected, onSelect }: QuarterTabsProps) => (
  <div className="flex gap-1 bg-secondary rounded-lg p-1">
    {quarters.map((q) => (
      <button
        key={q}
        onClick={() => onSelect(q)}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
          selected === q
            ? 'bg-card text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        {q}
      </button>
    ))}
  </div>
);
