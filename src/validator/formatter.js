function trim(){
    let string = " function Up "
    console.log(string.trim())
}
function lowerCase(){
    let string = "Swati Ghosh"
    console.log(string.toLowerCase())
}
function upperCase(){
    let string = "Swati Ghosh"
    console.log(string.toUpperCase())
}

module.exports.trim = trim
module.exports.lowerCase = lowerCase
module.exports.upperCase = upperCase