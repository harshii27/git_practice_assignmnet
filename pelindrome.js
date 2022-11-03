let string="aba";
let new_String="";
for(let i=string.length-1;i>=0;i--){
	new_String+=string[i];
}
if(string==new_String){
	console.log(string,"Yes,This is a palindromic srtring");
}else{
	console.log(string,"No, This is not a palindromic string");
}
	