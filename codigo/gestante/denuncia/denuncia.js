document.addEventListener("DOMContentLoaded", function () {

    const dataInput = document.getElementById("data");
    const complaintForm = document.getElementById("complaintForm");
    const listaDenuncias = document.getElementById("lista-denuncias");

    // 🔐 Gestante logada (simulação)
    const gestanteLogada = JSON.parse(localStorage.getItem("gestanteLogada"));

    if (!gestanteLogada) {
        alert("⚠️ Gestante não autenticada. Você será redirecionada para o login.");
        window.location.href = "/codigo/gestante/loginGestante/loginGestante.html";
        return;
    }


    // ===============================
    // FORMATAÇÃO DA DATA
    // ===============================
    dataInput.addEventListener("input", function (e) {
        let digits = e.target.value.replace(/\D/g, "");
        let formatted = "";

        if (digits.length > 0) formatted += digits.substring(0, 2);
        if (digits.length >= 3) formatted += "/" + digits.substring(2, 4);
        if (digits.length >= 5) formatted += "/" + digits.substring(4, 8);

        e.target.value = formatted;
    });

    // ===============================
    // ENVIO DA DENÚNCIA
    // ===============================
    complaintForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const local = document.getElementById("local").value.trim();
        const data = document.getElementById("data").value.trim();
        const anonima = document.querySelector("input[name='anonima']:checked").value;
        const detalhes = document.getElementById("detalhes").value.trim();

        if (!local || !data || !detalhes) {
            alert("⚠️ Preencha todos os campos obrigatórios.");
            return;
        }

        const denuncia = {
            cpfGestante: gestanteLogada.cpf,
            local,
            data,
            anonima: anonima === "sim",
            detalhes,
            criadaEm: new Date().toISOString()
        };

        try {
            const response = await fetch("http://localhost:3000/denuncias", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(denuncia)
            });

            if (!response.ok) throw new Error();

            alert("✅ Denúncia enviada com sucesso!");
            complaintForm.reset();
            carregarDenuncias();

        } catch (error) {
            alert("❌ Erro ao enviar denúncia.");
            console.error(error);
        }
    });

    // ===============================
    // CONSULTAR DENÚNCIAS DA GESTANTE
    // ===============================
    async function carregarDenuncias() {
        try {
            const response = await fetch(
                `http://localhost:3000/denuncias?cpfGestante=${gestanteLogada.cpf}`
            );

            const denuncias = await response.json();

            if (denuncias.length === 0) {
                listaDenuncias.innerHTML = "<p>Nenhuma denúncia encontrada.</p>";
                return;
            }

            listaDenuncias.innerHTML = "";

            denuncias.forEach(d => {
                listaDenuncias.innerHTML += `
                    <div class="denuncia-card">
                        <p><strong>Local:</strong> ${d.local}</p>
                        <p><strong>Data:</strong> ${d.data}</p>
                        <p><strong>Anônima:</strong> ${d.anonima ? "Sim" : "Não"}</p>
                        <p><strong>Detalhes:</strong> ${d.detalhes}</p>
                        <small>Registrada em: ${new Date(d.criadaEm).toLocaleString()}</small>
                    </div>
                `;
            });

        } catch (error) {
            console.error(error);
            listaDenuncias.innerHTML = "<p>Erro ao carregar denúncias.</p>";
        }
    }

    // 🔄 Carrega automaticamente ao abrir a página
    carregarDenuncias();
});
