def generate_gray_code(n):
    if n <= 0:
        return []

    gray_code = ['0', '1']
    for i in range(2, n + 1):
        gray_code += [code for code in reversed(gray_code)]
        for j in range(len(gray_code)):
            gray_code[j] = ('0' if j < len(gray_code) // 2 else '1') + gray_code[j]
    
    return gray_code
