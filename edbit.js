function digitsCount(n) {
	
	let count = 0;
	let m = Math.abs(n);
  while (m > 10){
		m = m/10;
		count++;
	}
	return count + 1
}

console.log(digitsCount(96980));

// m = 2369.8  count = 1
// m = 236.98  count = 2
// m = 23.698  count= 3
// m = 2.3698  count = 4
// return count + 1 means 4 + 1 = 5
