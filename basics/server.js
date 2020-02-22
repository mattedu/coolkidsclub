const express = require("express")

const app = express()

app.use('/', express.static('src'))
app.get("/", (req, res) => {
    res.sendFile("/src/index.html")
})

app.listen(3000, () => console.log('Listening on port 3000'));