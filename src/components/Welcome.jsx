import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Welcome() {
    return (
        
        <Container className={'App-header'} fluid>
        <h1>JSLeo.ru</h1>
        <p style={{marginBottom: '5%'}}>Javascript с нуля</p>
            <Row xs={8} md={8} lg={8} >
                <Col >
                    <Card style={{ width: '18rem'}}>
                        <Card.Body>
                            <Card.Title>Начать курс</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Начните курс 'javascript с нуля' с начала</Card.Subtitle>
                            <p></p>
                            <Button block variant="outline-primary">
                            Начать
                            </Button>
                        </Card.Body>
                    </Card>

                </Col>
                <Col>
                    <Card style={{ width: '18rem'  }}>
                        <Card.Body>
                            <Card.Title>Загрузить сохранение</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Загрузите .ocf файл, чтобы продолжить курс</Card.Subtitle>
                            <Button block variant="outline-secondary">
                            Загрузить сохранение
                            </Button>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Welcome;