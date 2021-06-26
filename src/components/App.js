import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import {
  Druid,
  Hunter,
  Mage,
  Paladin,
  Priest,
  Rogue,
  Shaman,
  Warlock,
  Warrior
} from './index';


const App = () => {
  const jobs = [
    { name: 'druid', component: Druid },
    { name: 'hunter', component: Hunter },
    { name: 'mage', component: Mage },
    { name: 'paladin', component: Paladin },
    { name: 'priest', component: Priest },
    { name: 'rogue', component: Rogue },
    { name: 'shaman', component: Shaman },
    { name: 'warlock', component: Warlock },
    { name: 'warrior', component: Warrior }
  ];

  // const [activeJob, setActiveJob] = useState(null);

  // const handleSelectedJob = (job) => {
  //   console.log(job);
  //   setActiveJob(job)
  // }

  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header jobs={jobs} />
          {
            jobs.map(job => {
              return (
                <Route key={job.name} path={`/class/${job.name}`} exact component={job.component} />
              );
            })
          }
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;