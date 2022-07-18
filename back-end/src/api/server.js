const port = process.env.PORT || 3003;
const cors = require('cors');
const app = require('./app');

app.use(cors());

app.listen(port);
console.log(`Api rodando na porta ${port}`);
