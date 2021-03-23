// a b c d ...
function big(n) {
	if (n == 1) {
		return 65
	}
	return big(n - 1) + 1
} 

// console.log(String.fromCharCode(big(1999)))

// x的n次方
function xn(x ,n) {
	if (n === 1) {
		return x
	}
	return xn(x, n - 1) * x
}

// console.log(xn(101010100101101001,20))

function zs(arr) {
	let map = {}
	for (var i = 0;i<arr.length;i++) {
		var val = map[arr[i]] 
		if (!val) {
			map[arr[i]]= 1
		}
		map[arr[i]] ++
	}
	return map
}

// console.log(zs([1,2,3,3,4,5,6,6,6,2,2,2,2,2,2]))

function stockBestTime(arr) {
	var sum = 0
	for (var i = 0;i<arr.length - 1;i++) {
		if (arr[i + 1] > arr[i]) {
			sum += arr[i+1] - arr[i]
		}
	}
	return sum
}

console.log(stockBestTime([7,1,5,3,6,4]))

function maxDepth(root) {
	if (!root) return 0
	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

function minDepth(root) {
	if (!root) return 0 
	// 左子树不存在，就取右边最小深度
	if (!root.left) return 1 + minDepth(root.right)
	// 右子树不存在，就取左边最小深度
	if (!root.right) return 1 + minDepth(root.left)
	// 左右子树都存在
	var leftMinDepth = minDepth(root.left)
	var rightMinDepth = minDepth(root.right)
	// 加1代表当前层
	var res = 1 + Math.min(leftMinDepth, rightMinDepth)
	return res
}

function minDepth1(root) {
	if (root == null) return 0
	var left = minDepth(root.left)
	var right = minDepth(root.right)
	return (left === 0 || right === 0)?(left + right + 1):Math.min(left, right + 1)
}

function generateParenthesis(n) {
	var list = []
	_gen(0, 0, n, '', list)
	return list
}

function _gen(left, right, n, result, list) {
	if (left == n && right == n) {
		return list.push(result)
	}
	if (left < n) {
		_gen(left + 1, right, n, result + '(', list)
	}
	if (left >right && right < n) {
		_gen(left, right + 1, n, result + ')',list)
	}
}

console.log(generateParenthesis(10))













