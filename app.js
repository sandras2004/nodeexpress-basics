const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('Request Accepted')
})
app.get('/api',(req,res)=>{
    res.send({
        message : 'Success'
   })
})
app.get('/users',(req,res)=>{
    res.send([{
        name:'John',
        age:20
    },
    {
        name:'Smith',
        age:19
    },
    {
        name:'San',
        age:25
    }
])
})

app.listen(8000,()=>{
    console.log('Server Running Successfully')
})