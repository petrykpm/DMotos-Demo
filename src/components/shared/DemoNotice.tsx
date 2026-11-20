import { Info } from 'lucide-react';

export function DemoNotice() {
  return (
    <div className="sticky top-0 z-[90] flex items-center justify-center gap-2 border-b border-amber-500/30 bg-amber-500/10 px-3 py-2 text-center text-[11px] font-semibold text-amber-300">
      <Info size={14} />
      AMBIENTE DE DEMONSTRAÇÃO — dados fictícios salvos somente neste navegador
    </div>
  );
}
