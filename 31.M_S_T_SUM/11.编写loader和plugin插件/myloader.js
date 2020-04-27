const recast = require('recast')

module.exports = source => {
    const ast = recast.parse(source)

    let add = ast.program.body[0]
    // console.log(add)

    return source;
}