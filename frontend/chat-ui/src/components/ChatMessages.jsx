import React from 'react'
import { Card } from 'react-bootstrap'

const ChatMessages = ({ messages }) => (
    <Card.Body style={{ overflowY: 'auto', height: '500px', backgroundColor: '#EEEEEE' }}>
        {messages.map((message, index) => (
            <div
                key={index}
                className={`mb-2 d-flex ${message.isBot ? 'justify-content-start' : 'justify-content-end'}`}
            >
                <div
                    style={{
                        backgroundColor: message.isBot ? '#DDDDDD' : '#77EE77',
                        padding: '10px 15px',
                        borderRadius: '15px',
                        maxWidth: '75%',
                        boxShadow: '0 2px 3px rgba(0,0,0,0.15)',
                    }}
                >
                    {message.text}
                </div>
            </div>
        ))}
    </Card.Body>
)

export default ChatMessages