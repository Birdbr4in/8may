import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('hello world'));
app.get('/trf', (req, res) => res.send('hello from trf'))
app.listen(3000, () => { console.log('Listening on port 3000'); });