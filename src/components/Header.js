import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ jobs }) => {
  const path = useLocation().pathname;
  let routeJob = '';
  if (path !== '/') {
    routeJob = path.slice(7);
  }

  return (
    <div className="container">
      <div className="row">
        {
          jobs.map(job => {
            return (
              <div className="col" key={job.name}>
                <Link to={`/class/${job.name}`} className="item">
                  <img
                    className={`img-fluid ${routeJob === job.name ? 'circular' : 'rounded disabled'}`}
                    alt={`${job.name}`}
                    src={`${process.env.PUBLIC_URL}/assets/${job.name}.png`}
                  />
                </Link>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Header;