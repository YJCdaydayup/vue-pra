// 数据结构

function(head) {
	var cur = head
	var prev = null
	while(cur) {
		cur.next = pre
		pre = cur
		cur = cur.next
	}
	return pre
}

function reverseList(head) {
	var cur = head
	var pre = null
	while(cur) {
		cur.next = pre
		pre = cur 
		cur = cur.next
	}
	return pre
}

function(head) {
	pre = null // 起始点
	pre.next = head
	while (pre.next && pre.next.next) {
		var a = pre.next
		var b = a.next
		pre.next = b
		b.next = a
		a.next = a.next.next
		pre = a 
	}
	return pre
}

function reverse(head) {
	pre = null
	pre.next = head
	while(pre.next && pre.next.next) {
		var a = pre.next
		var b = a.next
		pre.next = b
		b.next = a
		a.next = b.next
		pre = a 
	}
	return pre
}

function(head) {
	var fast = head
	var slow = head
	while(fast && slow && fast.next) {
		slow = slow.next
		fast = fast.next.next
		if (slow == fast) {
			return true
		}
	}
	return false
}

function hasCircle(head) {
	var fast = head
	var slow = head
	while(fast && slow && fast.next) {
		slow = slow.next
		fast = fast.next.next
		if (fast == slow) {
			return true
		}
	}
	return false
}

function sum2(arr, k) {
	var set = [...arr]
	for (var x in arr) {
		set.splice(set.indexOf(x), 1)
		if (set.indexOf(x) > -1) {
			return true
		}
	}
	return false
}

function sum3(nums) {
	var res = []
	nums.sort()
	for (var i = 0;i<nums.length - 2;i++) {
		if (i>0 && nums[i] == nums[i-1]) {
			continue
		}
		l,r = i+1,nums.length - 1
		while (l < r) {
			s = nums[i] + nums[l] + nums[r]
			if (s < 0) {
				l += 1
			}else if (s > 0) {
				r -= 1
			}else {
				res.push(nums[i])
				res.push(nums[l])
				res.push(nums[r])
			}
		}
	}
}








