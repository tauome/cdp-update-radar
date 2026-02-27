import { useState } from 'react';
import { vendors, quarters } from '@/data/cdpUpdates';
import { QuarterTabs } from '@/components/QuarterTabs';
import { VendorFilter } from '@/components/VendorFilter';
import { VendorCard } from '@/components/VendorCard';
import { SummaryBar } from '@/components/SummaryBar';
import { Search } from 'lucide-react';

const Index = () => {
  const [quarter, setQuarter] = useState(quarters[0]);
  const [selectedVendors, setSelectedVendors] = useState(vendors.map((v) => v.id));
  const [search, setSearch] = useState('');

  const toggleVendor = (id: string) => {
    setSelectedVendors((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  const filtered = vendors
    .filter((v) => selectedVendors.includes(v.id))
    .filter((v) => {
      if (!search) return true;
      const q = search.toLowerCase();
      const updates = v.updates[quarter] || [];
      return (
        v.name.toLowerCase().includes(q) ||
        updates.some(
          (u) =>
            u.title.toLowerCase().includes(q) ||
            u.description.toLowerCase().includes(q)
        )
      );
    });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container max-w-6xl py-8">
          <p className="text-xs font-medium tracking-widest uppercase text-accent mb-2">
            CDP Intelligence
          </p>
          <h1 className="text-3xl sm:text-4xl font-display text-foreground">
            Product Update Monitor
          </h1>
          <p className="text-muted-foreground mt-2 max-w-xl">
            Quarterly changelog across major CDP vendors — track new features,
            enhancements, and deprecations in one view.
          </p>
        </div>
      </header>

      {/* Controls */}
      <div className="container max-w-6xl py-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <QuarterTabs selected={quarter} onSelect={setQuarter} />
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search updates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-lg border bg-card text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
          </div>
        </div>
        <VendorFilter selected={selectedVendors} onToggle={toggleVendor} />
      </div>

      {/* Summary */}
      <div className="container max-w-6xl pb-4">
        <SummaryBar quarter={quarter} selectedVendors={selectedVendors} />
      </div>

      {/* Cards */}
      <div className="container max-w-6xl pb-16">
        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} quarter={quarter} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No vendors match your filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default Index;
