const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://gualeixos456:Dk3A8PfDnK6dCAIr@gustavo.no5ff.mongodb.net/?retryWrites=true&w=majority&appName=Gustavo', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.error(err));

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rota para registro
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).send('Usuário registrado com sucesso!');
  } catch (err) {
    res.status(400).send('Erro ao registrar usuário.');
  }
});

// Rota para login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).send('Usuário não encontrado.');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Senha incorreta.');

    res.status(200).send('Login bem-sucedido!');
  } catch (err) {
    res.status(500).send('Erro no servidor.');
  }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));