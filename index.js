const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.send('Hello Quynh, Bao lau roi Quynh');
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});