import React from 'react';
import FilingList from '../components/FilingList';

const Filings = () => {
  return (
    <div>
      <h2>13F Filings</h2>
      {/* Render the FilingList component and any necessary filters or search functionality */}
      <FilingList />
    </div>
  );
};

export default Filings;