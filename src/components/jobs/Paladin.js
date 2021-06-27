import React from 'react';

const Paladin = () => {
  return (
    <div className="row">
      <div className="col">
        <h1 className="text-center">Holy</h1>
      </div>
      <div className="col">
        <h1 className="text-center">Protection</h1>
        <div className="text-center">
          <button className="btn talent" />
          <button className="btn talent" />
        </div>
      </div>
      <div className="col">
        <h1 className="text-center">Retribution</h1>
      </div>
    </div>
  );
};

export default Paladin;