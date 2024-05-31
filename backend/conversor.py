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

def convert_base(number, base_from, base_to):
    number_dec = to_decimal(number, base_from)
    result = from_decimal(number_dec, base_to)
    return result
