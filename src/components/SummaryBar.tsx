import { vendors, UpdateType, updateTypeConfig } from '@/data/cdpUpdates';

interface SummaryBarProps {
  quarter: string;
  selectedVendors: string[];
}

export const SummaryBar = ({ quarter, selectedVendors }: SummaryBarProps) => {
  const filtered = vendors.filter((v) => selectedVendors.includes(v.id));
  const allUpdates = filtered.flatMap((v) => v.updates[quarter] || []);

  const counts: Record<UpdateType, number> = { new: 0, enhancement: 0, deprecation: 0, breaking: 0 };
  allUpdates.forEach((u) => counts[u.type]++);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {(Object.keys(counts) as UpdateType[]).map((type) => {
        const config = updateTypeConfig[type];
        return (
          <div key={type} className={`rounded-lg px-4 py-3 ${config.className}`}>
            <p className="text-2xl font-bold font-display">{counts[type]}</p>
            <p className="text-xs font-medium opacity-80">{config.label}s</p>
          </div>
        );
      })}
    </div>
  );
};
