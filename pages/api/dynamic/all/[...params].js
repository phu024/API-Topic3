export default function handler(req, res) {
    const abc = req.query.params
    console.log(req)
    res.status(200).json({ 'Param': abc })
}