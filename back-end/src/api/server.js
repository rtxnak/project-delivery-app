const cors = require('cors');
const port = process.env.PORT || 3001;
const app = require('./app');

app.use(cors());

app.listen(port);
console.log(`Api rodando na porta ${port}`);
