document.getElementById('registrationForm").addEventListener('submit',
     function(event) {
    event.preventDefault(); // Impede o envio do formulário por padrão
    
    const username = document.querySelector('input[name="username"]').value;
    const email = document.querySelector('input[name="email"]').value;
     const password = document.querySelector('input[name="password"]').value;
    let valid = true;
    let message = "";
    
    // Validação do nome de usuário 
     if (username.trim() === "") {
    valid = false;
      message += 'O nome de usuário é obrigatório.\n'; 
}
    
    // Validação do e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) { 
    valid = false;
     message += 'Por favor, insira um e-mail válido.\n';
    }
    
     // Validação da senha
     if (password.length <6) { 
      valid = false;
   message += 'A senha deve ter pelo menos 6 caracteres.\n'; }
    if (valid) {
     alert("Cadastro realizado com sucesso!");
     this.submit(); // Envia o formulário se tudo estiver válido
    } else {
    alert(message); // Exibe mensagens de erro
    } 
});
