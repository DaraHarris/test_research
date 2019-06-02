function fibonacci(n) {
	if(n<0) throw new Error("not a fibonacci number");
	if (n===0) return 0;
	if (n===1) return 1;
	return fibonacci(n-1)+fibonacci(n-2);

}

module.exports = fibonacci;