var express = require('express')
app = express()


app.get('/',function(req,res){
    res.sendfile(__dirname+"/html/index.html")
})

app.listen(5080)