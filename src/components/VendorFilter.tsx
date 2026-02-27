import { vendors } from '@/data/cdpUpdates';

interface VendorFilterProps {
  selected: string[];
  onToggle: (id: string) => void;
}

export const VendorFilter = ({ selected, onToggle }: VendorFilterProps) => (
  <div className="flex flex-wrap gap-2">
    {vendors.map((v) => {
      const active = selected.includes(v.id);
      return (
        <button
          key={v.id}
          onClick={() => onToggle(v.id)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
            active
              ? 'border-foreground/20 bg-foreground text-primary-foreground'
              : 'border-border bg-card text-muted-foreground hover:text-foreground'
          }`}
        >
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: v.color }}
          />
          {v.name.split(' ')[0]}
        </button>
      );
    })}
  </div>
);
