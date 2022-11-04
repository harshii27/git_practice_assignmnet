let number=72;
let factor=0;
for(let i=1;i<=number;i++){
	if(number%i==0){
		factor++;
	}
}
if(factor==2){
	console.log(number,"Yes it's a prime number");
}else{
	console.log(number,"No It's not a prime number ");
	console.log(number,"No It's not a prime number ");
}