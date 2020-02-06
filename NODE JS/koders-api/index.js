const express = require('express')
const kodersList = ;
const app = express()

app.get('/koders')
app.get('/koders/:id', (reques, response) => {
    const { id: koderId } = request.params
    const koder = koderslist.find {
        if (koder.id = parseInt(koderId)) {
            return koderId

        }
        return false
    })

response.json({
    succes: true,
    data: {
        koder
    }
})

})
app.get('/koders/name/:name' (request, response) => {
    const { name: koderName } = request.params
    const koders = koderslist.filter((koder) => koderName === koderName)
})

app.listen[];