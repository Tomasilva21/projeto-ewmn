from flask import Flask, request, jsonify
from conversor import converter
from op_ar import soma, subtracao
from tabela_gray import gray_code

app = Flask(__name__)

@app.route('/')
def home():
    return "API for Task Manager"

@app.route('/convert', methods=['POST'])
def convert():
    data = request.json
    numero = data['numero']
    base_origem = data['base_origem']
    base_destino = data['base_destino']
    resultado = converter(numero, base_origem, base_destino)
    return jsonify({'resultado': resultado})

@app.route('/arithmetic', methods=['POST'])
def arithmetic():
    data = request.json
    num1 = data['num1']
    num2 = data['num2']
    operacao = data['operacao']
    base_final = data['base_final']
    if operacao == 'soma':
        resultado = soma(num1, num2, base_final)
    elif operacao == 'subtracao':
        resultado = subtracao(num1, num2, base_final)
    else:
        return jsonify({'erro': 'Operação não suportada'}), 400
    return jsonify({'resultado': resultado})

@app.route('/gray', methods=['POST'])
def gray():
    data = request.json
    n_bits = data['n_bits']
    resultado = gray_code(n_bits)
    return jsonify({'resultado': resultado})

if __name__ == '__main__':
    app.run(debug=True)
