function factorial(n){
    let total = 1;
    while(n > 1){
       total *= n;
       n--;
    }
    return total;
}