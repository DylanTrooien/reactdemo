import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ChatWindow from './components/ChatWindow'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => (
    <Container fluid className="d-flex justify-content-center align-items-center">
        <Row>
            <Col>
                <ChatWindow />
            </Col>
        </Row>
    </Container>
)

export default App