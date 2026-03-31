const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth',         require('./routes/auth'));
app.use('/api/factures',     require('./routes/factures'));
app.use('/api/cartes',       require('./routes/cartes'));
app.use('/api/medicaments',  require('./routes/medicaments'));
app.use('/api/stock',        require('./routes/stock'));
app.use('/api/dashboard',    require('./routes/dashboard'));
app.use('/api/users',        require('./routes/users'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));