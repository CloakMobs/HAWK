import React from 'react';
import { Link } from 'react-router-dom';

const Institutions = () => {
  return (
    <div>
      <h2>Institutions</h2>
      {/* Render a list of institutions and provide links to view individual institution details */}
      <ul>
        <li><Link to="/institutions/1">Institution 1</Link></li>
        <li><Link to="/institutions/2">Institution 2</Link></li>
        {/* Add more institutions */}
      </ul>
    </div>
  );
};

export default Institutions;