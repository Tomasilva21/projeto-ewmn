from flask import Flask, jsonify, request
from flask_cors import CORS
from op_ar import arithmetic_operations
from conversor import convert_base
from tabela_gray import generate_gray_code

app = Flask(__name__)
CORS(app)

@app.route('/api/arithmetic', methods=['POST'])
def arithmetic():
    data = request.get_json()
    number1 = data['number1']
    number2 = data['number2']
    operation = data['operation']
    base_in = data['base_in']
    base_out = data['base_out']
    result = arithmetic_operations(number1, number2, operation, base_in, base_out)
    return jsonify(result=result)

@app.route('/api/convert', methods=['POST'])
def convert():
    data = request.get_json()
    number = data['number']
    base_from = data['base_from']
    base_to = data['base_to']
    result = convert_base(number, base_from, base_to)
    return jsonify(result=result)

@app.route('/api/gray_code', methods=['POST'])
def gray_code():
    n = request.get_json().get('bits')
    result = generate_gray_code(n)
    return jsonify(result=result)

if __name__ == "__main__":
    app.run(debug=True)
