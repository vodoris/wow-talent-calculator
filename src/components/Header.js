import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ jobs }) => {
  const path = useLocation().pathname;
  let routeJob = '';
  if (path !== '/') {
    routeJob = path.slice(7);
  }

  return (
    <div className="ui stackable nine column stackable grid">
      <div className="row">
        {
          jobs.map(job => {
            return (
              <div className="column" key={job.name}>
                <Link to={`/class/${job.name}`} className="item">
                  <img
                    className={`ui medium ${routeJob === job.name ? 'circular' : 'rounded disabled'} image`}
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