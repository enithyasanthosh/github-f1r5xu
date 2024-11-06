import React from 'react';
import * as Slider from '@radix-ui/react-slider';

interface TimeSliderProps {
  value: { start: number; end: number };
  onChange: (value: { start: number; end: number }) => void;
}

export default function TimeSlider({ value, onChange }: TimeSliderProps) {
  const formatTime = (hour: number) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:00 ${period}`;
  };

  return (
    <div className="space-y-4">
      <div className="relative pt-6">
        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          value={[value.start, value.end]}
          onValueChange={([start, end]) => onChange({ start, end })}
          min={0}
          max={24}
          step={1}
          minStepsBetweenThumbs={1}
        >
          <Slider.Track className="bg-[#1A1D21] relative grow rounded-full h-2">
            <Slider.Range className="absolute bg-cyan-400 rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb className="block w-5 h-5 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <Slider.Thumb className="block w-5 h-5 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        </Slider.Root>
        
        <div className="flex justify-between mt-2 text-sm text-gray-400">
          {Array.from({ length: 9 }, (_, i) => i * 3).map((hour) => (
            <span key={hour}>{hour}:00</span>
          ))}
        </div>
      </div>

      <div className="text-white text-center">
        {formatTime(value.start)} - {formatTime(value.end)}
      </div>
    </div>
  );
}