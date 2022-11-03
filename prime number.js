let a=27;
let factors=0;
for(let i=1;i<=a;i++){
	if(a%i==0){
		factor++;
	}
}
if(factors==2){
	console.log(a,"Yes,This is a prime number");
}else{
	console.log(a,"No,This is not a prime number");
}