import React from 'react';
import Talent from '../Talent';

const Paladin = () => {
  let talents = {
    protection: [
      {
        name: 'Improved Devotion Aura',
        desc: 'Increase the armor bonus of your Devotion Aura',
        max: 5,
        current: 0,
        variant: {
          increment: 8,
          type: '%'
        }
      },
      {
        name: 'Redoubt',
        desc: 'Damaging melee and ranged attacks against you have a 10% change to increase your chance to block',
        max: 5,
        current: 0,
        variant: {
          increment: 6,
          type: '%'
        }
      }
    ]
  }

  return (
    <div className="row">
      <div className="col">
        <h1 className="text-center">Holy</h1>
      </div>
      <div className="col">
        <h1 className="text-center">Protection</h1>
        <div className="text-center">
          {
            talents.protection.map(talent => {
              return (
                <Talent key={talent.name} talent={talent} />
              )
            })
          }
        </div>
      </div>
      <div className="col">
        <h1 className="text-center">Retribution</h1>
      </div>
    </div>
  );
};

export default Paladin;