function node() {
	for (var i=10;i<10000;i++) {
		for (var j=-10000;j<10000;j++) {
			if ((i * i - j*j) == 1992) {
				console.log(i,j);
			}
		} 
	}
} 

node();