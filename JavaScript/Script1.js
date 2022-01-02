// JavaScript source code
// Poisson point process
var ppp = Math.E;
var tick = 0;
var val = 0;
var millisecondsToWait = 1000;
var lamb = 1 / millisecondsToWait
var avg = 0;
var intCost = 10
function main() {
    u = Math.random()
    x = Math.log(1 - u) / (-1*lamb)
    val++
    document.getElementById('b1').innerHTML = Math.round(val)
    document.getElementById('bInt').innerHTML = "Upgrade Interval (" + Math.round(intCost) + ")"
    avg *= (val - 1)
    avg += x
    avg /= val

    console.log(avg, x)
    setTimeout(main, x)
}

function upgradeInterval() {
    if (val >= intCost) {
        millisecondsToWait *= 0.95
        lamb = 1 / millisecondsToWait
        val -= intCost
        intCost *= 1.05
    }
}

function upgradePower() {

}
