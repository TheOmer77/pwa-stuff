import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { version } from './version.json';

const updateServiceWorker = (serviceWorker, setUpdatingState) => {
  // Set the updating state to let the user know that the app is now updating.
  setUpdatingState(true);

  const registrationWaiting = serviceWorker.registration.waiting;

  if (registrationWaiting) {
    // Skip waiting and activate the updated service worker
    registrationWaiting.postMessage({ type: 'SKIP_WAITING' });

    registrationWaiting.addEventListener('statechange', (e) => {
      if (e.target.state === 'activated') {
        // Reload the page to use the updated service worker
        window.location.reload();
      }
    });
  }
};

const App = () => {
  const serviceWorker = useSelector((state) => state.serviceWorker);
  const [updating, setUpdating] = useState(false);

  return (
    <div className='App'>
      <h1>Hello world!!!</h1>
      <p>Hello hello hello hello hello hello</p>
      <p>Version {version}</p>
      <img src='testImg.png' alt='Test'></img>
      {serviceWorker.initialized && (
        <p>
          Service worker is initialized, this app is now available for offline
          use.
        </p>
      )}
      {serviceWorker.updated && (
        <p>
          {updating ? (
            'Updating now, please wait.'
          ) : (
            <span>
              An update to this app is available, and will automatically be
              installed after you close this app.{' '}
              <button
                onClick={() => updateServiceWorker(serviceWorker, setUpdating)}
              >
                Update now
              </button>
            </span>
          )}
        </p>
      )}
    </div>
  );
};

export default App;
