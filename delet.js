let data = [1,2,3,4,5,6,7];
let position = 4;

for(i = position; i <= data.length - 1; i++)
{
	data[i] = data[i+1];
}
	data.length = data.length - 1;
console.log(data);