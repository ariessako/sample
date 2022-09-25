let readline = require('readline-sync')

let speed = Number(readline.question("")) / 8
let totalSize = Number(readline.question(""))
let progress = Number(readline.question(""))

let pct = Math.round(progress / totalSize * 10000) / 100
console.log(`Progress: ${progress} of ${totalSize} MB downloaded (${pct}%)`)

let remaining = totalSize - progress
let totalSeconds = Math.trunc(remaining / speed)

let hourPart = Math.trunc(totalSeconds / 3600)
totalSeconds %= 3600

let minutePart = Math.trunc(totalSeconds / 60)
let secondsPart = totalSeconds % 60

let time = `${hourPart}h ${minutePart}m ${secondsPart}s`
console.log(`Remaining: ${remaining} MB, ${time} remaining`)
