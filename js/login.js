document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter os valores dos campos de entrada
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar se os campos estão preenchidos
    if (username.trim() === "" || password.trim() === "") {
        document.getElementById("error").textContent = "Por favor, preencha todos os campos.";
        return;
    }


    // Simulação de login (substitua com sua lógica real de login)
    if (username === "usuario" && password === "senha") {
        // Login bem-sucedido, redirecionar para a página principal
        window.location.href = "index.html";
    } else {
        // Exibir mensagem de erro
        document.getElementById("error").textContent = "Usuário ou senha incorretos. Por favor, tente novamente.";
    }
});
