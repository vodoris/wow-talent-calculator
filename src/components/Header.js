import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ jobs }) => {
  const path = useLocation().pathname;
  const [activeJob, setActiveJob] = useState(null);
  if (activeJob === null && path !== '/') {
    let routeJob = path.replace('/class/', '');
    setActiveJob(jobs.find(job => job.name === routeJob));
  }
  const handleImgClick = (job) => {
    setActiveJob(job);
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
                    onClick={() => handleImgClick(job)}
                    className={`ui medium ${activeJob === job ? 'circular' : 'disabled'} image`}
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