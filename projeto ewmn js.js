document.getElementById('dataForm').addEventListener('submit', async function(event) {
    event.preventDefault();  // Impede o comportamento padrão de recarregar a página ao submeter o formulário

    const inputData = document.getElementById('inputData').value;  // Obtém o valor do campo de entrada

    try {
      const response = await fetch('http://localhost:5000/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputData })  // Envia os dados como JSON
      });

      const result = await response.json();  // Converte a resposta em JSON
      document.getElementById('resultText').textContent = result.result;  // Exibe o resultado na página
    } catch (error) {
      console.error('Erro ao enviar os dados', error);  // Loga qualquer erro que ocorrer
    }
  });