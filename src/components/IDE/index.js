import React from 'react';
import Container from 'react-bootstrap/Container';
import Editor from './Editor';
import Console from './Console';
import Header from './Header';
import LeftMenu from './LeftMenu';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Welcome() {
    return (
        <div>
            <Row noGutters={true}>
                <Header />
            </Row>
            <Row noGutters={true}>
                <Col md={0.1} lg={0.1}>
                    <LeftMenu />
                </Col>
                <Col md={8} lg={8}>
                    <Editor />
                </Col>
                <Col md={3} lg={3}>
                    <Console />
                </Col>
            </Row>
        </div>

    );
}

export default Welcome;