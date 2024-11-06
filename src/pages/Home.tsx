import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SuggestedQueries from '../components/SuggestedQueries';
import SearchScope from '../components/SearchScope';
import PageTransition from '../components/PageTransition';

export default function Home() {
  const [searchScope, setSearchScope] = useState<'asianxt' | 'global'>('asianxt');

  return (
    <PageTransition>
      <main className="flex-1 flex flex-col items-center px-8 py-16">
        <h1 className="text-white text-5xl font-medium mb-12">
          What do you want to know?
        </h1>
        <SearchScope value={searchScope} onChange={setSearchScope} />
        <SearchBar scope={searchScope} />
        <SuggestedQueries />
      </main>
    </PageTransition>
  );
}