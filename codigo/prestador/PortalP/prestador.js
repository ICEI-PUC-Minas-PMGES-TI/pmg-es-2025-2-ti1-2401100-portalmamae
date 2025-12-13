document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("profileForm");
    const nomeInput = document.getElementById("nome");
    const registroInput = document.getElementById("registro");
    const emailInput = document.getElementById("email");
    const telefoneInput = document.getElementById("telefone");
    const enderecoInput = document.getElementById("endereco");
    const btnEditar = document.getElementById("btnEditar");
    const btnSalvar = document.getElementById("btnSalvar");

    // ---------------- PROTEÇÃO DE ROTA ----------------
    const prestadorLogado = JSON.parse(localStorage.getItem('prestador_logado'));

    if (!prestadorLogado) {
        alert('Você precisa estar logado para acessar esta página.');
        window.location.href = '/codigo/prestador/loginPrestador/loginPrestador.html';
        return;
    }

    // ---------------- PREENCHER DADOS ----------------
    nomeInput.value = prestadorLogado.nome || '';
    registroInput.value = prestadorLogado.id || '—';
    emailInput.value = prestadorLogado.email || '';
    telefoneInput.value = prestadorLogado.telefone || '';
    enderecoInput.value = prestadorLogado.endereco || 'Não informado';

    // ---------------- EDIÇÃO ----------------
    function toggleEditMode(editando) {
        emailInput.readOnly = !editando;
        telefoneInput.readOnly = !editando;
        enderecoInput.readOnly = !editando;

        btnEditar.style.display = editando ? 'none' : 'block';
        btnSalvar.style.display = editando ? 'block' : 'none';
    }

    btnEditar.addEventListener('click', () => toggleEditMode(true));

    // ---------------- SALVAR ALTERAÇÕES ----------------
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const dadosAtualizados = {
            ...prestadorLogado,
            email: emailInput.value,
            telefone: telefoneInput.value,
            endereco: enderecoInput.value
        };

        try {
            await fetch(`http://localhost:3000/usuarios/${prestadorLogado.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dadosAtualizados)
            });

            localStorage.setItem('prestador_logado', JSON.stringify(dadosAtualizados));
            alert('Dados atualizados com sucesso!');
            toggleEditMode(false);

        } catch (error) {
            console.error(error);
            alert('Erro ao salvar dados.');
        }
    });

    toggleEditMode(false);
});
