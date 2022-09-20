const express = require('express')
const app = express()
app.use(express.json)

const baseConsulta = {};


//localhost:6000/lembretes
app.get('/lembretes',(req,res)=>{

})

//localhost:6000/eventos
app.post('/eventos',(req,res)=>{

})

app.listen(6000,()=> console.log('Consultas. Porta 6000'));