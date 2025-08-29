import { CefrLevel } from '@/lib/types/common';

export const CEFR_COLORS: Record<CefrLevel, string> = {
  [CefrLevel.A1]: 'bg-green-100 text-green-800', 
  [CefrLevel.A2]: 'bg-lime-100 text-lime-800', 
  [CefrLevel.B1]: 'bg-yellow-100 text-yellow-800', 
  [CefrLevel.B2]: 'bg-orange-100 text-orange-800',
  [CefrLevel.C1]: 'bg-pink-100 text-pink-800',
  [CefrLevel.C2]: 'bg-red-100 text-red-800', 
};
