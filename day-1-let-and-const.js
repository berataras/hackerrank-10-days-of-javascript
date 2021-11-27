function main() {
    const PI = Math.PI;
    let r = parseFloat(readLine());
  
    const area = PI * r * r;
    const perimeter = 2 * PI * r;

    console.log(area)
    console.log(perimeter)
    try {    

        PI = 0;
      
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}