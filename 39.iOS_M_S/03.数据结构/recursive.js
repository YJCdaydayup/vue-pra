// 斐波拉契递归 1 1 2 3 5 8 13 21 ...
function fblq(n) {
	if (n == 1 || n == 2) {
		return 1
	}
	return fblq(n - 1) + fblq(n - 2)
}

console.log(fblq(8))




