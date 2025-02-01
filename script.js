var state = 0
var num = 0
function primeFactors(n) {
    let factors = [];
    let divisor = 2;
    let m = n;
    while (m >= 2) {
        if (m % divisor == 0) {
            factors.push(divisor);
            m = m / divisor;
        } else {
            divisor++;
        }
    }     
    return factors;
}
function act(){
    if (state == 0) {
        document.getElementById("facts").innerHTML = "";
        state = 1
        let ends = [1,3,7,9]
        num = 50+10*Math.floor(Math.random()*100) + ends[Math.floor(Math.random()*4)]
        document.getElementById("num").innerHTML = num
        let sec = 200;
        inter = setInterval(function() {
        sec--;
        document.getElementById("tim").innerHTML = Math.floor(sec/10)  +"." + (sec%10)+ "s";
        if (sec == 0) { 
            document.getElementById("tim").innerHTML = "0.0s";
            state = 2;
            document.getElementById("but").innerHTML = "Determine primality";
            clearInterval(inter)}
        }, 100);
        }
        else if (state==2) {
            let k = primeFactors(num);
            document.getElementById("facts").innerHTML = k.toString();
            if (k.length == 1){
                document.getElementById("tim").innerHTML = "Prime";
            }
            else{
                document.getElementById("tim").innerHTML = "Not Prime";
            }  
            document.getElementById("but").innerHTML = "Shuffle";
            state = 0;
        }
    }