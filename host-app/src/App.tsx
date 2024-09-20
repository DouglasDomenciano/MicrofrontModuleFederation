import React from 'react';

import RemoteComponent from 'remoteApp/RemoteComponent';

function App() {
  return (
    <div>
      <h1>Host Application</h1>
      <React.Suspense fallback="Loading Remote Component...">
        <RemoteComponent />
      </React.Suspense>
    </div>
  );
}

export default App;
