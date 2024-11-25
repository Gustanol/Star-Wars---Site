import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import User from path.resolve(__dirname, 'models', 'User');
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://gualeixos456:Dk3A8PfDnK6dCAIr@gustavo.no5ff.mongodb.net/?retryWrites=true&w=majority&appName=Gustavo', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.error(err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota de Registro
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).send('Usuário registrado com sucesso!');
  } catch (err) {
    res.status(400).send('Erro ao registrar usuário.');
  }
});

// Rota de Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).send('Usuário não encontrado.');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Senha incorreta.');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).send('Erro no login.');
  }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
