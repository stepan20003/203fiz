const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const authMiddleware = require('./middleware/auth');

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/workflows', authMiddleware, require('./routes/workflows'));
app.use('/api/nodes', authMiddleware, require('./routes/nodes'));
app.use('/api/execute', authMiddleware, require('./routes/execute'));

app.get('/', (req, res) => {
  res.send('Automation Platform API is running in Armenian!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
