export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({ 'text': 'GET' })
    }
    if (req.method === 'POST') {
        res.status(200).json({ 'text': 'POST' })
    }
    if (req.method === 'PUT') {
        res.status(200).json({ 'text': 'PUT' })
    }
    if (req.method === 'DELETE') {
        res.status(200).json({ 'text': 'DELETE' })
    }

}