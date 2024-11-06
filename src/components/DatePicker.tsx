import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Calendar as CalendarIcon } from 'lucide-react';

interface DatePickerProps {
  value: Date;
  onChange: (date: Date) => void;
}

export default function DatePicker({ value, onChange }: DatePickerProps) {
  const minDate = new Date();
  minDate.setDate(minDate.getDate() - 7);

  const isDateSelectable = (date: Date) => {
    const today = new Date();
    return date >= minDate && date <= today;
  };

  const generateCalendarDays = () => {
    const days = [];
    const currentDate = new Date(value.getFullYear(), value.getMonth(), 1);
    const lastDay = new Date(value.getFullYear(), value.getMonth() + 1, 0);

    while (currentDate <= lastDay) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return days;
  };

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="w-full bg-[#1A1D21] text-white rounded-lg py-3 px-4 flex items-center justify-between hover:bg-[#252A2E] transition-colors">
          <span>{value.toLocaleDateString()}</span>
          <CalendarIcon size={20} className="text-gray-400" />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className="bg-[#2D3135] rounded-xl p-4 shadow-xl" sideOffset={5}>
          <div className="grid grid-cols-7 gap-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <div key={day} className="text-center text-sm text-gray-400 py-2">
                {day}
              </div>
            ))}
            
            {generateCalendarDays().map((date, i) => {
              const isSelectable = isDateSelectable(date);
              const isSelected = date.toDateString() === value.toDateString();
              
              return (
                <button
                  key={i}
                  onClick={() => isSelectable && onChange(date)}
                  disabled={!isSelectable}
                  className={`
                    rounded-lg p-2 text-sm
                    ${isSelected ? 'bg-cyan-400 text-white' : 'text-gray-400'}
                    ${isSelectable ? 'hover:bg-[#363A3F]' : 'opacity-50 cursor-not-allowed'}
                  `}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}