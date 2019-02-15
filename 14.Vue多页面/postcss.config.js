module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer')({
            browsers: ['last 5 versions']
        })
    ]
}