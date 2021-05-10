const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());

app.get('/api', function (req, res) {
    res.send('*Server response!*')
})

app.listen(5000, () => {
    console.log('Server listening on port 5000')
})