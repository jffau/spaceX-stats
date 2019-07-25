import React from 'react';

const MissionKey = () => {
  return (
    <div className="my-5">
      <p>
        <span className="px-3 mx-2 bg-success" /> ={' '}
        <span className="mr-5">Success</span>
        <span className="px-3 mx-2 bg-danger" /> ={' '}
        <span className="mr-5">Fail</span>
        <span className="px-3 mx-2 bg-secondary" /> ={' '}
        <span className="mr-5">Unknown</span>
      </p>
    </div>
  );
};

export default MissionKey;
