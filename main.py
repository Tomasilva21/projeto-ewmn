from flask import Flask, render_template, request, jsonify
import tabela_gray, conversor, op_ar

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        option = request.form['option']
        if option == '1':
            n = int(request.form['n_bits'])
            codes = tabela_gray.gray_code(n)
            return render_template('index.html', codes=codes, option=option)
        elif option == '2':
            number = request.form['number']
            base_origem = int(request.form['base_origem'])
            base_destino = int(request.form['base_destino'])
            resultado = conversor.converter_base(number, base_origem, base_destino)
            return render_template('index.html', resultado=resultado, option=option)
        elif option == '3':
            num1 = int(request.form['num1'])
            base1 = int(request.form['base1'])
            num2 = int(request.form['num2'])
            base2 = int(request.form['base2'])
            base_final = int(request.form['base_final'])
            result_soma, result_subtracao = op_ar.calculate(num1, base1, num2, base2, base_final)
            return render_template('index.html', result_soma=result_soma, result_subtracao=result_subtracao, option=option)
        elif option == '4':
            return render_template('index.html', option=option)
    else:
        return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
