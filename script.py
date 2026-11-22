def fib(n: int):
    a, b = 0, 1
    res = []
    for _ in range(n):
        res.append(a)
        a, b = b, a + b
    return res

print("3012 Zero-Config Python:", fib(10))