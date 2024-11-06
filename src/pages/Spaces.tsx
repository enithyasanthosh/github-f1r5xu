import React from 'react';
import { Upload, Pencil } from 'lucide-react';

export default function Spaces() {
  return (
    <div className="flex-1 max-w-6xl mx-auto px-8 py-12">
      <h1 className="text-white text-4xl font-medium mb-12">Workspace</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#2D3135] rounded-xl p-8 hover:bg-[#363A3F] transition-colors cursor-pointer">
          <div className="w-12 h-12 rounded-lg bg-[#1A1D21] flex items-center justify-center mb-4">
            <Upload className="text-blue-400" size={24} />
          </div>
          <h3 className="text-white font-medium text-xl mb-3">Upload Document</h3>
          <p className="text-gray-400">
            Upload your documents and let Asianet News Pro analyze and answer your questions
          </p>
        </div>

        <div className="bg-[#2D3135] rounded-xl p-8 hover:bg-[#363A3F] transition-colors cursor-pointer">
          <div className="w-12 h-12 rounded-lg bg-[#1A1D21] flex items-center justify-center mb-4">
            <Pencil className="text-green-400" size={24} />
          </div>
          <h3 className="text-white font-medium text-xl mb-3">Writing Assistant</h3>
          <p className="text-gray-400">
            Get help with writing, editing, and improving your content
          </p>
        </div>
      </div>
    </div>
  );
}