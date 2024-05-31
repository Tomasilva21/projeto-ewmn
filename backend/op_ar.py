def to_decimal(number, base):
    number = str(number)
    decimal = 0
    for digit in number:
        decimal = decimal * base + int(digit, base)
    return decimal

def from_decimal(number, base):
    result = ""
    while number > 0:
        result = str(number % base) + result
        number = number // base
    return result if result else "0"

def arithmetic_operations(number1, number2, operation, base_in, base_out):
    number1_dec = to_decimal(number1, base_in)
    number2_dec = to_decimal(number2, base_in)

    if operation == 'add':
        result_dec = number1_dec + number2_dec
    elif operation == 'subtract':
        result_dec = number1_dec - number2_dec

    result = from_decimal(result_dec, base_out)
    return result
