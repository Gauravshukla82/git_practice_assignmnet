let factor=0;
let Num=17;
for(i=1;i<=Num;i++)
{
	if(Num%i==0)
	{
		factor++;
	}
}
if(factor==2)
{
	console.log("It is a prime number")
}
else
{
	console.log("It is not a prime number")
}