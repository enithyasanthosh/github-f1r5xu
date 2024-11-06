import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Spaces from './pages/Spaces';
import Login from './pages/Login';
import Chat from './pages/Chat';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-[#1A1D21]">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/library" element={<div className="p-8 text-white">Library Page</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}