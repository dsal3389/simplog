import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import { DataContext } from './context';

function App() {
  const [context, setContext] = useState({});

  return (
    <Fragment>
      <main>
        <DataContext.Provider value={ [context, setContext] }>
          <Outlet />
        </DataContext.Provider>  
      </main>
    </Fragment>  
  );
}

export default App;
