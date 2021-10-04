export default function handler(req, res) {
    const abc = req.query.id
    console.log(req)
    res.status(200).json({ 'Name': abc })
}