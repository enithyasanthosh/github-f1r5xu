import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import { Globe, Search } from 'lucide-react';

interface SearchScopeProps {
  value: 'asianxt' | 'global';
  onChange: (value: 'asianxt' | 'global') => void;
}

export default function SearchScope({ value, onChange }: SearchScopeProps) {
  return (
    <div className="flex items-center justify-center gap-6 mb-8">
      <div className="flex items-center gap-2">
        <Search size={18} className={value === 'asianxt' ? 'text-cyan-400' : 'text-gray-400'} />
        <span className={value === 'asianxt' ? 'text-white' : 'text-gray-400'}>AsiaNxt</span>
      </div>

      <Switch.Root
        checked={value === 'global'}
        onCheckedChange={(checked) => onChange(checked ? 'global' : 'asianxt')}
        className="w-14 h-7 bg-[#2D3135] rounded-full relative data-[state=checked]:bg-[#2D3135] outline-none cursor-pointer"
      >
        <Switch.Thumb className="block w-6 h-6 bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[30px] shadow-lg" />
      </Switch.Root>

      <div className="flex items-center gap-2">
        <Globe size={18} className={value === 'global' ? 'text-cyan-400' : 'text-gray-400'} />
        <span className={value === 'global' ? 'text-white' : 'text-gray-400'}>Global</span>
      </div>
    </div>
  );
}