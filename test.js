console.log('Testing server setup...');
const express = require('express');
console.log('✅ Express loaded');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('F1 Analytics Server is running!');
});

app.listen(PORT, () => {
    console.log(`✅ Test server running at http://localhost:${PORT}`);
});