import React from 'react';
import { Mountain, ThumbsUp, TrendingUp, Tv } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SuggestedQueries() {
  const navigate = useNavigate();

  const handleQueryClick = (query: string) => {
    navigate('/chat', { state: { initialQuery: query } });
  };

  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-3xl mt-6">
      <QueryCard
        icon={<Mountain className="text-green-500" />}
        title="World's greatest hikes"
        onClick={() => handleQueryClick("World's greatest hikes")}
      />
      <QueryCard
        icon={<ThumbsUp className="text-yellow-500" />}
        title="Why is magnesium glycinate trending?"
        onClick={() => handleQueryClick("Why is magnesium glycinate trending?")}
      />
      <QueryCard
        icon={<TrendingUp className="text-blue-500" />}
        title="Costco stock price analysis"
        onClick={() => handleQueryClick("Costco stock price analysis")}
      />
      <QueryCard
        icon={<Tv className="text-purple-500" />}
        title="Best TV shows May 2024"
        onClick={() => handleQueryClick("Best TV shows May 2024")}
      />
    </div>
  );
}

function QueryCard({ 
  icon, 
  title, 
  onClick 
}: { 
  icon: React.ReactNode; 
  title: string;
  onClick: () => void;
}) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#2D3135] rounded-xl p-4 text-left hover:bg-[#363A3F] transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#1A1D21] flex items-center justify-center">
          {icon}
        </div>
        <span className="text-white font-medium">{title}</span>
      </div>
    </button>
  );
}