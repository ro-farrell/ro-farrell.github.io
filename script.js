var state = 0;
var num = 0;
var difficulty = 10;
var timer = 20;
var difslider = document.getElementById("difslider");
var timslider = document.getElementById("timslider");
difslider.oninput = function() {
    difficulty = this.value;
    document.getElementById("dif").innerHTML = this.value;
}
timslider.oninput = function() {
    timer = this.value;
    document.getElementById("timer").innerHTML = this.value;
}


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
        let x = 30*difficulty;
        let y = 10*Math.floor(Math.random()*7*difficulty);
        let z = ends[Math.floor(Math.random()*4)];
        while ((x+y+z) % 3 == 0){
            y = 10*Math.floor(Math.random()*7*difficulty);
        }
        num = x + y + z;
        document.getElementById("num").innerHTML = num
        let sec = timer * 10;
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