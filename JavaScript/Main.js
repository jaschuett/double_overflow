// JavaScript source code
var power = 100
var val = 1;
var millisecondsToWait = 1000;
var lamb = 1 / millisecondsToWait
var intCost = 100
var powerCost = 100
async function main() {
    //exponential distribution
    u = Math.random()
    x = Math.log(1 - u) / (-1 * lamb)

    val *= power

    document.getElementById('b1').innerHTML = Math.round(val)
    setTimeout(main, x)
}

function upgradeInterval() {
    if (val >= intCost) {
        millisecondsToWait *= 0.99
        lamb = 1 / millisecondsToWait
        val -= intCost
        intCost *= 1.01
    }
    document.getElementById('bInt').innerHTML = "Upgrade Interval (Cost: " + Math.round(intCost) + ", current interval: " + Math.round(millisecondsToWait) + " milliseconds)"
    document.getElementById('b1').innerHTML = Math.round(val)
    //setTimeout(upgradeInterval)
}

function upgradePower() {
    if (val >= powerCost) {
        power *= 1.01
        val -= powerCost
        powerCost *= 1.02
    } 
    document.getElementById('bPow').innerHTML = "Upgrade Profit (Cost: " + Math.round(powerCost) + ", current profit: " + Math.round(power) + ")"
    document.getElementById('b1').innerHTML = Math.round(val)
}
