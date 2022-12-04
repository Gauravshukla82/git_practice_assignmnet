str="abcd";
bag="";
for(i=str.length;i>=0;i--)
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
