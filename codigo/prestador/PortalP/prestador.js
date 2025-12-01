document.addEventListener("DOMContentLoaded", () => {


    const params = new URLSearchParams(window.location.search);
    const prestadorId = params.get('id');

    if (!prestadorId) {
        alert("Erro: ID do prestador não fornecido na URL.");
        document.getElementById("profileForm").style.display = 'none';
        return;
    }

    const apiUrl = `http://localhost:3000/dados_prestadores/${prestadorId}`;


    const form = document.getElementById("profileForm");
    const nomeInput = document.getElementById("nome");
    const registroInput = document.getElementById("registro");

    const emailInput = document.getElementById("email");
    const telefoneInput = document.getElementById("telefone");
    const enderecoInput = document.getElementById("endereco");


    const btnEditar = document.getElementById("btnEditar");
    const btnSalvar = document.getElementById("btnSalvar");

    function toggleEditMode(isEditing) {
        if (isEditing) {

            emailInput.readOnly = false;
            telefoneInput.readOnly = false;
            enderecoInput.readOnly = false;

            btnEditar.style.display = 'none';
            btnSalvar.style.display = 'block';
        } else {
            emailInput.readOnly = true;
            telefoneInput.readOnly = true;
            enderecoInput.readOnly = true;

            btnEditar.style.display = 'block';
            btnSalvar.style.display = 'none';
        }
    }

    async function fetchPrestadorData() {
        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`Prestador com ID ${prestadorId} não encontrado.`);
            }

            const data = await response.json();

            nomeInput.value = data.nome_prestador;
            registroInput.value = data.num_registro;
            emailInput.value = data.email;
            telefoneInput.value = data.telefone;
            enderecoInput.value = data.endereco_atendimento || '';

            toggleEditMode(false);

        } catch (error) {
            console.error("Erro ao buscar dados:", error);
            alert(`Erro ao carregar dados: ${error.message}`);
        }
    }

    async function handleFormSubmit(event) {
        event.preventDefault();

        const updatedData = {
            email: emailInput.value,
            telefone: telefoneInput.value,
            endereco_atendimento: enderecoInput.value
        };

        try {
            const response = await fetch(apiUrl, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedData)
            });

            if (!response.ok) {
                throw new Error("Não foi possível salvar as alterações.");
            }

            alert("Dados atualizados com sucesso!");

            toggleEditMode(false);

        } catch (error) {
            console.error("Erro ao salvar dados:", error);
            alert("Erro ao salvar dados.");
        }
    }

    btnEditar.addEventListener('click', () => {
        toggleEditMode(true);
    });

    form.addEventListener("submit", handleFormSubmit);


    fetchPrestadorData();
});