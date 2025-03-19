document.addEventListener("DOMContentLoaded", function () {
    // Botão de login
    let entrarBtn = document.querySelector(".login-button");

    // Evento para login
    if (entrarBtn) {
        entrarBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Impede o envio do formulário padrão

            let usuarioInput = document.querySelector(".nomeUsuario");
            let senhaInput = document.querySelector("input[type='password']");
            let usuario = usuarioInput.value.trim();
            let senha = senhaInput.value.trim();

            let valid = true;

            // Reseta erros anteriores
            resetError(usuarioInput);
            resetError(senhaInput);

            // Verifica se os campos estão preenchidos
            if (usuario === "") {
                showError(usuarioInput);
                valid = false;
            }

            if (senha === "") {
                showError(senhaInput);
                valid = false;
            }

            if (valid) {
                // Salva o nome do usuário no localStorage
                localStorage.setItem("nomeUsuario", usuario);

                // Redireciona para o menu
                window.location.href = "../tela_menu/menu.html";
            }
        });
    }

    // Função para exibir erro
    function showError(inputElement) {
        inputElement.style.border = "2px solid red";
        inputElement.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        inputElement.placeholder = "Preenchimento Necessário";
        inputElement.classList.add("error-placeholder");
    }

    // Função para resetar erro
    function resetError(inputElement) {
        inputElement.style.border = "";
        inputElement.style.backgroundColor = "";
        inputElement.placeholder = inputElement.getAttribute("data-placeholder") || "";
        inputElement.classList.remove("error-placeholder");
    }

    // Salva placeholders originais
    document.querySelectorAll("input").forEach(input => {
        input.setAttribute("data-placeholder", input.placeholder);
        input.addEventListener("input", () => resetError(input));
    });
});