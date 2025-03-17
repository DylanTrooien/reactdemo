export async function callBot(text) {
    try {
        const result = await fetch('http://localhost:5000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: text })
        })
        return await result.json()
    } catch (error) {
        console.error('Failed to fetch response:', error)
    }
}