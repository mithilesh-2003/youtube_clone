import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const [searchInput, setSearchInput] = useState('');
  return (
    <div className="sticky top-0 bg-black h-16 text-white">
      <div className="max-w-7xl container mx-auto px-3 flex justify-between gap-2 items-center h-full">
        <Link to="/" className="font-semibold text-lg">
          Youtube Clone
        </Link>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Search..."
            className="py-1.5 pl-2 rounded-sm text-gray-600"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button onClick={() => props.searchVideo(searchInput)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
