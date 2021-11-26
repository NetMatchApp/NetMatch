import React, { useEffect, useState } from 'react';
import { Message } from '@net-match/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to net-match!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Extensible Build Framework"
        />
      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;
