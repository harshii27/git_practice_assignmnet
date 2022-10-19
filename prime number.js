let a=27;
let factor=0;
for(let i=1;i<=a;i++){
	if(a%1==0){
		factor+1;
	}
}
if(factor==1){
	console.log("Yes");
}else{
	console.log("No");