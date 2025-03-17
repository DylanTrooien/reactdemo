import React from 'react'
import { Card } from 'react-bootstrap'

const ChatHeader = ({ chatName }) => (
    <Card.Header className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">{chatName}</h5>
    </Card.Header>
)

export default ChatHeader