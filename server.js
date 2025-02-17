const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Railway will assign a port dynamically

app.get('/', (req, res) => {
    res.send('Geo-Met backend running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
