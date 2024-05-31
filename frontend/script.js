document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('arithmetic-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const num1 = document.getElementById('num1').value;
        const num2 = document.getElementById('num2').value;
        const operacao = document.getElementById('operacao').value;
        const base_final = document.getElementById('base_final').value;

        const response = await fetch('http://localhost:5000/arithmetic', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ num1, num2, operacao, base_final }),
        });

        const result = await response.json();
        document.getElementById('arithmetic-result').innerText = `Resultado: ${result.resultado}`;
    });

    document.getElementById('gray-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const n_bits = document.getElementById('n_bits').value;

        const response = await fetch('http://localhost:5000/gray', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ n_bits }),
        });

        const result = await response.json();
        document.getElementById('gray-result').innerText = `Resultado: ${result.resultado.join(', ')}`;
    });

    document.getElementById('conversion-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const numero = document.getElementById('numero').value;
        const base_origem = document.getElementById('base_origem').value;
        const base_destino = document.getElementById('base_destino').value;

        const response = await fetch('http://localhost:5000/convert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ numero, base_origem, base_destino }),
        });

        const result = await response.json();
        document.getElementById('conversion-result').innerText = `Resultado: ${result.resultado}`;
    });
});
