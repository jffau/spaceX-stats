import React from 'react';

const MissionKey = () => {
  return (
    <div className="my-3 mx-3">
      <h5 className="my-3">Mission Success Key:</h5>
      <p>
        <span className="px-3 mr-2 bg-success" /> ={' '}
        <span className="mr-5">Success</span>
        <span className="px-3 mr-2 bg-danger" /> ={' '}
        <span className="mr-5">Fail</span>
        <span className="px-3 mr-2 bg-secondary" /> ={' '}
        <span className="mr-5">Unknown</span>
      </p>
    </div>
  );
};

export default MissionKey;
