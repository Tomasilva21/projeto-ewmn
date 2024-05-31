# Conversão entre sistemas numéricos sem utilizar funções externas
def converter(numero, base_origem, base_destino):
    # Converte o número para decimal
    numero_decimal = 0
    numero = str(numero)
    for i, digito in enumerate(reversed(numero)):
        if '0' <= digito <= '9':
            valor = ord(digito) - ord('0')
        else:
            valor = ord(digito.upper()) - ord('A') + 10
        numero_decimal += valor * (base_origem ** i)

    # Converte o número decimal para a base de destino
    if base_destino == 10:
        return str(numero_decimal)

    resultado = ""
    while numero_decimal > 0:
        resto = numero_decimal % base_destino
        if resto < 10:
            resultado = chr(resto + ord('0')) + resultado
        else:
            resultado = chr(resto - 10 + ord('A')) + resultado
        numero_decimal //= base_destino

    return resultado or "0"
