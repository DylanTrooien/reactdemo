import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'

const app = express()
app.use(cors())
app.use(express.json())

const profile = 'A friendly chatbot who replies with short and concise messages.'

// Handle chat requests
app.post('/api/chat', async (request, response) => {
    const { content } = request.body
    if (!content) return response.status(400).json({ error: 'No message content provided' })

    // Create prompt for LLM
    const prompt = `${profile}\nUser: ${content}\nAssistant:very short chat message`

    // Call Ollama API
    try {
        const llmResponse = await fetch('http://llm:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'mistral',
                prompt: prompt,
                stream: false
            })
        })
        const result = await llmResponse.json()
        response.json({ reply: result.response })
    } catch (error) {
        console.error('Error calling LLM:', error)
        response.status(500).json({ error: 'Failed to get response from LLM' })
    }
})

// Start server
app.listen(5000, () => console.log('API running on port 5000'))
