// DisplaySavedData.js

import React, { useEffect, useState } from 'react';

const DisplaySavedData = () => {
  // Define a state variable to hold the locally saved data
  const [savedData, setSavedData] = useState(null);

  useEffect(() => {
    // Load data from localStorage when the component mounts (client-side)
    const savedFormData = localStorage.getItem('formData');

    if (savedFormData) {
      // Parse and set the data in the state
      setSavedData(JSON.parse(savedFormData));
    }
  }, []);

  return (
    <div>
      <h2>Locally Saved Data</h2>
      {savedData ? (
        <ul>
          {/* Render the locally saved data */}
          {Object.keys(savedData).map((key) => (
            <li key={key}>
              <strong>{key}:</strong> {savedData[key]}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data saved locally.</p>
      )}
    </div>
  );
};

export default DisplaySavedData;
