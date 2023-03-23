let data = [20,30,40,50,60,70,80,90,50];
let item = 50;
let index = undefined;
for(i = 0; i <= data.length - 1; i++){
	if(data[i] == item){
		console.log(`${data[i]} found at length ${index = i}`)
	}
}