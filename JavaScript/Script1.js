// JavaScript source code
// Poisson point process
var ppp = Math.E;
var tick = 0;
var val = 0;
var lamb = 10
var millisecondsToWait = 100;
function main() {
    u = Math.random
    x = Math.log(1 - u) / (-lamb)
    setTimeout(main, millisecondsToWait)
    val++
    document.getElementById('b1').innerHTML = val
    main()
}
