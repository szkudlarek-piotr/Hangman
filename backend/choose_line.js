const { readFileSync } = require('fs')
console.log("Otwieram pliczek")
fs = require('fs')
path = require('path')
function choose_line() {
    const curdir = __dirname
    const lines_dir = path.join(curdir, "lines.txt")
    let verses_list = readFileSync(lines_dir).toString().split('\n')
    let number_of_lines = verses_list.length
    let chosenLineNumber =  Math.floor(Math.random()*number_of_lines)
    let chosenLine = verses_list[chosenLineNumber]
    return chosenLine
}
module.exports = choose_line