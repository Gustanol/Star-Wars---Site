const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const cors = require('cors');
const http = require('http');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Servidor está funcionando!');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.log(err));

// Rota de criação de usuário
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const existUsername = await User.findOne({ username });
    if (existUsername) {
      res.status(400).send('Erro: O usuário já existe');
    }
    const user = new User({ username, password });
    await user.save();
    res.status(201).send('Usuário criado com sucesso');
  } catch (err) {
    res.status(500).send('Erro ao criar usuário');
  }
});

// Rota de login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  
  if (user && await user.comparePassword(password)) {
    res.status(200).json({
      message: 'Login bem-sucedido',
      username: user.username
    });
  } else {
    res.status(401).json({
      message: 'Credenciais inválidas'
    });
  }
});

app.get('/api/ping', (req, res) => {
    res.status(200).send('Servidor ativo');
});

// Requisição interna
setInterval(() => {
    http.get(`https://star-wars-site.onrender.com:${PORT}/api/ping`, (res) => {
        console.log(`Ping enviado ao servidor - Status: ${res.statusCode}`);
    }).on('error', (err) => {
        console.error(`Erro ao fazer ping: ${err.message}`);
    });
}, 180000); // 1000ms = 1s

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
