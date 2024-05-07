
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Working!')
})


app.get('/login', (req, res) => {
    res.send('not implemented');
})

router = express.Router();
router.use(isLogged);

function isLogged(req, res, next) {
    //should check some auth cookie
    if (true) {
        next()
    } else {
        res.redirect('/login');
    }
}

router.post('/start', (req, res) => {
    res.send('not implemented');
})

router.post('/stop', (req, res) => {
    res.send('not implemented');
})

router.post('/backup', (req, res)=> {
    res.send('not implemented');
})
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})