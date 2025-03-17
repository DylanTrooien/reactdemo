import React, { useState } from 'react'
import { Form, Button, Card, InputGroup } from 'react-bootstrap'

const ChatInput = ({ onSend }) => {
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (message.trim()) {
            onSend(message, false)
            setMessage('')
        }
    }

    return (
        <Card.Footer>
            <Form onSubmit={handleSubmit} className="d-flex">
                <InputGroup>
                    <Form.Control
                        type="text"
                        placeholder="Type a message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                    />
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </InputGroup>
            </Form>
        </Card.Footer>
    )
}

export default ChatInput