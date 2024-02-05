// Search.tsx

'use client'

import { useState } from 'react';
import { IoMdSchool } from 'react-icons/io';

const Search = () => {
  const [selectedUniversity, setSelectedUniversity] = useState('University of Southern California');

  return (
    <div className="flex-grow flex items-center border border-gray-300 rounded-lg overflow-hidden mx-4">
      <IoMdSchool className="text-gray-500 mx-2" size={24} />
      <select 
        value={selectedUniversity}
        onChange={(e) => setSelectedUniversity(e.target.value)}
        className="appearance-none bg-transparent py-2 px-3 w-full focus:outline-none"
        style={{ color: '#343E59' }}
      >
        <option value="University of Southern California">University of Southern California</option>
      </select>
    </div>
  );
};

export default Search;
