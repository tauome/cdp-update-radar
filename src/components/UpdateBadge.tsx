import { UpdateType, updateTypeConfig } from '@/data/cdpUpdates';

export const UpdateBadge = ({ type }: { type: UpdateType }) => {
  const config = updateTypeConfig[type];
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}>
      {config.label}
    </span>
  );
};
