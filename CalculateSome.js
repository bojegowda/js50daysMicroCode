function sumOf(n) {
    if (n == 1) return 1;
    return n + sumOf(n - 1);
}

console(sumOf(10))