// Vai no HTML, pega o elemento cepForm e adiciona um evento de escuta para submit para exibir dados.
document.getElementById("cepForm").addEventListener("submit", exibirDados);

function exibirDados(event) {
  event.preventDefault(); // Impede o recarregamento da tela.

  const cep = document.getElementById("cep").value; // Variável para pegar o valor digitado no input.

  // URL -> viabrasil.com.br/ws/01001000/json/

  if (cep.length === 8 || cep.length === 9) { // Delimita um númeo de caracteres para 8 ou 9 (aceitando "-")
    fetch(`https://viacep.com.br/ws/${cep}/json/`) // GET (precisa utilizar https://)
      .then((response) => response.json())
      .then((data) => {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
            <p>Endereço: ${data.logradouro}</p>
            <p>Bairro: ${data.bairro}</p>
            <p>Cidade: ${data.localidade}</p>
            <p>UF: ${data.uf}</p>
            <p>DDD: ${data.ddd}</p>
        `;
      })
      .catch(() => {
        alert("ERRO AO FAZER A SOLICITACAO");
      });
  } else {
    alert("Digitado o cep completo");
  }
}