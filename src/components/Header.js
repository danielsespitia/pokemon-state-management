import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({ regions }) => {
  return (
    <header style={styles.header}>
      <ul style={styles.regionList}>
        {!!regions &&
          regions.map((region) => (
            <li key={region.name}>
              <Link style={styles.navList} to={`/${region.name}`}>
                {/* Region name capital first letter */}
                {region.name.charAt(0).toUpperCase() + region.name.slice(1)}
              </Link>
            </li>
          ))}
      </ul>
    </header>
  );
};

const styles = {
  header: {
    width: '100%',
    backgroundColor: '#61DBFB',
    height: '68px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  regionList: {
    listStyle: 'none',
    color: 'white',
    fontWeight: 'bold',
    padding: '0 100px',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 0,
  },
  navList: { textDecoration: 'none', color: '#fff' },
};
