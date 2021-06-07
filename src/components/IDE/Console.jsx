import React from 'react';
import { Console } from 'console-feed'

function ConsoleWindow(props) {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <div style={{
                'overflow-y': 'auto',
                height: '87vh',
                backgroundColor: '#242424'
            }} >
                <Console
                    logs={props.logs}
                    variant="dark"
                />
            </div>
        </div>
    );
}

export default ConsoleWindow;



