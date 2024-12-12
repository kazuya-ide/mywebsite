import React from 'react';
import { Header1, Header2, Header3, Header4, Header5, Header6, Header7, Header8, Header9 } from './components/Headers';

function HeaderList() {
  return (
    <div className="container mx-auto px-8">
      <h1>HeaderList</h1>
      <div className="grid grid-cols-1 gap-20">
        <Header1 />
        <Header2 />
        <Header3 />
        <Header4 />
        <Header5 />
        <Header6 />
        <Header7 />
        <Header8 />
        <Header9 />
      </div>
    </div>
  );
}

export default HeaderList;