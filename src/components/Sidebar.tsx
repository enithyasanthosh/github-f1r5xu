import React, { useState } from 'react';
import { Home, Compass, Box, Library, LogIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  isCollapsed: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, text, isCollapsed }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
        isActive
          ? 'bg-[#2D3135] text-white'
          : 'text-gray-400 hover:bg-[#2D3135] hover:text-white'
      }`
    }
  >
    {icon}
    {!isCollapsed && <span>{text}</span>}
  </NavLink>
);

export default function Sidebar() {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.div
      animate={{ width: isCollapsed ? '5rem' : '16rem' }}
      transition={{ duration: 0.3 }}
      className="h-screen bg-[#1A1D21] border-r border-gray-800 p-4 flex flex-col"
    >
      <div className="flex items-center justify-between mb-6">
        {!isCollapsed && (
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="text-cyan-400 text-2xl">⬡</div>
            <span className="text-white text-xl font-semibold">AsiaNxt News Pro</span>
          </button>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-[#2D3135] rounded-lg transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="text-gray-400" />
          ) : (
            <ChevronLeft className="text-gray-400" />
          )}
        </button>
      </div>
      
      <button className="w-full bg-[#2D3135] text-white rounded-full py-2 px-4 mb-6 flex items-center justify-center gap-2">
        {!isCollapsed && <span>New Thread</span>}
        <span className="text-gray-400 text-sm">{!isCollapsed && 'Ctrl I'}</span>
      </button>

      <nav className="flex flex-col gap-2">
        <NavItem to="/" icon={<Home size={20} />} text="Home" isCollapsed={isCollapsed} />
        <NavItem to="/discover" icon={<Compass size={20} />} text="Discover" isCollapsed={isCollapsed} />
        <NavItem to="/spaces" icon={<Box size={20} />} text="Spaces" isCollapsed={isCollapsed} />
        <NavItem to="/library" icon={<Library size={20} />} text="Library" isCollapsed={isCollapsed} />
      </nav>

      <button 
        onClick={() => navigate('/login')}
        className="mt-4 w-full bg-[#00A3A3] hover:bg-[#00B3B3] text-white rounded-lg py-2 px-4 flex items-center gap-2 justify-center transition-colors"
      >
        <LogIn size={20} />
        {!isCollapsed && <span>Sign In</span>}
      </button>
    </motion.div>
  );
}