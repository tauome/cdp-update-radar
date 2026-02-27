import { VendorData, ProductUpdate } from '@/data/cdpUpdates';
import { UpdateBadge } from './UpdateBadge';

interface VendorCardProps {
  vendor: VendorData;
  quarter: string;
}

export const VendorCard = ({ vendor, quarter }: VendorCardProps) => {
  const updates = vendor.updates[quarter] || [];

  if (updates.length === 0) {
    return (
      <div className="bg-card rounded-lg border p-6 opacity-60">
        <VendorHeader vendor={vendor} />
        <p className="text-sm text-muted-foreground italic mt-4">No updates this quarter.</p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg border p-6 animate-fade-in">
      <VendorHeader vendor={vendor} count={updates.length} />
      <div className="mt-5 space-y-4">
        {updates.map((update) => (
          <UpdateItem key={update.id} update={update} />
        ))}
      </div>
    </div>
  );
};

const VendorHeader = ({ vendor, count }: { vendor: VendorData; count?: number }) => (
  <div className="flex items-center gap-3">
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold shrink-0"
      style={{ backgroundColor: vendor.color, color: 'white' }}
    >
      {vendor.logo}
    </div>
    <div className="min-w-0">
      <h3 className="font-display text-lg leading-tight truncate">{vendor.name}</h3>
      {count !== undefined && (
        <p className="text-xs text-muted-foreground">{count} update{count !== 1 ? 's' : ''}</p>
      )}
    </div>
  </div>
);

const UpdateItem = ({ update }: { update: ProductUpdate }) => (
  <div className="border-l-2 border-border pl-4 py-1">
    <div className="flex items-start justify-between gap-2 mb-1">
      <h4 className="text-sm font-semibold leading-snug">{update.title}</h4>
      <UpdateBadge type={update.type} />
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">{update.description}</p>
  </div>
);
