import React from 'react';
import Container from 'react-bootstrap/Container';
import { Hook, Console, Decode, Unhook } from 'console-feed'


function ConsoleWindow() {
    
    return (
        <div style={{backgroundColor: 'black'}}>

      <div style={{'overflow-y': 'auto', height:'87vh', backgroundColor: '#242424'}} >
          <Console 
          logs={[]} 
          variant="dark"
          />
      </div>
      </div>
        
            
    );
}

export default ConsoleWindow;



