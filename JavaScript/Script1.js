// JavaScript source code
var power = 1
var val = 0;
var millisecondsToWait = 1000
var lamb = 1 / millisecondsToWait
var intCost = 10
var powerCost = 10
function main() {
    //exponential distribution
    u = Math.random()
    x = Math.log(1 - u) / (-1 * lamb)

    val += power

    document.getElementById('b1').innerHTML = Math.round(val)
    document.getElementById('bInt').innerHTML = "Upgrade Interval (" + Math.round(intCost) + ")"
    document.getElementById('bPow').innerHTML = "Upgrade Power (" + Math.round(powerCost) + ")"

    console.log(power)
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
    if (val >= powerCost) {
        power *= 1.05
        val -= powerCost
        powerCost *= 1.05
    }
}
