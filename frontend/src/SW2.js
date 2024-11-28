var userInfo = document.querySelectorAll('.info-user');
const API_URL = 'https://star-wars-site.onrender.com';

// Registrar usuário
document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.text();
    alert(result);
    window.location.href = 'login.html';
  } catch (error) {
    console.error('Erro:', error);
  }
});

// Login do usuário
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
      console.log('Nome do usuário:', result.username);
      localStorage.setItem('username', result.username);
      window.location.href = '../../SW.html';
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
});
