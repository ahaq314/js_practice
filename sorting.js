let data = [2,1,3,6,5,8,1];
let len = data.length;
for(i = 0;i < len; i++)
{
	for(j = 0;j < len; j++)
	{
		if(data[j] > data[j+1]){
			let temp = data[j];
			data[j] = data[j+1];
			temp = data[j+1];
	}
}
}
console.log(data)

// let data = [34,3,1,25,54,12,89,5,76,789];


//       for(i=0;i<data.length;i++){

//         for(j=0;j<data.length;j++){

//             if(data[j]>data[j+1]){
//                 let temp=data[j];
//                 data[j]=data[j+1];
//                 data[j+1]=temp;
//             }
//         }
//       }
//       console.log(data)
