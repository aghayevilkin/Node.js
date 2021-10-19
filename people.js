let names = ['Ilkin','Nihat','Nicat']
let ages = [20,18,16]

let greeting = (name) => {
    return `Selam, ${name}`
}

// console.log(names);

// exports.names = names
// exports.ages = ages

// module.exports = {
//     Ad: names,
//     Yash: ages,
//     selamla: greeting
// }

module.exports = {
    names,
    ages,
    greeting
}