const db = require('./src/config/db')
const express = require('express')
const App = express()
const port = process.env.PORT || 8000

try {
    db.connect()
    console.log(`Database Connected`);
    App.listen(port, ()=>{
        console.log(`Connected at port ${port}`);
    })
} catch (error) {
    console.log(error);
}