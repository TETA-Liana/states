import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div style={{ border: '1px solid blue', padding: '10px' }}>
      {children}
    </div>
  );
};

export default Wrapper;