import React from 'react';
import { Chrome } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Login() {
  return (
    <PageTransition>
      <div className="flex-1 flex items-center justify-center bg-[#1A1D21] p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-white text-center mb-2">
            Welcome to AsiaNxt News Pro
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Sign in to continue
          </p>

          <button className="w-full bg-white text-black rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
            <Chrome size={20} />
            Continue with Google
          </button>
        </div>
      </div>
    </PageTransition>
  );
}