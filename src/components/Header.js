import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ jobs }) => {
  return (
    <div className="ui nine column stackable grid">
      {
        jobs.map(job => {
          return (
            <div className="column" key={job.name}>
              <Link to={`/class/${job.name}`} className="item">
                <img
                  className={`ui medium circular image`}
                  alt={`${job.name}`}
                  src={`${process.env.PUBLIC_URL}/assets/${job.name}.png`}
                />
              </Link>
            </div>
          );
        })
      }
    </div>
  );
};

export default Header;