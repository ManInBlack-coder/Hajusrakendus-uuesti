const express = require('express');
const mysql = require('mysql'); 
const cors = require('cors');
const sessions = require('express-session');

const app = express();

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}))

app.use(express.json())

const db = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'Log_In'
})

app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

app.use(sessions({
    secret: 'thisismysecretkey',
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 24 hours
    resave: false
}))

app.get('/', (req, res) => {
    if (req.session.user) {
        res.json({ valid: true, email: req.session.user.email})
    } else {
        res.send({ valid: false })
    } 
})

// signup

app.post('/signup', (req,res) => {
    //const sql = "INSERT INTO Login ('name','email','password') VALUES(?)";
    const sql = "INSERT INTO Login_data (Nimi,Gmail,Parool) VALUES(?)";

    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values],(err,data)=> {

        if(err) {
            console.log(err)
            return res.json('ERROR')

        }

        return res.json(data)
    })
})

// login 

app.post('/login', (req,res) => {
    //const sql = "INSERT INTO Login ('name','email','password') VALUES(?)";
    const sql = "SELECT Nimi,Gmail,Parool FROM Login_data WHERE Gmail = ? AND Parool = ?";
    console.log(req.body)
    


    db.query(sql, [req.body.email, req.body.password],(err,data)=> {

        if(err) {
            console.log(err)
            return res.json('ERROR')

        }

        if(data.length > 0) {
            req.session.user = {
                email: req.body.email,
                
            }
            console.log(req.session.user)
            res.status(200).json({
                message: 'User is logged in',
                user_session: req.session.user,
                Login: true
            })
        } else {
            return res.json('failed')
        }
    })
})









app.listen(8081, ()=> {
    console.log('server working on PORT 8081')
})

