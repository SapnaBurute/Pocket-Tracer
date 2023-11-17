const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Server is running !")
})

app.post("/add", (req, res) => {
    res.send("Data is post !")
})
app.listen(port, () => {
    console.log(`Server is running at http;//localhost:${port}`)
})
