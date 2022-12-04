let str="abcd";
let bag="";
for(i=str.length-1;i>=0;i--)
{
	bag=bag+str[i];
}
if(bag==str)
{
	console.log("Given string is palindrome");
}
else
{
	console.log("String is not a palindrome");
}
