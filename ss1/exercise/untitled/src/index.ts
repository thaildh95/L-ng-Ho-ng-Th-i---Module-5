function fibonaci(n:number):number {
if (n==1) return 0;
if (n==2) return 1;
return fibonaci(n-1)+fibonaci(n-2);
}
let i = 10;
let sum = 0;
for (let j = 1; j <= i; j++) {
    sum+=fibonaci(j);
}
alert(sum)