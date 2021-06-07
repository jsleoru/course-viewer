import React, { useEffect, useState } from 'react';
import { Hook, Decode, Unhook } from 'console-feed'
import Editor from './Editor';
import Console from './Console';
import Header from './Header';
import LeftMenu from './LeftMenu';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function Welcome() {
    const [code, setCode] = useState('//Напишите код сюда');
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        Hook(window.console, log => {
            let logItem = Decode(log)
            try {
                if (logItem.data[0].toString().includes("componentWillReceiveProps has been renamed, and is not recommended for use.")) {
                    return
                }
                if (logItem.data[0].toString().includes("is deprecated in StrictMode.")) {
                    return
                }
                if (logItem.data[0].toString().includes("Each child in a list should have a unique")) {
                    return
                }
                if (logItem.data[0].toString().includes("Legacy context API has been detected within a strict-mode tree")) {
                    return
                }
            } catch (err) { }

            setLogs([...logs, logItem])
        });

        return () => Unhook(window.console);
    });
    return (
        <div>
            <Row noGutters={true}>
                <Header />
            </Row>
            <Row noGutters={true}>
                <Col md={0.1} lg={0.1}>
                    <LeftMenu code={code} setLogs={setLogs}/>
                </Col>
                <Col md={8} lg={8}>
                    <Editor setCode={setCode} code={code} />
                </Col>
                <Col md={3} lg={3}>
                    <Console logs={logs}/>
                </Col>
            </Row>
        </div>

    );
}

export default Welcome;