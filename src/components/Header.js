import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({ regions }) => {
  return (
    <header className="header">
      <ul className="region-list">
        {!!regions &&
          regions.map((region) => (
            <li key={region.name}>
              <Link className="nav-item" to={`/${region.name}`}>
                {/* Region name capital first letter */}
                {region.name.charAt(0).toUpperCase() + region.name.slice(1)}
              </Link>
            </li>
          ))}
      </ul>
    </header>
  );
};
