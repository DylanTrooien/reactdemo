import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import ChatHeader from './ChatHeader'
import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'
import { callBot } from '../services/chatService'


const ChatWindow = () => {
    const [messages, setMessages] = useState([])

    const addMessage = async (text, isBot) => {
        if (!text.trim()) return

        // Set a message for human or bot
        setMessages(messages => [...messages, { text, isBot }])

        // Stop here if from bot
        if (isBot) return

        // Add a temporary loading message
        const loadingMessage = { text: 'Thinking...', isBot: true, loading: true }
        setMessages(messages => [...messages, loadingMessage])

        // Replace the loading message with chatbot reply
        const json = await callBot(text)
        setMessages(messages =>
            messages.map(message => (message.loading ? { text: json.reply, isBot: true } : message))
        )
    }

    return (
        <Card>
            <ChatHeader chatName="My Local AI Chat Bot" />
            <ChatMessages messages={messages} />
            <ChatInput onSend={addMessage} />
        </Card>
    )
}

export default ChatWindow
