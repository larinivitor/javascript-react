/**
 * === include here your page scripts ===
 */
const pageScripts = {
    index: './app/js/index.js'
}

/**
 * === dont change from here ===
 */
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const distFolder = 'app/dist'

module.exports = {
    entry: pageScripts,
    devtool: 'inline-source-map',
    plugins: [new CleanWebpackPlugin([distFolder])],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, distFolder)
    },
    mode: 'development'
};
