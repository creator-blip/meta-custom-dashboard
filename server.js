const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

let metaAdsData = []; // in-memory store

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve dashboard
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// PUSH: n8n / Meta → server
app.post('/api/meta', (req, res) => {
    console.log('Meta data received');
    metaAdsData = req.body;
    res.json({ success: true });
});

// PULL: dashboard → server
app.get('/api/ads', (req, res) => {
    res.json(metaAdsData);
});

app.listen(PORT, () => {
    console.log(`Dashboard running at http://localhost:${PORT}`);
});
