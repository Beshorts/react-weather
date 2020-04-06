import React from 'react';
import '../styles/App.scss';

// import fontawesome library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSun)

function App() {
  return (
    <div className="App container-fluid">
    </div>
  );
}

export default App;
