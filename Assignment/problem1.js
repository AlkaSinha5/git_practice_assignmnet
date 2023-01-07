// Problem 1 : Check whether a number is Prime or not
let x=13;
let count=0;
for(let i=0;i<=x;i++){
  if(x%i==0){
    count++;
  }
}
if(count==2){
  console.log("prime");
}else{
  console.log("not a prime")
}