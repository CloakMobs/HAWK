import React, { useEffect, useState } from 'react';
import filingService from '../services/filingService';

const FilingList = () => {
  const [filings, setFilings] = useState([]);

  useEffect(() => {
    // Fetch the filing data from the backend API and update the state
    filingService.getAllFilings()
      .then(data => setFilings(data))
      .catch(error => console.error('Error fetching filings:', error));
  }, []);

  return (
    <div>
      {/* Render the list of filings in a table or list format */}
    </div>
  );
};

export default FilingList;