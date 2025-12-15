/*Parte do login*/
function initLogin() {
  const form = document.getElementById("formLogin");
  const feedback = document.getElementById("loginFeedback");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const login = document.getElementById("loginUser").value.trim();
    const senha = document.getElementById("senhaUser").value.trim();

    if (!login || !senha) {
      feedback.innerHTML = `<div class="text-danger">Informe login e senha.</div>`;
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/${USERS}?login=${login}&senha=${senha}`);
      const arr = await res.json();

      if (arr.length === 0) {
        feedback.innerHTML = `<div class="text-danger">Login ou senha inválidos.</div>`;
        return;
      }

      const user = arr[0];
      setLoggedUser(user);

      feedback.innerHTML = `<div class="text-success">Logado! Redirecionando...</div>`;
      setTimeout(() => window.location.href = "/codigo/login.html", 800);

    } catch (err) {
      console.error(err);
      feedback.innerHTML = `<div class="text-danger">Erro ao logar.</div>`;
    }
  });
}

/*Cadastro de Usuários*/
function initCadastroUsuario() {
  const form = document.getElementById("formCadastroUsuario");
  const feedback = document.getElementById("cadFeedback");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const login = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!login || !senha || !nome || !email) {
      feedback.innerHTML = `<div class="text-danger">Preencha todos os campos.</div>`;
      return;
    }

    const existRes = await fetch(`${API_BASE}/${USERS}?login=${login}`);
    const existArr = await existRes.json();
    if (existArr.length > 0) {
      feedback.innerHTML = `<div class="text-danger">Login já existe.</div>`;
      return;
    }

    const novo = {
      login, senha, nome, email,
      admin: false,
      favoritos: []
    };

    await fetch(`${API_BASE}/${USERS}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novo)
    });

    feedback.innerHTML = `<div class="text-success">Usuário criado! Redirecionando...</div>`;
    setTimeout(() => window.location.href = "/public/login.html", 800);
  });
}