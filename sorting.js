let data = [2,9,3,6,5,8,12];
let len = data.length;
for(i = 0;i < len; i++)
{
	for(j = 0;j < len; j++)
	{
		if(data[j] > data[j+1])
		{
			let temp = data[j];
			data[j] = data[j+1];
			temp = data[j+1];
	
		}
			}
	}
console.log(data);