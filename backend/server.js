const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.json({message: 'Welcome to the app'})
})

app.listen(4000, () => {
    console.log('Listening on port 4000')
})