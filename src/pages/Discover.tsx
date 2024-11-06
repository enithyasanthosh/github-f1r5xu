import React, { useState } from 'react';
import { Star, Cpu, Wallet2, GlobeIcon, Trophy, Clapperboard, Calendar, Clock } from 'lucide-react';
import TimeSlider from '../components/TimeSlider';
import DatePicker from '../components/DatePicker';
import LoadingSpinner from '../components/LoadingSpinner';
import PageTransition from '../components/PageTransition';

const categories = [
  { id: 'top', icon: <Star size={18} />, label: 'Top' },
  { id: 'tech', icon: <Cpu size={18} />, label: 'Tech & Science' },
  { id: 'finance', icon: <Wallet2 size={18} />, label: 'Finance' },
  { id: 'politics', icon: <GlobeIcon size={18} />, label: 'Politics' },
  { id: 'sports', icon: <Trophy size={18} />, label: 'Sports' },
  { id: 'entertainment', icon: <Clapperboard size={18} />, label: 'Entertainment' },
];

interface Article {
  id: number;
  title: string;
  excerpt: string;
  source: string;
  author: string;
  timestamp: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'The Oregon Trail Movie',
    excerpt: 'Apple is in the early stages of developing an action-comedy film adaptation of the classic educational game "The Oregon Trail," directed by Will Speck and Josh Gordon...',
    source: 'The Hollywood Reporter',
    author: 'elymc',
    timestamp: '2024-05-10T14:30:00Z'
  },
];

export default function Discover() {
  const [selectedCategory, setSelectedCategory] = useState('top');
  const [timeRange, setTimeRange] = useState({ start: 0, end: 24 });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const handleApplyFilters = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="flex-1 max-w-6xl mx-auto px-8 py-8">
        <h1 className="text-white text-4xl font-medium mb-8">Discover</h1>

        <div className="space-y-6 mb-8">
          {/* Categories */}
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-[#2D3135] text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Time and Date Filters */}
          <div className="bg-[#2D3135] rounded-xl p-6 space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <Clock size={20} className="text-cyan-400" />
              <h3 className="text-white font-medium">Time Range</h3>
            </div>
            <TimeSlider value={timeRange} onChange={setTimeRange} />

            <div className="flex items-center gap-4 mb-4">
              <Calendar size={20} className="text-cyan-400" />
              <h3 className="text-white font-medium">Date</h3>
            </div>
            <DatePicker value={selectedDate} onChange={setSelectedDate} />

            <button
              onClick={handleApplyFilters}
              className="w-full bg-[#00A3A3] hover:bg-[#00B3B3] text-white rounded-lg py-3 font-medium transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>

        {/* Articles */}
        {isLoading ? (
          <div className="flex justify-center py-12">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="grid gap-6">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-[#1E2327] rounded-xl p-6 hover:bg-[#252A2E] transition-colors"
              >
                <div className="flex flex-col">
                  <h2 className="text-white text-xl font-medium mb-2">{article.title}</h2>
                  <p className="text-gray-400 mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-600" />
                    <span className="text-gray-400 text-sm">{article.author}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 text-sm">
                      {new Date(article.timestamp).toLocaleTimeString()}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-cyan-400 text-sm">{article.source}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
}