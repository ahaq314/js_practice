data1 = [12,16,32,48,51,72,90];
data2 = [3,6,8,14,19,];
data3 = [];
d1 = 0;
d2 = 0;
d3 = 0;
while(d1 < data1.length && d2 < data2.length)
{
	if (data1[d1] < data2[d2])
	{
		data3[d3] = data1[d1];
		d1++;
	}
	else
	{
		data3[d3] = data2[d2];
		d2++
	}
	d3++;
}
while(d1 < data1.length)
{
	data3[d3] = data1[d1];
	d1++;
	d3++;
}
console.log(data3);