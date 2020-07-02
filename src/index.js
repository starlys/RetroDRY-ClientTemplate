import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import globals from './globals';
import { Session } from 'retrodryclient'; 

function mainRender() {
    ReactDOM.render(<App />, document.getElementById('root'));
}

(async function() {
    mainRender();

    //start session on server
    const apiUrl = 'https://localhost:5001/api/'; //TODO: replace with your actual server
    const newSessionResponse = await fetch(apiUrl + 'main/newsession'); //TODO: replace with your actual authentication endpoint
    const sessionKey = (await newSessionResponse.json()).sessionKey; 

    //start session on client
    const ses = new Session();
    ses.sessionKey = sessionKey;
    ses.serverList = [apiUrl];
    ses.timeZoneOffset = -4 * 60; //TODO: replace with actual user timezone (this example is GMT -4 hours)
    await ses.start();
    if (ses.dataDictionary) 
        globals.session = ses;
    else
        console.log('Could not start retrodry session');

    mainRender();
})();


