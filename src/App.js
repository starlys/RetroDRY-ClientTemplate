import React, {useState} from 'react';
import globals from './globals';
import {DatonStackState, DatonStack} from 'retrodryreact';

import './App.css';

export default function App() {
  const [stackstate, ] = useState(new DatonStackState());
  if (!globals.session) return <div>Initializing session...</div>;

  //TODO: Include some way for the user to access data. Here are some examples you could include in your HTML,
  //either directly in App.js or in some other react component:
  //<button onClick={() => stackstate.add('PhoneTypeLookup|+', false)}>Edit phone types setup table</button>
  //<button onClick={() => stackstate.addEmptyViewon('EmployeeList')}>Query employees</button>
  //<button onClick={() => stackstate.add('Employee|=-1', true)}>Create New Employee</button>
  //Note that you do not need to code anything else: all of the logic for load/save/validate

  //TODO: Include your app's menus, banner, etc
  return (
      <>
        <DatonStack session={globals.session} stackstate={stackstate} />
      </>
  );
};


