let data = [1,2,4,5];
let newEl = 3;
let position = 4;

for(i = data.length - 1; i >= 0; i--){
	if(data[i] >= position){
		data[i+1] = data[i]
	}
	if(data[i] == position){
		data[i] = newEl;
	}
}
console.log(data);